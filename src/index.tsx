import React from 'react'
import { render } from 'react-dom'
import App from './app'
import './main.scss'

function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    return navigator.serviceWorker.ready.then((registration) =>
      registration.unregister()
    )
  }
}

render(<App />, document.getElementById('root'))
unregisterServiceWorker()
