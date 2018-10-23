import get from 'lodash.get'
import multipartRelatedBodyFactory from './multipartRelatedBodyFactory'
import uuid from 'uuid'
import googleAuth from './googleAuth'

export const DIRECTORY_MIME_TYPE = 'application/vnd.google-apps.folder'

const factory = () => {
  const create = async ({
    name,
    data,
    mimeType = 'application/json',
    parent = process.env.BASE_GOOGLE_DRIVE_DIRECTORY
  }) => {
    const boundary = uuid.v4()

    const headers = new window.Headers({
      Authorization: `Bearer ${googleAuth.getToken()}`,
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

  const update = ({ fileId, data }) => {
    const headers = new window.Headers({
      Authorization: `Bearer ${googleAuth.getToken()}`
    })

    const body = new window.FormData()

    body.append(
      'metadata',
      new window.Blob([JSON.stringify({})], {
        type: 'application/json'
      })
    )

    body.append(
      'data',
      new window.Blob([JSON.stringify(data)], {
        type: 'application/json'
      })
    )

    const config = {
      method: 'PATCH',
      headers,
      body
    }

    const URL = `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=multipart`

    return window
      .fetch(URL, config)
      .then(r => r.json())
      .then(r => r.id)
  }

  const download = async fileId => {
    const URL = `https://content.googleapis.com/drive/v3/files/${fileId}?alt=media&fields=webContentLink&key=${
      process.env.GOGGLE_API_KEY
    }`

    const headers = new window.Headers({
      Authorization: `Bearer ${googleAuth.getToken()}`
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
    createDirectory,
    create,
    download,
    update
  }
}

export default factory()
