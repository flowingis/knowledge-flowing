import template from './DiscoveryDetail.html'
import { htmlToElement, bindEvents, updateText } from 'utils/dom'
import discoveries from 'model/discoveries'

class DiscoveryDetailPage extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    const element = htmlToElement(template)
    bindEvents(element, this, 'click', 'input')
    updateText(element, this)
    this.appendChild(element)
    this.style.display = 'block'
    discoveries.listElements().then(console.log)
  }

  get discoveryId () {
    return this.getAttribute('discovery-id')
  }

  set discoveryId (value) {
    this.setAttribute('discovery-id', value)
  }
}

window.customElements.define('kf-pages-discovery-detail', DiscoveryDetailPage)
