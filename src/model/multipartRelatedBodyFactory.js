export default ({
  name,
  mimeType,
  body,
  parent,
  bodyMimeType = 'application/octet-stream',
  boundary
}) => {
  const end = '--' + boundary + '--'

  let value = '--' + boundary + '\r\nContent-Type: application/json\r\n\r\n'
  value +=
    JSON.stringify({
      name,
      parents: [parent],
      mimeType
    }) + '\r\n'

  value += '--' + boundary + `\r\nContent-Type: ${bodyMimeType}\r\n\r\n`
  value += `${body}\r\n`

  value += end

  return value
}
