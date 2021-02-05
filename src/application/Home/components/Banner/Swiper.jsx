import React from 'react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import LazyLoad from '../../../../components/LazyLoad/LazyLoad'

import { SwiperContainer } from './style'

SwiperCore.use([Autoplay, Pagination])

const Banner = (props) => {
  const { banners } = props

  const renderSwiperSlide = (slide) => {
    return slide.map((item) => {
      return (
        <SwiperSlide key={item.bannerId}>
          <div className="swiper-img">
            <LazyLoad alt={item.bannerId}>
              <img src={item.pic} alt={item.bannerId} />
            </LazyLoad>
          </div>
        </SwiperSlide>
      )
    })
  }

  return (
    <SwiperContainer>
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {banners ? (
          renderSwiperSlide(banners)
        ) : (
          <div className="swiper-empty" />
        )}
      </Swiper>
    </SwiperContainer>
  )
}

export default Banner
