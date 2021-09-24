import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'

import TopInfo from '../../../../components/TopInfo/TopInfo'
import LazyLoad from '../../../../components/LazyLoad/LazyLoad'
import { PrivateWrapper, PrivateSong } from './style'
import Icon from '../../../../components/Icon/Icon'
import * as actions from '../../store/actionCreators'

const PrivateSongs = (props) => {
  const { privateSongsList, getPrivateSongsDataDispatch, songInfo } = props
  const songs = privateSongsList.toJS()
  const defaultButton = (
    <span>
      更多
      <Icon icon="angle-right" />
    </span>
  )

  useEffect(() => {
    getPrivateSongsDataDispatch()
  }, [getPrivateSongsDataDispatch])

  return (
    <PrivateWrapper>
      <TopInfo desc="一些好听的歌" button={defaultButton} />
      <Swiper slidesPerColumnFill="row" slidesPerColumn={3} spaceBetween={-10}>
        {songs.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <PrivateSong>
                <div className="song-item">
                  <div className="song-img">
                    <LazyLoad width={50} height={50} alt="music">
                      <img
                        src={item[songInfo.picUrl] + '?param=50y50'}
                        alt="music"
                      />
                    </LazyLoad>
                  </div>
                  <div className="song-info">
                    <div className="song-name">
                      <div className="author">
                        {item[songInfo.name]}-
                        {item.artist
                          ? item.artist.name
                          : item.song.artists[0].name}
                      </div>
                    </div>
                    <div className="song-desc">{}</div>
                  </div>
                </div>
              </PrivateSong>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </PrivateWrapper>
  )
}

const mapStateToProps = (state) => ({
  privateSongsList: state.home.get('privateSongsList'),
})

const mapDispatchToProps = (dispatch) => ({
  getPrivateSongsDataDispatch() {
    dispatch(actions.getPrivateSongsList())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(PrivateSongs))
