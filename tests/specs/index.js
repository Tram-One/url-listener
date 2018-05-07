// we won't always have this file built, so don't depend on it to pass lint
// eslint-disable-next-line import/no-unresolved
const urlListener = require('../../dist/url-listener.umd')

// set the inital value of event_calls to 0
if (localStorage.getItem('event_calls') === null) {
  localStorage.setItem('event_calls', 0)
}

// set up old pushState event, just to make sure we don't stop calling this
const pushState = window.history.pushState
window.history.pushState = (...args) => {
  localStorage.setItem('pushstate_called', true)
  pushState.apply(window.history, args)
}

// set up the listener, which increments the event_calls value
urlListener(() => {
  const calls = parseInt(localStorage.getItem('event_calls'), 10)
  localStorage.setItem('event_calls', calls + 1)
})

// set up some buttons to help us mutate the state of the window
const clearButton = document.createElement('button')
clearButton.id = 'clear-button'
clearButton.onclick = () => {
  localStorage.setItem('event_calls', 0)
}
document.body.appendChild(clearButton)

const hashButton = document.createElement('button')
hashButton.id = 'hash-button'
hashButton.onclick = () => {
  window.location.hash = 'hash-value'
}
document.body.appendChild(hashButton)

const pushStateButton = document.createElement('button')
pushStateButton.id = 'push-state-button'
pushStateButton.onclick = () => {
  window.history.pushState({}, '', '/foo')
}
document.body.appendChild(pushStateButton)
