// eslint-disable-next-line no-use-before-define
import React from 'react'

import * as serviceWorker from './serviceWorker'

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './states/store.ts'

import { App } from './app/App.tsx'

store.client.start()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
