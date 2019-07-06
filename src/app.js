import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import './index.scss'

const render = () => ReactDOM.render(<App />, document.getElementById('app'))

  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        '/service-worker.js'
      )
      registration.addEventListener('updatefound', () => {
        const installingWorker = registration.installing
        // console.log('Encontrada nueva versión del worker', installingWorker)
        // installingWorker.addEventListener('statechange', evt =>
        //   console.log('Evento de cambio de estado del installingWorker', evt)
        // )
      })
    } catch (e) {
      console.log('Error al registrar el services worker')
    }
  }
})()
