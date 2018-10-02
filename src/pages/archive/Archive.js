import template from './Archive.html'
import { htmlToElement, bindEvents } from 'utils/dom'
import discoveries from 'model/discoveries'

class ArchivePage extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    const element = htmlToElement(template)
    bindEvents(element, this, 'click', 'input')
    this.appendChild(element)
    this.style.display = 'block'
  }
}

window.customElements.define('kf-pages-archive', ArchivePage)
