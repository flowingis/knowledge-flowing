import googleAuth from 'src/model/GoogleAuth'
import app from './app'

app.start()

console.log(process.env.BASE_GOOGLE_DRIVE_DIRECTORY)

window.handleClientLoad = googleAuth.onClientLoad
