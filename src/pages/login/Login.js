import template from './Login.html'
import { htmlToElement, bindEvents } from 'utils/dom'
import cloudConvert from 'model/cloudConvert'

const init = async () => {
  const result = await cloudConvert.convertSvg(
    document.getElementById('svgContainer').innerHTML
  )
  let base64String = window.btoa(
    String.fromCharCode(...new Uint8Array(result))
  )
  console.log(base64String)
}

class LoginPage extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    const element = htmlToElement(template)
    bindEvents(element, this, 'click')
    this.appendChild(element)
    this.style.display = 'block'
  }

  onLoginClick () {
    init()
  }
}

window.customElements.define('kf-pages-login', LoginPage)
