import React from 'react'

import { Top } from './style'

const TopInfo = (props) => {
  const { desc, button } = props
  return (
    <Top>
      <p className="desc">{desc}</p>
      <button className="more">{button}</button>
    </Top>
  )
}

export default TopInfo
