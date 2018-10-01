import { extractIdFromPipeDriveUrl } from './pipeDriveClient'

describe('pipeDriveClient', () => {
  describe('extractIdFromPipeDriveUrl', () => {
    test('should work with plain numbers', () => {
      expect(extractIdFromPipeDriveUrl(1)).toBe(1)
    })
  })
})
