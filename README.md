# url-listener

<a href="https://www.npmjs.com/package/url-listener"><img src="https://img.shields.io/npm/dm/url-listener.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/url-listener"><img src="https://img.shields.io/npm/v/url-listener.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/url-listener"><img src="https://img.shields.io/npm/l/url-listener.svg" alt="License"></a>

Listen for url changes without using a timer

## Install
You can install url-listener with npm like any other package.
```bash
npm install --save url-listener
```

You can also include the umd distributable in your webpage directly with a
script tag.
```html
<head>
  <script src="https://unpkg.com/url-listener@2.0.0/dist/url-listener.umd.js" />
</head>
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
Events may overlap and be called more than once, so whatever callback you pass
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
