import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { forceCheck } from 'react-lazyload'

import Header from '../../components/Header/Header'
import Banner from './components/Banner/Swiper'
import Icons from './components/Icons/Icons'
import Recommend from './components/Recommend/Recommend'
import PrivateSongs from './components/PrivateSons/PrivateSongs'
import Scroll from '../../components/Scroll/Scroll'
import Loading from '../../components/Loadding/Loadding'
import Icon from '../../components/Icon/Icon'
import Leaderboard from './components/Leaderboard/Leaderboard'

import * as actions from './store/actionCreators'
import { Content, HomeContainer, Input } from './style'
import {
  findIcons,
  recommendSongs,
  featuredSongs,
  privateSongs,
  newAlbumSongs,
} from './config'

const Home = (props) => {
  const {
    bannerList,
    recommendList,
    privateSongsList,
    featuredSongsList,
    leaderboardList,
    newAlbumList,
    enterLoading,
    searchDefault,
    getHomePageDataDispatch,

    getBannerDataDispatch,
    getRecommendDataDispatch,
    getPrivateSongsDataDispatch,
    getFeaturedSongsDataDispatch,
    getLeaderboardDataDispatch,
    getNewAlbumDataDispatch,
    setEnterLoadingDispatch,
    getSearchDefaultDispatch,
  } = props

  const scrollRef = useRef()

  useEffect(() => {
    let timer = setTimeout(() => {
      setEnterLoadingDispatch()
    }, 500)

    initData()

    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    scrollRef.current?.refresh && scrollRef.current.refresh()
  })

  const bannerListJs = bannerList ? bannerList.toJS() : []
  const searchDefaultJS = searchDefault ? searchDefault.toJS() : '搜点歌曲？'
  const recommendListJS = recommendList ? recommendList.toJS() : []
  const privateSongsListJS = privateSongsList ? privateSongsList.toJS() : []
  const featuredSongsListJS = featuredSongsList ? featuredSongsList.toJS() : []
  const leaderboardListJS = leaderboardList
    ? leaderboardList.toJS().splice(0, 4)
    : []
  const newAlbumListJS = newAlbumList ? newAlbumList.toJS() : []

  const leftIcon = <Icon icon="bars" style={{ color: '#fff' }} />
  const center = <Input placeholder={searchDefaultJS['showKeyword']} />
  const rightText = <Icon icon="search" style={{ color: '#fff' }} />

  const initData = () => {
    getSearchDefaultDispatch()
    getHomePageDataDispatch()
    getBannerDataDispatch()
    getRecommendDataDispatch()
    getPrivateSongsDataDispatch()
    getFeaturedSongsDataDispatch()
    getLeaderboardDataDispatch()
    getNewAlbumDataDispatch()
  }

  const handPullDown = () => {}

  const handPullUp = () => {}

  return (
    <HomeContainer id="wrapper">
      <Header left={leftIcon} center={center} right={rightText} />
      {enterLoading ? <Loading /> : null}
      <Scroll
        ref={scrollRef}
        direction="vertical"
        onScroll={forceCheck}
        onPullDown={handPullDown}
        onPullUp={handPullUp}
      >
        <Content>
          <Banner banners={bannerListJs} />
          <Icons icons={findIcons} />
          <Recommend
            desc="推荐歌单"
            recommend={recommendListJS}
            songInfo={recommendSongs}
          />
          <PrivateSongs songs={privateSongsListJS} songInfo={privateSongs} />
          <Recommend
            desc="精选歌单"
            recommend={featuredSongsListJS}
            songInfo={featuredSongs}
          />
          <Leaderboard leaderboard={leaderboardListJS} />
          <PrivateSongs songs={newAlbumListJS} songInfo={newAlbumSongs} />
        </Content>
      </Scroll>
    </HomeContainer>
  )
}

const mapStateToProps = (state) => ({
  homePageData: state.home.get('homePageData'),
  bannerList: state.home.get('bannerList'),
  recommendList: state.home.get('recommendList'),
  privateSongsList: state.home.get('privateSongsList'),
  featuredSongsList: state.home.get('featuredSongsList'),
  leaderboardList: state.home.get('leaderboardList'),
  newAlbumList: state.home.get('newAlbumList'),
  enterLoading: state.home.get('enterLoading'),
  searchDefault: state.home.get('searchDefault'),
})

const mapDispatchToProps = (dispatch) => ({
  getHomePageDataDispatch() {
    dispatch(actions.getHomePageData())
  },
  getBannerDataDispatch() {
    dispatch(actions.getBannerList())
  },
  getRecommendDataDispatch() {
    dispatch(actions.getRecommendList())
  },
  getPrivateSongsDataDispatch() {
    dispatch(actions.getPrivateSongsList())
  },
  getFeaturedSongsDataDispatch() {
    dispatch(actions.getFeaturedSongsList())
  },
  getLeaderboardDataDispatch() {
    dispatch(actions.getLeaderboardList())
  },
  getNewAlbumDataDispatch() {
    dispatch(actions.getNewAlbumList())
  },
  setEnterLoadingDispatch() {
    dispatch(actions.getEnterLoad())
  },
  getSearchDefaultDispatch() {
    dispatch(actions.getSearchDefault())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home))
