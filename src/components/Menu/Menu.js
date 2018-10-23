import template from './Menu.html'
import { htmlToElement, bindEvents } from 'utils/dom'
import googleAuth from 'api/googleAuth'
import appContext from 'appContext'

export default class Menu extends HTMLElement {
  connectedCallback () {
    const child = this.firstElementChild

    const element = htmlToElement(template)
    element.querySelector('[data-content]').appendChild(child)

    bindEvents(element, this, 'click')
    this.appendChild(element)
    this.style.display = 'block'
    const router = appContext.getRouter()
    if (router) {
      router.updatePageLinks()
    }
  }

  onLogoutClick () {
    googleAuth.signOut()
  }
}
