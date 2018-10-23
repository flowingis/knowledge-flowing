const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
  'https://sheets.googleapis.com/$discovery/rest?version=v4'
]
const SCOPES =
  'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/spreadsheets.readonly'

const factory = () => {
  let signInListeners = []
  let onInitListener = () => {}

  const onClientLoad = () => {
    const initClient = () => {
      return gapi.client
        .init({
          apiKey: process.env.GOGGLE_API_KEY,
          clientId: process.env.GOGGLE_CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        })
        .then(function () {
          gapi.auth2.getAuthInstance().isSignedIn.listen(status => {
            signInListeners.forEach(cb => cb(status))
          })
          onInitListener()
        })
    }

    gapi.load('client:auth2', initClient)
  }

  const addSignInListener = cb => {
    cb(gapi.auth2.getAuthInstance().isSignedIn.get())
    signInListeners.push(cb)
    return () => {
      signInListeners = signInListeners.filter(toCheck => toCheck !== cb)
    }
  }

  const signIn = () => gapi.auth2.getAuthInstance().signIn()
  const signOut = () => gapi.auth2.getAuthInstance().signOut()
  const setInitListener = cb => {
    onInitListener = cb
  }

  const getToken = () => {
    const user = gapi.auth2.getAuthInstance().currentUser.get()
    if (!user) {
      return
    }
    return user.getAuthResponse(true).access_token
  }

  return {
    onClientLoad,
    addSignInListener,
    signIn,
    signOut,
    setInitListener,
    getToken
  }
}

export default factory()
