import template from './Tools.html'
import { htmlToElement } from 'utils/dom'

class ToolsPage extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    const element = htmlToElement(template)
    this.appendChild(element)
  }
}

window.customElements.define('kf-pages-tools', ToolsPage)
