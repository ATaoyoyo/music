import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import FIcon from '../../../../components/Icon/Icon'

import { Icon, SwiperContainer } from './style'
import { findIcons } from '../../config'

const Icons = () => {
  const [spaceBetween, setSpaceBetween] = useState(-10)

  return (
    <SwiperContainer>
      <Swiper
        speed={750}
        slidesPerView={4}
        spaceBetween={spaceBetween}
        slidesPerGroup={5}
        onSlideChange={(i) => {
          let timer = setTimeout(() => {
            i.activeIndex % 2 === 0 ? setSpaceBetween(-5) : setSpaceBetween(0)
          }, 750)
          clearTimeout(timer)
        }}
      >
        {findIcons.map((item) => {
          return (
            <SwiperSlide key={item.text}>
              <Icon>
                <i className="icon">
                  <FIcon icon={item.icon} />
                </i>
                <span className="icon-text">{item.text}</span>
              </Icon>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </SwiperContainer>
  )
}

export default Icons
