import React from 'react'
import { HashRouter } from 'react-router-dom'

import routes from './routes/index'
import { renderRoutes } from 'react-router-config'

import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>{renderRoutes(routes)}</HashRouter>
    </Provider>
  )
}

export default App
