/* eslint no-useless-escape: 0 */

import template from './Home.html'
import { htmlToElement, bindEvents } from 'src/utils/dom'
import discoveries from 'src/model/discoveries'
import googleAuth from 'src/model/GoogleAuth'

const extractIdFromPipeDriveUrl = url => {
  const regex = new RegExp(`https:\/\/${process.env.PIPEDRIVE_COMPANY_DOMAIN}\.pipedrive\.com\/deal\/([0-9]+)`)
  const match = url.match(regex)
  return match && match[1]
}

class HomePage extends HTMLElement {
  connectedCallback () {
    this.render()
    this.inputValue = ''
  }

  render () {
    const element = htmlToElement(template)
    bindEvents(element, this, 'click', 'input')
    this.appendChild(element)
    this.style.display = 'block'
  }

  onInputChange (e) {
    this.inputValue = e.target.value
  }

  async onSearchClick () {
    const id = extractIdFromPipeDriveUrl(this.inputValue)
    const link = this.querySelector('[data-drive-directory]')
    const response = await discoveries.create(id)
    link.innerText = response.name
    link.href = response.webViewLink
  }

  onLogoutClick () {
    googleAuth
      .signOut()
  }
}

window.customElements.define('kf-pages-home', HomePage)
