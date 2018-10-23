import discoveryFactory from './discovery'
let discovery

beforeEach(() => {
  discovery = discoveryFactory()
})

test('listeners should be invoked immediatly', () => {
  let counter = 0
  discovery.addChangeListener(data => {
    counter++
  })
  expect(counter).toBe(1)
})

test('listeners should be invoked when changing data', () => {
  let counter = 0
  discovery.addChangeListener(data => {
    counter++
  })
  discovery.addElement(1)
  expect(counter).toBe(2)
})

test('listeners should be removed when unsubscribing', () => {
  let counter = 0
  const unsubscribe = discovery.addChangeListener(data => {
    counter++
  })
  unsubscribe()
  discovery.addElement(1)
  expect(counter).toBe(1)
})

test('discovery should be immutable', () => {
  discovery.addChangeListener(data => {
    expect(() => {
      data.elements = [1]
    }).toThrow()
  })
})
