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
    const file = await googleDrive.find(`${pipeDriveId}.json`, true)
    if (!file) {
      return
    }

    const { id } = file

    const result = await googleDrive.download(id)

    if (!result) {
      return
    }

    return JSON.parse(result)
  }

  const create = async pipeDriveId => {
    const response = await pipeDriveClient.get(pipeDriveId)
    const title = _get(response, 'data.title')

    const directoryTitle = `${formatId(pipeDriveId)} - ${title}`

    const directory = await googleDrive.createDirectory(directoryTitle)

    const discovery = {
      id: pipeDriveId,
      directory,
      title,
      elements: []
    }

    return googleDrive.create({
      name: `${pipeDriveId}.json`,
      parent: directory.id,
      data: JSON.stringify(discovery)
    })
  }

  const save = async directory => {
    const { id } = directory

    const file = await googleDrive.find(`${id}.json`, true)
    if (!file) {
      return
    }

    return googleDrive.update({
      fileId: file.id,
      data: directory
    })
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
    return values.map((row, index) => {
      const [name, length, notes] = row
      return {
        id: index,
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
    get,
    save
  }
}

export default factory(pipeDriveClient)
