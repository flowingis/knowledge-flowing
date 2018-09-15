import googleAuth from './model/GoogleAuth'
import driveApi from './model/DriveApi'

const signInButton = document.querySelector('[data-authorize]')
const signOutButton = document.querySelector('[data-signout]')
const listButton = document.querySelector('[data-list-file]')
const createButton = document.querySelector('[data-create-file]')
const updateButton = document.querySelector('[data-update-file]')
const readButton = document.querySelector('[data-read-file]')

signInButton.addEventListener('click', googleAuth.signIn)
signOutButton.addEventListener('click', googleAuth.signOut)

listButton.addEventListener('click', () => {
  driveApi.getFilesInDirectory().then(r => {
    console.log(r)
  })
})

createButton.addEventListener('click', () => {
  driveApi.createFile({
    name: (new Date()).getTime() + '.json',
    data: {
      date: (new Date()).getTime()
    }
  }).then(console.log)
})

updateButton.addEventListener('click', () => {
  driveApi.updateFile({
    fileId: '1-Ipvw-0IonLkHokgbT4cp1zB3jDfUTD5',
    data: {
      updatedDate: (new Date()).getTime()
    }
  }).then(console.log)
})

readButton.addEventListener('click', () => {
  driveApi.readContent({
    fileId: '1-Ipvw-0IonLkHokgbT4cp1zB3jDfUTD5'
  }).then(console.log)
})

googleAuth.setInitListener(() => {
  googleAuth.addSignInListener(signedId => {
    signInButton.disabled = signedId
    signOutButton.disabled = !signedId
  })
})

window.handleClientLoad = googleAuth.onClientLoad
