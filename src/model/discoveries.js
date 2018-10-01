import pipeDriveClient from './pipeDriveClient'
import googleDrive from './googleDrive'
import _get from 'lodash.get'

const formatId = id => id.toString().padStart(5, '0')

const factory = (pipeDriveClient) => {
  const get = async pipeDriveId => {
    const formattedId = formatId(pipeDriveId)
    return googleDrive.findDirectory(formattedId, false)
  }

  const create = async pipeDriveId => {
    const response = await pipeDriveClient.get(pipeDriveId)
    const directoryTitle = `${formatId(pipeDriveId)} - ${_get(response, 'data.title')}`
    return googleDrive.createDirectory(directoryTitle)
  }

  return {
    create,
    get
  }
}

export default factory(pipeDriveClient)
