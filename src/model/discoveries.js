import pipeDriveClient from './pipeDriveClient'
import googleDrive from './googleDrive'
import googleSpreadsheet from './googleSpreadSheet'
import _get from 'lodash.get'

const formatId = id => id.toString().padStart(5, '0')

const transformResult = driveElement => {
  const nameParts = driveElement.name.split(' - ')
  return {
    directoryId: driveElement.id,
    id: parseInt(nameParts[0]),
    title: nameParts[1],
    webViewLink: driveElement.webViewLink
  }
}

const factory = pipeDriveClient => {
  const get = async pipeDriveId => {
    const formattedId = formatId(pipeDriveId)
    const directory = await googleDrive.findDirectory(formattedId, false)
    if (!directory) {
      return
    }

    return transformResult(directory)
  }

  const create = async pipeDriveId => {
    const response = await pipeDriveClient.get(pipeDriveId)
    const directoryTitle = `${formatId(pipeDriveId)} - ${_get(
      response,
      'data.title'
    )}`
    return googleDrive.createDirectory(directoryTitle)
  }

  const list = async () => {
    const response = await googleDrive.list()
    return response.map(transformResult)
  }

  const listElements = async () => {
    const data = await googleSpreadsheet.getData(
      process.env.DISCOVERY_ELEMENTS_SPREADSHEET_ID,
      process.env.DISCOVERY_ELEMENTS_SPREADSHEET_RANGE
    )
    const values = _get(data, 'values', [])
    return values.map(row => {
      const [name, length, notes] = row
      return {
        name,
        length,
        notes
      }
    })
  }

  return {
    create,
    list,
    listElements,
    get
  }
}

export default factory(pipeDriveClient)
