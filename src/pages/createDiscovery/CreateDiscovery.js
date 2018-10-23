import template from './CreateDiscovery.html'
import { htmlToElement, bindEvents } from 'utils/dom'
import discoveries from 'api/discoveries'
import pipeDriveClient, {
  extractIdFromPipeDriveUrl
} from 'api/pipeDriveClient'
import appContext from 'appContext'

class CreateDiscoveryPage extends HTMLElement {
  connectedCallback () {
    this.render()
    this.inputValue = ''
    this.router = appContext.getRouter()
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
    let discovery = await discoveries.get(id)
    if (discovery) {
      this.router.navigate(`/discovery/${id}`)
      return
    }

    const pipeDriveDeal = await pipeDriveClient.get(id)

    if (!pipeDriveDeal.success) {
      swal({
        text: `No Pipedrive deal found for id ${id}`,
        type: 'warning'
      })
      return
    }

    const { value } = await swal({
      text: `Do you want to create a discovery for project "${
        pipeDriveDeal.data.title
      }?"`,
      showCancelButton: true
    })

    if (value) {
      await discoveries.create(id)
      this.router.navigate(`/discovery/${id}`)
    }
  }
}

window.customElements.define('kf-pages-create-discovery', CreateDiscoveryPage)
