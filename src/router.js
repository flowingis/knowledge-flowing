import Navigo from 'navigo'

let router

const main = document.querySelector('main')

export default () => {
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
    .on('discovery', async () => {
      await import('./pages/archive/Archive')
      await window.customElements.whenDefined('kf-pages-archive')
      main.innerHTML = '<kf-pages-archive></kf-pages-archive>'
    })
    .on('discovery/create', async () => {
      await import('./pages/createDiscovery/CreateDiscovery')
      await window.customElements.whenDefined('kf-pages-create-discovery')
      main.innerHTML =
        '<kf-pages-create-discovery></kf-pages-create-discovery>'
    })
    .on('discovery/:id', async ({ id }) => {
      await import('./pages/discoveryDetail/DiscoveryDetail')
      await window.customElements.whenDefined('kf-pages-discovery-detail')
      main.innerHTML = `<kf-pages-discovery-detail discovery-id="${id}"></kf-pages-discovery-detail>`
    })
    .resolve()

  return {
    navigate: url => router.navigate(url),
    lastRouteResolved: () => router.lastRouteResolved(),
    updatePageLinks: () => router.updatePageLinks()
  }
}
