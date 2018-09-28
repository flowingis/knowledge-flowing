import Navigo from 'navigo'

export default () => {
  const main = document.querySelector('main')
  const router = new Navigo(null, true)

  router
    .on(async () => {
      await import('./pages/login/Login')
      await window.customElements.whenDefined('kf-pages-login')
      main.innerHTML = '<kf-pages-login></kf-pages-login>'
    }).resolve()
}
