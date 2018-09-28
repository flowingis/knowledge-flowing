import invariant from 'src/utils/invariant'

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
