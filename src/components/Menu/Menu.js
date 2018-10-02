import template from './Menu.html'
import { htmlToElement, bindEvents } from 'utils/dom'
import googleAuth from 'model/googleAuth'
import appContext from 'appContext'

class Menu extends HTMLElement {
  connectedCallback () {
    const child = this.firstElementChild

    const element = htmlToElement(template)
    element.querySelector('[data-content]').appendChild(child)

    bindEvents(element, this, 'click')
    this.appendChild(element)
    this.style.display = 'block'
    appContext.getRouter().updatePageLinks()
  }

  onLogoutClick () {
    googleAuth.signOut()
  }
}

window.customElements.define('kf-components-menu', Menu)
