import './components'
import googleAuth from 'model/googleAuth'
import appContext from './appContext'

const start = () => {
  const router = appContext.getRouter()
  googleAuth.addSignInListener(signedId => {
    const isLogin = !router.lastRouteResolved().url
    if (signedId && isLogin) {
      router.navigate('/home')
    } else if (!signedId && !isLogin) {
      router.navigate('')
    }
  })
}

export default {
  start
}
