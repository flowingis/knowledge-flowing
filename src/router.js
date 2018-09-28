import Navigo from 'navigo'

let router

const main = document.querySelector('main')

const init = () => {
  router = new Navigo(null, true)

  router
    .on(async () => {
      await import('./pages/login/Login')
      await window.customElements.whenDefined('kf-pages-login')
      main.innerHTML = '<kf-pages-login></kf-pages-login>'
    })
    .on('home', async () => {
      await import('./pages/home/Home')
      await window.customElements.whenDefined('kf-pages-home')
      main.innerHTML = '<kf-pages-home></kf-pages-home>'
    })
    .resolve()
}

export default {
  init,
  navigate: url => router.navigate(url),
  lastRouteResolved: () => router.lastRouteResolved()
}
