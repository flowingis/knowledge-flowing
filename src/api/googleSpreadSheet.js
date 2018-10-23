const factory = () => {
  const getData = async (spreadsheetId, range) => {
    const response = await gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId,
      range
    })

    return response.result
  }

  return {
    getData
  }
}

export default factory()
