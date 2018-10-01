import googleAuth from 'model/googleAuth'
import app from './app'

app.start()

window.handleClientLoad = googleAuth.onClientLoad
