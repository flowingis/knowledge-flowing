import googleAuth from 'src/model/GoogleAuth'
import app from './app'

app.start()

window.handleClientLoad = googleAuth.onClientLoad
