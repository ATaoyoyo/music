import React from 'react'
import { Redirect } from 'react-router'
import Home from '../application/Home/Home'

const routes = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={'/home'} />,
      },
    ],
  },
]

export default routes
