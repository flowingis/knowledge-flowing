export default (condition, message = 'Invariant Violation') => {
  if (!condition) {
    const error = new Error(message)

    error.name = 'Invariant Violation'
    error.framesToPop = 1

    throw error
  }
}
