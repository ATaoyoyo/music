import React, { useState } from 'react'
// import ClassName from 'classnames'

import Icon from '../Icon/Icon'

import { TabWrapper, TabItem } from './style'

const Tab = (props) => {
  const { tabs } = props

  const [currentIndex, setCurrentIndex] = useState(0)

  // const classes = ClassName({
  //   'is-active': ''
  // })

  const onClickTabItem = (index) => {
    setCurrentIndex(index)
  }

  return (
    <TabWrapper>
      {tabs.map((item, index) => {
        return (
          <TabItem
            key={item.text}
            className={currentIndex === index && 'is-active'}
            onClick={() => onClickTabItem(index)}
          >
            <Icon icon={item.icon} />
            <span className="text">{item.text}</span>
          </TabItem>
        )
      })}
    </TabWrapper>
  )
}

export default Tab
