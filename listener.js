module.exports = (callback) => {
  window.addEventListener('hashchange', callback, false)
  window.addEventListener('popstate', callback, false)
  const pushState = window.history.pushState
  window.history.pushState = (state, ...args) => {
    const returnValue = pushState.apply(history, [state].concat(args))
    callback({state})
    return returnValue;
  }
}
