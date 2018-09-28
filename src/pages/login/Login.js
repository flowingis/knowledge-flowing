import template from './Login.html'
import { htmlToElement, bindEvents } from 'src/utils/dom'
import googleAuth from 'src/model/GoogleAuth'

class LoginPage extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    const element = htmlToElement(template)
    bindEvents(element, this, 'click')
    this.appendChild(element)
    this.style.display = 'block'
  }

  onLoginClick () {
    googleAuth
      .signIn()
  }
}

window.customElements.define('kf-pages-login', LoginPage)
