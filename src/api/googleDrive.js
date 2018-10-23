import get from 'lodash.get'
import multipartRelatedBodyFactory from './multipartRelatedBodyFactory'
import uuid from 'uuid'

export const DIRECTORY_MIME_TYPE = 'application/vnd.google-apps.folder'

const factory = () => {
  /*
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
  } */

  const createFile = async ({
    name,
    data,
    mimeType = 'application/json',
    parent = process.env.BASE_GOOGLE_DRIVE_DIRECTORY
  }) => {
    const user = gapi.auth2.getAuthInstance().currentUser.get()
    const accessToken = user.getAuthResponse(true).access_token

    const boundary = uuid.v4()

    const headers = new window.Headers({
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': `multipart/related; boundary=${boundary}`
    })

    const body = multipartRelatedBodyFactory({
      name,
      boundary,
      body: data,
      parent,
      mimeType
    })

    const URL =
      'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart'

    const config = {
      method: 'POST',
      headers,
      body
    }

    return window
      .fetch(URL, config)
      .then(r => r.json())
      .then(r => r.id)
  }

  const download = async fileId => {
    const URL = `https://content.googleapis.com/drive/v3/files/${fileId}?alt=media&fields=webContentLink&key=${
      process.env.GOGGLE_API_KEY
    }`
    const user = gapi.auth2.getAuthInstance().currentUser.get()
    const accessToken = user.getAuthResponse(true).access_token

    const headers = new window.Headers({
      Authorization: `Bearer ${accessToken}`
    })

    const config = {
      method: 'GET',
      headers
    }

    return window.fetch(URL, config).then(r => r.text())
  }

  const find = async (name, equal = true, parent, mimeType) => {
    const nameOperator = equal ? '=' : 'contains'
    let q = `trashed = false and name ${nameOperator} '${name}'`

    if (parent) {
      q = `${q} and '${parent}' in parents`
    }

    if (mimeType) {
      q = `${q} and mimeType='${mimeType}`
    }

    return gapi.client.drive.files
      .list({
        q,
        pageSize: 1,
        fields: 'files(id, name, webViewLink)'
      })
      .then(r => get(r, 'result.files.0'))
  }

  const findDirectory = async (
    name,
    equal = true,
    parent = process.env.BASE_GOOGLE_DRIVE_DIRECTORY
  ) => {
    return find({
      name,
      equal,
      parent,
      mimeType: DIRECTORY_MIME_TYPE
    })
  }

  const list = async ({
    mimeType = DIRECTORY_MIME_TYPE,
    parent = process.env.BASE_GOOGLE_DRIVE_DIRECTORY
  } = {}) => {
    return gapi.client.drive.files
      .list({
        q: `mimeType='${mimeType}' and trashed = false and '${parent}' in parents`,
        orderBy: 'name desc',
        pageSize: 1000,
        fields: 'files(id, name, webViewLink)'
      })
      .then(r => get(r, 'result.files'))
  }

  const createDirectory = async (
    name,
    parent = process.env.BASE_GOOGLE_DRIVE_DIRECTORY
  ) => {
    const fileMetadata = {
      name,
      parents: [parent],
      mimeType: DIRECTORY_MIME_TYPE
    }

    return gapi.client.drive.files
      .create({
        resource: fileMetadata,
        fields: 'id, name, webViewLink'
      })
      .then(file => file.result)
  }

  return {
    list,
    find,
    findDirectory,
    createDirectory,
    createFile,
    download
  }
}

export default factory()
