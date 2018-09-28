import router from './router'
import googleAuth from 'src/model/GoogleAuth'

router.init()

window.handleClientLoad = googleAuth.onClientLoad
