import initRoutes from './routes'
import googleAuth from 'src/model/GoogleAuth'

initRoutes()

window.handleClientLoad = googleAuth.onClientLoad
