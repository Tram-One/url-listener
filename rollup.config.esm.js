const buble = require('rollup-plugin-buble')
const filesize = require('rollup-plugin-filesize')
const pkg = require('./package.json')

const plugins = [
  buble({target: {node: 6}}),
  filesize()
]

export default {
  input: 'listener.js',
  plugins: plugins,
  output: {
    format: 'es',
    file: pkg.module
  }
}
