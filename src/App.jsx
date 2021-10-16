import React,{ Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from './router'
import Tabbar from './components/Tabbar'


export default function App() {
  return (
    <Fragment>
      <Switch>
        {routes.map((item) => {
          return (
            <Route key={item.path} exact path={item.path}>
              <item.components />
            </Route>
          )
        })}
      </Switch>

      <Tabbar />
    </Fragment>
  )
}
