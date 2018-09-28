import template from './Home.html'
import { htmlToElement } from 'src/utils/dom'

class HomePage extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    const element = htmlToElement(template)
    this.appendChild(element)
  }
}

window.customElements.define('kf-pages-home', HomePage)
