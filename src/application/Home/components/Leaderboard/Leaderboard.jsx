import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'

import TopInfo from '../../../../components/TopInfo/TopInfo'

import { LeaderboardWrapper } from './style'
import Icon from '../../../../components/Icon/Icon'
import * as actions from '../../store/actionCreators'

const Leaderboard = (props) => {
  const { leaderboardList, getLeaderboardDataDispatch } = props

  const leaderboard = leaderboardList.toJS().splice(0, 4)

  useEffect(() => {
    getLeaderboardDataDispatch()
  }, [getLeaderboardDataDispatch])

  const defaultButton = (
    <span>
      更多
      <Icon icon="angle-right" />
    </span>
  )
  return (
    <LeaderboardWrapper>
      <TopInfo desc="排行榜" button={defaultButton} />
      <Swiper spaceBetween={20}>
        {leaderboard.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="card">
                <h3 className="title">{item.name}</h3>
                {item.tracks.map((song, index) => {
                  return (
                    <div className="list" key={song.first}>
                      <div className="list-item-img">
                        <img src="" alt="" />
                      </div>
                      <div className="list-item-info">
                        <i className="num">{index + 1}</i>
                        <h4 className="song-name">{song.first}</h4>
                        <h5 className="song-author"> - {song.second}</h5>
                      </div>
                    </div>
                  )
                })}
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </LeaderboardWrapper>
  )
}

const mapStateToProps = (state) => ({
  leaderboardList: state.home.get('leaderboardList'),
})

const mapDispatchToProps = (dispatch) => ({
  getLeaderboardDataDispatch() {
    dispatch(actions.getLeaderboardList())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(Leaderboard))
