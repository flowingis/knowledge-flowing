import router from './router'
import googleAuth from 'src/model/GoogleAuth'

const start = () => {
  googleAuth.setInitListener(() => {
    router.init()
    googleAuth.addSignInListener(signedId => {
      const isLogin = !router.lastRouteResolved().url
      if (signedId && isLogin) {
        router.navigate('/home')
      } else if (!signedId && !isLogin) {
        router.navigate('')
      }
    })
  })
}

export default {
  start
}
