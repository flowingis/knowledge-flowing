import get from 'lodash.get'

const DIRECTORY_NAME = 'knowledge-flowing-data'

const factory = () => {
  const list = () => gapi.client.drive.files.list({
    'q': `mimeType='application/vnd.google-apps.folder' and trashed=false and name ='${DIRECTORY_NAME}'`,
    'pageSize': 100,
    'fields': 'nextPageToken, files(id, name)'
  }).then(r => get(r, 'result.files'))

  const create = () => {
    const fileMetadata = {
      'name': DIRECTORY_NAME,
      'mimeType': 'application/vnd.google-apps.folder'
    }

    return gapi.client.drive.files.create({
      resource: fileMetadata,
      fields: 'id, name'
    }).then(file => file.result)
  }

  const getDirectory = async () => {
    let directory = (await list())[0]

    if (directory) {
      return directory
    }

    directory = await create()
    return directory
  }

  const getFilesInDirectory = async () => {
    const { id } = await getDirectory()

    console.log(id)

    return gapi.client.drive.files.list({
      'q': `'${id}' in parents`,
      'pageSize': 100,
      'fields': 'nextPageToken, files(id, name)'
    }).then(r => get(r, 'result.files'))
  }

  const createFile = ({
    name,
    data
  }) => {
    const user = gapi.auth2.getAuthInstance().currentUser.get()
    const accessToken = user.getAuthResponse(true).access_token

    const headers = new window.Headers({
      'Authorization': `Bearer ${accessToken}`
    })

    const body = new window.FormData()

    body.append('metadata', new window.Blob([JSON.stringify({
      name,
      parents: ['1WZS3_nShJv-Im3xPd69UytYHl0mWstkD']
    })], {
      type: 'application/json'
    }))

    body.append('data', new window.Blob([JSON.stringify(data)], {
      type: 'application/json'
    }))

    const config = {
      method: 'POST',
      headers,
      body
    }

    const URL = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart'

    return window.fetch(URL, config).then(r => r.json()).then(r => r.id)
  }

  const updateFile = ({
    fileId,
    data
  }) => {
    const user = gapi.auth2.getAuthInstance().currentUser.get()
    const accessToken = user.getAuthResponse(true).access_token

    const headers = new window.Headers({
      'Authorization': `Bearer ${accessToken}`
    })

    const body = new window.FormData()

    body.append('metadata', new window.Blob([JSON.stringify({})], {
      type: 'application/json'
    }))

    body.append('data', new window.Blob([JSON.stringify(data)], {
      type: 'application/json'
    }))

    const config = {
      method: 'PATCH',
      headers,
      body
    }

    const URL = `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=multipart`

    return window.fetch(URL, config).then(r => r.json()).then(r => r.id)
  }

  const readContent = ({fileId}) => gapi.client.drive.files.get({
    fileId: fileId,
    alt: 'media'
  }).then(r => JSON.parse(r.body))

  return {
    getFilesInDirectory,
    createFile,
    updateFile,
    readContent
  }
}

export default factory()
