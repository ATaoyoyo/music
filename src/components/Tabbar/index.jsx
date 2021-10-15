import React from 'react'
import { useHistory } from 'react-router-dom'

import './style.less'

export default function Tabbar() {
  const router = useHistory()

  const routerPush = (path) => {
    router.push(path)
  }

  return (
    <div className="tabbar">
      <div className="tabbar-item" onClick={() => routerPush('/')}>
        Home
      </div>
      <div className="tabbar-item" onClick={() => routerPush('/mine')}>
        Mine
      </div>
      <div className="tabbar-item">Podcast</div>
      <div className="tabbar-item">Follow</div>
      <div className="tabbar-item">Village</div>
    </div>
  )
}
