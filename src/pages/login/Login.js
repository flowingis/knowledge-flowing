import template from './Login.html'
import { htmlToElement, bindEvents, updateProps } from 'src/utils/dom'
import googleAuth from 'src/model/GoogleAuth'
import router from 'src/router'

class LoginPage extends HTMLElement {
  connectedCallback () {
    this.render()
    this.initGoogleAuth()
    this.state = {
      logged: false
    }
  }

  get loginDisabled () {
    return this.state.logged
  }

  get logoutDisabled () {
    return !this.state.logged
  }

  render () {
    const element = htmlToElement(template)
    bindEvents(element, this, 'click')
    this.appendChild(element)
  }

  initGoogleAuth () {
    googleAuth.setInitListener(() => {
      googleAuth.addSignInListener(signedId => {
        this.state = {
          ...this.state,
          logged: signedId
        }
        updateProps(this)
        if (signedId) {
          router.navigate('/home')
        }
      })
    })
  }

  onLoginClick () {
    googleAuth
      .signIn()
  }

  onLogoutClick () {
    googleAuth
      .signOut()
  }
}

window.customElements.define('kf-pages-login', LoginPage)
