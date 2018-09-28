import pipeDriveClient from './pipeDriveClient'
import googleDrive from './googleDrive'
import get from 'lodash.get'

const factory = (pipeDriveClient) => {
  const create = async id => {
    const response = await pipeDriveClient.get(id)
    const directoryTitle = `${id} - ${get(response, 'data.title')}`
    const directory = await googleDrive.findDirectory(directoryTitle)
    if (directory) {
      return directory
    }

    return googleDrive.createDirectory(directoryTitle)
  }

  return {
    create
  }
}

export default factory(pipeDriveClient)
