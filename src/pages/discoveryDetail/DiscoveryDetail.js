import template from './DiscoveryDetail.html'
import { htmlToElement, bindEvents, updateText } from 'utils/dom'
import discoveries from 'api/discoveries'

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

    this.renderList()
    this.load()
  }

  async load () {
    this.discovery = await discoveries.get(this.discoveryId)
    updateText(this)
  }

  async renderList () {
    const elements = await discoveries.listElements()
    const ul = this.querySelector('ul')

    ul.innerHTML = ''

    elements
      .map(element => `<li>${element.name} (${element.length}) minutes</li>`)
      .map(htmlToElement)
      .forEach(domElement => {
        ul.appendChild(domElement)
      })
  }

  async save () {
    /*
    await googleDrive.create({
      name: this.printableDiscovery,
      data: `<html></body>${this.innerHTML}</body></html>`,
      parent: this.discovery.directoryId,
      mimeType: 'application/vnd.google-apps.document'
    }) */
    this.discovery.elements.push(this.discovery.elements.length)
    await discoveries.save(this.discovery)
    swal('Discovery Saved')
  }

  get discoveryId () {
    return this.getAttribute('discovery-id')
  }

  set discoveryId (value) {
    this.setAttribute('discovery-id', value)
  }

  get printableDiscovery () {
    if (!this.discovery) {
      return this.discoveryId
    }

    return `${this.discovery.id} - ${this.discovery.title}`
  }
}

window.customElements.define('kf-pages-discovery-detail', DiscoveryDetailPage)
