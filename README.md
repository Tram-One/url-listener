# url-listener
Listen for url changes without using a timer

## Install
```sh
npm install --save url-listener
```

## Usage
```javascript
const urlListener = require('url-listener')

urlListener(event => {
  // your logic here!
  console.log('URL UPDATED!')
})
```

## Notes
Events may be called more than once, so whatever callback you pass
in should be idempotent _(that is, hitting it multiple times is the same as
hitting it once, like an elevator or cross-walk button)_.

## Development
First, clone this repository, and install the dependencies.
```sh
git clone https://github.com/JRJurman/url-listener
cd url-listener
npm install
```

You can build the project by running the build script
```sh
npm run build
```

You can run the tests (which use a combination of NightmareJS and Jasmine)
```sh
npm test
```

PRs Welcome!
