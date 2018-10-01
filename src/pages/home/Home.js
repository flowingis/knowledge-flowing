import template from './Home.html'
import { htmlToElement, bindEvents } from 'utils/dom'
import discoveries from 'model/discoveries'
import googleAuth from 'model/googleAuth'
import { extractIdFromPipeDriveUrl } from 'model/pipeDriveClient'
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
