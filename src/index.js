import googleAuth from 'src/model/GoogleAuth'
import app from './app'

app.start()

console.log(process.env.GOGGLE_CLIENT_ID)

window.handleClientLoad = googleAuth.onClientLoad
