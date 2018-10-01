/* eslint no-useless-escape: 0 */
import invariant from 'utils/invariant'

export const extractIdFromPipeDriveUrl = data => {
  const id = window.parseInt(data, 10)
  if (!Number.isNaN(id)) {
    return id
  }

  const regex = new RegExp(`https:\/\/${process.env.PIPEDRIVE_COMPANY_DOMAIN}\.pipedrive\.com\/deal\/([0-9]+)`)
  const match = data.match(regex)
  return match && match[1]
}

const factory = () => {
  const get = id => {
    invariant(id, 'Id is required for search')

    const url = `https://${process.env.PIPEDRIVE_COMPANY_DOMAIN}.pipedrive.com/v1/deals/${id}?api_token=${process.env.PIPEDRIVE_API_TOKEN}`
    return window
      .fetch(url)
      .then(r => r.json())
  }

  return {
    get
  }
}

export default factory()
