import Navigo from 'navigo'
import './pages'

let router

const main = document.querySelector('main')

export default () => {
  router = new Navigo(null, true)

  router
    .on(() => {
      main.innerHTML = '<kf-pages-login></kf-pages-login>'
    })
    .on('home', () => {
      main.innerHTML = '<kf-pages-home></kf-pages-home>'
    })
    .on('discovery', () => {
      main.innerHTML = '<kf-pages-archive></kf-pages-archive>'
    })
    .on('discovery/create', () => {
      main.innerHTML =
        '<kf-pages-create-discovery></kf-pages-create-discovery>'
    })
    .on('tools', () => {
      main.innerHTML = '<kf-pages-tools></kf-pages-tools>'
    })
    .on('discovery/:id', ({ id }) => {
      main.innerHTML = `<kf-pages-discovery-detail discovery-id="${id}"></kf-pages-discovery-detail>`
    })
    .resolve()

  return {
    navigate: url => router.navigate(url),
    lastRouteResolved: () => router.lastRouteResolved(),
    updatePageLinks: () => router.updatePageLinks()
  }
}
