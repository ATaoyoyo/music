import React from 'react'

import { HeadWrapper } from './style'

const Header = (props) => {
  const { left, center, right } = props
  return (
    <HeadWrapper>
      <div className="left">{left}</div>
      <div className="center">{center}</div>
      <div className="right">{right}</div>
    </HeadWrapper>
  )
}

export default Header
