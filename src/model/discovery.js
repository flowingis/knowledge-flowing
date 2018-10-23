const INITIAL_DATA = {
  elements: []
}

const freeze = data => Object.freeze(Object.assign({}, data))

export default (initialData = INITIAL_DATA) => {
  const data = { ...initialData }
  let changeListeners = []

  const invokeListeners = () => changeListeners.forEach(cb => cb(freeze(data)))

  const addChangeListener = (cb, immediate = true) => {
    changeListeners.push(cb)
    if (immediate) {
      cb(freeze(data))
    }
    return () => {
      changeListeners = changeListeners.filter(element => element !== cb)
    }
  }

  const addElement = element => {
    data.elements.push(element)
    invokeListeners()
  }

  return {
    addChangeListener,
    addElement
  }
}
