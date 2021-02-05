import React from 'react'
import PropTypes from 'prop-types'
import ReactLazyLoad from 'react-lazyload'

import Img from '../../assets/img/music.png'

const LazyLoad = (props) => {
  const { children, placeholder, ...resetProps } = props

  return (
    <ReactLazyLoad
      height="100%"
      width="100%"
      throttle={true}
      scroll={true}
      offset={0}
      placeholder={placeholder}
      {...resetProps}
    >
      {children}
    </ReactLazyLoad>
  )
}

const placeholder = <img width="100%" height="100%" src={Img} alt="music" />

LazyLoad.defaultProps = {
  placeholder: placeholder,
}

LazyLoad.prototype = {
  placeholder: PropTypes.element,
}

export default LazyLoad
