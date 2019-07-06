/* global React ReactDOM  html */
import htm from 'https://unpkg.com/htm?module'

import App from './components/App/index.js'
;(async () => {
  window.html = htm.bind(React.createElement)

  const render = () =>
    ReactDOM.render(html`<${App} />`, document.getElementById('app'))

  render()

render()
