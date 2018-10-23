import template from './Home.html'
import appContext from 'appContext'
import { htmlToElement } from 'utils/dom'

export default class HomePage extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    const element = htmlToElement(template)
    this.appendChild(element)
    this.style.display = 'block'
    appContext.getRouter().updatePageLinks()
  }
}
