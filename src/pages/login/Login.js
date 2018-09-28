import template from './Login.html'
import { htmlToElement, bindEvents } from 'src/utils/dom'

class LoginPage extends HTMLElement {
  connectedCallback () {
    const element = htmlToElement(template)
    this.appendChild(element)
    bindEvents(element, this, 'click')
  }

  onLoginClick () {
    console.log('Login')
  }
}

window.customElements.define('kf-pages-login', LoginPage)
