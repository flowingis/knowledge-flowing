import googleAuth from 'src/model/googleAuth'
import app from './app'

app.start()

window.handleClientLoad = googleAuth.onClientLoad
