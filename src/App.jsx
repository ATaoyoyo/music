import React, { Fragment } from 'react'
import { HashRouter } from 'react-router-dom'

import routes from './routes/index'
import { renderRoutes } from 'react-router-config'

import store from './store'
import { Provider } from 'react-redux'
import Tab from './components/Tab/Tab'

// Tab
const tabs = [
  { icon: 'music', text: '音乐' },
  { icon: 'podcast', text: '播客' },
  { icon: 'user-alt', text: '我的' },
  { icon: 'microphone-alt', text: 'K歌' },
  { icon: 'users', text: '云村' },
]

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <HashRouter>{renderRoutes(routes)}</HashRouter>
      </Provider>
      <Tab tabs={tabs} />
    </Fragment>
  )
}

export default App
