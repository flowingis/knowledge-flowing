import template from './Login.html'
import { htmlToElement, bindEvents } from 'utils/dom'
import googleAuth from 'api/googleAuth'

export default class LoginPage extends HTMLElement {
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
    googleAuth.signIn()
  }
}
