import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import { Icon, SwiperContainer } from './style'

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
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
          return (
            <SwiperSlide key={item}>
              <Icon>
                <i className="icon" />
                <span className="icon-text">{item}</span>
              </Icon>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </SwiperContainer>
  )
}

export default Icons
