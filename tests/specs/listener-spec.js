var Nightmare = require('nightmare')
var budo = require('budo')
// jasmine.DEFAULT_TIMEOUT_INTERVAL= 999999; // use for debugging in nightmare

describe('url-listener', () => {
  var uri
  var nightmare
  beforeAll((done) => {
    budo('./tests/specs/index.js', { port: 8000 })
    .on('connect', (ev) => {
      console.log('Server running on %s', ev.uri)
      uri = ev.uri
      done()
    })
  })

  beforeEach(() => {
    nightmare = new Nightmare({
      // show: true,
      // openDevTools: true
    })
  })

  it('should not break webpack (sanity check)', (done) => {
    nightmare
      .goto(uri)
      .evaluate( () => {
        return localStorage.getItem('event_calls')
      })
      .end()
      .then( (result) => {
        expect(result).toEqual('0')
        done()
      })
      .catch( (error) => { console.error('Test Failed', error); fail(); done() })
  })

  it('should update on setting the hash value', (done) => {
    nightmare
      .goto(uri)
      .click('#hash-button')
      .evaluate( () => {
        return localStorage.getItem('event_calls')
      })
      .end()
      .then( (result) => {
        // one for the hashchange, and one for pushstate
        expect(result).toEqual('2')
        done()
      })
      .catch( (error) => { console.error('Test Failed', error); fail(); done() })
  })

  it('should update on hitting the back button', (done) => {
    nightmare
      .goto(uri)
      .click('#hash-button')
      .click('#clear-button')
      .back()
      .evaluate( () => {
        return localStorage.getItem('event_calls')
      })
      .end()
      .then( (result) => {
        // one for the hashchange, and one for popstate
        expect(result).toEqual('2')
        done()
      })
      .catch( (error) => { console.error('Test Failed', error); fail(); done() })
  })

  it('should update on hitting the forward button', (done) => {
    nightmare
      .goto(uri)
      .click('#hash-button')
      .back()
      .click('#clear-button')
      .forward()
      .evaluate( () => {
        return localStorage.getItem('event_calls')
      })
      .end()
      .then( (result) => {
        // one for the hashchange, and one for popstate
        expect(result).toEqual('2')
        done()
      })
      .catch( (error) => { console.error('Test Failed', error); fail(); done() })
  })

  it('should update on pushState', (done) => {
    nightmare
      .goto(uri)
      .click('#push-state-button')
      .evaluate( () => {
        return localStorage.getItem('event_calls')
      })
      .end()
      .then( (result) => {
        expect(result).toEqual('1')
        done()
      })
      .catch( (error) => { console.error('Test Failed', error); fail(); done() })
  })

  it('should still call old pushState', (done) => {
    nightmare
      .goto(uri)
      .click('#push-state-button')
      .evaluate( () => {
        return localStorage.getItem('pushstate_called')
      })
      .end()
      .then( (result) => {
        expect(result).toEqual('true')
        done()
      })
      .catch( (error) => { console.error('Test Failed', error); fail(); done() })
  })

})
