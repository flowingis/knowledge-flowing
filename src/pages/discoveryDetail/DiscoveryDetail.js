import template from './DiscoveryDetail.html'
import { htmlToElement, bindEvents, updateText } from 'utils/dom'
import discoveries from 'model/discoveries'
import googleDrive from 'model/googleDrive'

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
    const id = await googleDrive.createFile({
      name: 'test.doc',
      data: '<html><body><h1>Prova</h1></body></html>',
      mimeType: 'application/vnd.google-apps.document'
    })
    console.log('saved', id)
  }

  get discoveryId () {
    return this.getAttribute('discovery-id')
  }

  set discoveryId (value) {
    this.setAttribute('discovery-id', value)
  }
}

window.customElements.define('kf-pages-discovery-detail', DiscoveryDetailPage)
