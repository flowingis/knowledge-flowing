import googleAuth from 'api/googleAuth'
import app from './app'
import routerFactory from './router'
import appContext from './appContext'

googleAuth.setInitListener(() => {
  const router = routerFactory()
  appContext.setRouter(router)
  app.start()
})

window.handleClientLoad = googleAuth.onClientLoad
