import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import classNames from 'classnames'

import './style.less'

export default function Tabbar() {
  const [active, setActive] = useState('/')

  const router = useHistory()

  const routerPush = (path) => {
    router.push(path)
    setActive(path)
  }

  const menus = [
    {
      label: '发现',
      icon: 'icon-wangyiyunyinle1',
      path: '/',
    },
    {
      label: '播客',
      icon: 'icon-boke',
      path: '/podcast',
    },
    {
      label: '我的',
      icon: 'icon-yinle',
      path: '/mine',
    },
    {
      label: '关注',
      icon: 'icon-friend',
      path: '/follow',
    },
    {
      label: '云村',
      icon: 'icon-home',
      path: '/village',
    },
  ]

  return (
    <div className='tabbar flex'>
      {menus.map((item) => (
        <div
          key={item.path}
          className='tabbar-item flex-1 flex flex-col justify-center items-center text-gray-500'
          onClick={() => routerPush(item.path)}
        >
          <div
            className={classNames('icon rounded-full text-center', {
              active: item.path === active,
            })}
          >
            <i className={classNames('iconfont flex justify-center items-center', item.icon)} />
          </div>
          <p className={classNames('label', { active: item.path === active })}>{item.label}</p>
        </div>
      ))}
    </div>
  )
}
