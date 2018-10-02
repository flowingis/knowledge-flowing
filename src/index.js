import googleAuth from 'model/googleAuth'
import app from './app'
import routerFactory from './router'
import appContext from './appContext'

const router = routerFactory()
appContext.setRouter(router)

app.start()

window.handleClientLoad = googleAuth.onClientLoad
