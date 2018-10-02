import template from './Archive.html'
import { htmlToElement, bindEvents } from 'utils/dom'
import discoveries from 'model/discoveries'
import appContext from 'appContext'

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
            <td>
              <a class="ui button primary" target="_blank" data-navigo href="discovery/${
  discovery.id
}">
                Open
              </a>
              <a class="ui button" target="_blank" href="${
  discovery.webViewLink
}">
                <i class="google drive icon"></i>
                Drive
              </a>
            </td>
        </tr>`
      )
      .map(htmlToElement)
      .forEach(element => {
        this.tableBody.appendChild(element)
      })

    appContext.getRouter().updatePageLinks()
  }

  render () {
    const element = htmlToElement(template)
    bindEvents(element, this, 'click', 'input')
    this.appendChild(element)
    this.style.display = 'block'
  }
}

window.customElements.define('kf-pages-archive', ArchivePage)
