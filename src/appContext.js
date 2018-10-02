import invariant from 'utils/invariant'

export const factory = () => {
  let router

  const getRouter = () => router
  const setRouter = r => {
    invariant(!router, 'Router already defined')
    router = r
  }

  return {
    getRouter,
    setRouter
  }
}

export default factory()
