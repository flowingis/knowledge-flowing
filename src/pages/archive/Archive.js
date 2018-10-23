import template from './Archive.html'
import { htmlToElement, bindEvents } from 'utils/dom'
import discoveries from 'api/discoveries'
import appContext from 'appContext'

export default class ArchivePage extends HTMLElement {
  connectedCallback () {
    this.render()
    this.tableBody = this.querySelector('tbody')
    this.list()
  }

  async list () {
    const tableBody = htmlToElement('<tbody></tbody>')

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
        tableBody.appendChild(element)
      })

    this.tableBody.replaceWith(tableBody)

    appContext.getRouter().updatePageLinks()
  }

  render () {
    const element = htmlToElement(template)
    bindEvents(element, this, 'click', 'input')
    this.appendChild(element)
    this.style.display = 'block'
  }
}
