import template from './Tools.html'
import { htmlToElement } from 'utils/dom'

export default class ToolsPage extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    const element = htmlToElement(template)
    this.appendChild(element)
  }
}
