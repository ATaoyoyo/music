import React from 'react'
import Header from '/cpn/Header'

import './style.less'

export default function Home() {
  return (
    <div className='Home'>
      <Header
        left={<span className='iconfont icon-caidan' />}
        right={<span className='iconfont icon-tinggeshiqu' />}
        center={
          <input
            type='text'
            className='input w-full h-full bg-gray-50 rounded-xl py-0.5 px-1.5 outline-none box-border'
          />
        }
      />
    </div>
  )
}
