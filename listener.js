module.exports = (callback) => {
  window.addEventListener('hashchange', callback, false)
  window.addEventListener('popstate', callback, false)
  const pushState = window.history.pushState
  window.history.pushState = (state, ...args) => {
    callback({state})
    return pushState.apply(history, [state].concat(args));
  }
}
