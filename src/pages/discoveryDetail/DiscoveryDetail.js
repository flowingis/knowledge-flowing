import template from './DiscoveryDetail.html'
import { htmlToElement, bindEvents } from 'utils/dom'

class DiscoveryDetailPage extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    const element = htmlToElement(template)
    bindEvents(element, this, 'click', 'input')
    this.appendChild(element)
    this.style.display = 'block'
  }

  get discoveryId () {
    return this.getAttribute('discovery-id')
  }

  set discoveryId (value) {
    this.setAttribute('discovery-id', value)
  }
}

window.customElements.define('kf-pages-discovery-detail', DiscoveryDetailPage)
