import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import LazyLoad from '../../../../components/LazyLoad/LazyLoad'

import { SwiperContainer } from './style'

import * as actions from '../../store/actionCreators'

SwiperCore.use([Autoplay, Pagination])

const Banner = (props) => {
  const { bannerList, getBannerDataDispatch } = props
  const banners = bannerList.toJS()

  useEffect(() => {
    getBannerDataDispatch()
  }, [getBannerDataDispatch])

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

const mapStateToProps = (state) => ({
  bannerList: state.home.get('bannerList'),
})

const mapDispatchToProps = (dispatch) => ({
  getBannerDataDispatch() {
    dispatch(actions.getBannerList())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Banner))
