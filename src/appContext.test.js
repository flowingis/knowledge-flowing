import { factory } from './appContext'

describe('appContext', () => {
  test('should throw if I try to set the router more than one time', () => {
    const appContext = factory()
    appContext.setRouter({})
    expect(() => {
      appContext.setRouter({})
    }).toThrow()
  })
})
