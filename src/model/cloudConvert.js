const processRequest = () => {
  const headers = new window.Headers({
    Authorization: `Bearer ${process.env.CLOUD_CONVERT_API_KEY}`
  })

  return window
    .fetch('https://api.cloudconvert.com/process', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        apiKey: process.env.CLOUD_CONVERT_API_KEY,
        inputformat: 'svg',
        outputformat: 'png'
      })
    })
    .then(r => r.json())
}

const start = (processRequest, content) => {
  const { url } = processRequest

  if (!url) {
    console.error(processRequest)
    return Promise.reject(new Error('Invalid request'))
  }

  const body = new window.FormData()

  const jsonBody = {
    apiKey: process.env.CLOUD_CONVERT_API_KEY,
    wait: true,
    download: true,
    input: 'base64',
    file: window.btoa(content),
    filename: 'file.svg',
    outputformat: 'png'
  }

  Object.keys(jsonBody).forEach(key => {
    body.append(key, jsonBody[key])
  })

  return window
    .fetch(url, {
      method: 'POST',
      body
    })
    .then(r => r.arrayBuffer())
}

const convertSvg = async svg => {
  try {
    const pr = await processRequest()
    const result = await start(pr, svg)
    return result
  } catch (e) {
    return Promise.reject(e)
  }
}

export default {
  convertSvg
}
