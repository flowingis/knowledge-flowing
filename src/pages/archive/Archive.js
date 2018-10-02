import template from './Archive.html'
import { htmlToElement, bindEvents } from 'utils/dom'
import discoveries from 'model/discoveries'

class ArchivePage extends HTMLElement {
  connectedCallback () {
    this.render()
    this.tableBody = this.querySelector('tbody')
    this.list()
  }

  async list () {
    this.tableBody.innerHTML = ''

    const list = await discoveries.list()

    list
      .map(
        discovery => `<tr>
            <td>${discovery.id}</td>
            <td>${discovery.title}</td>
            <td><a target="_blank" href="${discovery.webViewLink}">${
  discovery.webViewLink
}</a></td>
        </tr>`
      )
      .map(htmlToElement)
      .forEach(element => {
        this.tableBody.appendChild(element)
      })
  }

  render () {
    const element = htmlToElement(template)
    bindEvents(element, this, 'click', 'input')
    this.appendChild(element)
    this.style.display = 'block'
  }
}

window.customElements.define('kf-pages-archive', ArchivePage)
