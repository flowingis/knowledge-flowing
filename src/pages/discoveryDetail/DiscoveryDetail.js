import template from './DiscoveryDetail.html'
import { htmlToElement, bindEvents, updateText } from 'utils/dom'
import discoveries from 'api/discoveries'
import discoveryFactory from 'model/discovery'

const getPrintableDiscovery = discovery =>
  `${discovery.id} - ${discovery.title}`

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
    const discoveryData = await discoveries.get(this.discoveryId)
    this.discovery = discoveryFactory(discoveryData)

    this.updateDomUnsubscribe = this.discovery.addChangeListener(data => {
      updateText(this, {
        ...this,
        printableDiscovery: getPrintableDiscovery(data)
      })
    })

    this.saveUnsubscribe = this.discovery.addChangeListener(async data => {
      await discoveries.save(data)
      swal('Discovery Saved')
    }, false)
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
    this.discovery.addElement(new Date().getTime())
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

    return getPrintableDiscovery(this.discovery)
  }

  disconnectedCallback () {
    this.updateDomUnsubscribe || this.updateDomUnsubscribe()
    this.saveUnsubscribe || this.saveUnsubscribe()
  }
}

window.customElements.define('kf-pages-discovery-detail', DiscoveryDetailPage)
