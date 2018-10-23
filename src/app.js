import googleAuth from 'api/googleAuth'
import appContext from './appContext'
import './components'
import './pages'

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
