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

import * as actions from './store/actionCreators'

import { Content, HomeContainer, Input } from './style'
import Leaderboard from './components/Leaderboard/Leaderboard'

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
    getSearchDefaultDispatch()
    getBannerDataDispatch()
    getRecommendDataDispatch()
    getPrivateSongsDataDispatch()
    getFeaturedSongsDataDispatch()
    getLeaderboardDataDispatch()
    getNewAlbumDataDispatch()

    let timer = setTimeout(() => {
      setEnterLoadingDispatch()
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [
    getBannerDataDispatch,
    getPrivateSongsDataDispatch,
    getRecommendDataDispatch,
    getFeaturedSongsDataDispatch,
    getLeaderboardDataDispatch,
    getNewAlbumDataDispatch,
    setEnterLoadingDispatch,
    getSearchDefaultDispatch,
  ])

  useEffect(() => {
    scrollRef.current?.refresh && scrollRef.current.refresh()
  })

  const searchDefaultJS = searchDefault ? searchDefault.toJS() : '搜点歌曲？'
  const bannerListJS = bannerList ? bannerList.toJS() : []
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

  // 推荐歌单
  const recommendSongs = { picUrl: 'picUrl', name: 'name', desc: 'name' }
  // 精选歌单
  const featuredSongs = {
    picUrl: 'coverImgUrl',
    name: 'name',
    desc: 'description',
  }

  // 私人订制
  const privateSongs = {
    picUrl: 'picUrl',
    name: 'name',
    author: `['song']['artists'][0][name]`,
  }
  // 新专辑
  const newAlbumSongs = {
    picUrl: 'picUrl',
    name: 'name',
    author: `['artist']['name']`,
  }

  // 发现图标
  const findIcons = [
    {icon: 'calendar-day', text: '每日推荐'},
    {icon: 'broadcast-tower', text: '私人FM'},
    {icon: 'th-list', text: '歌单'},
    {icon: 'chart-bar', text: '排行榜'},
    {icon: 'headset', text: '直播'},
    {icon: 'compact-disc', text: '数字专辑'},
    {icon: 'home', text: '歌房'},
    {icon: 'gamepad', text: '游戏专区'},
  ]



  return (
    <HomeContainer id="wrapper">
      <Header left={leftIcon} center={center} right={rightText} />
      {enterLoading ? <Loading /> : null}
      <Scroll ref={scrollRef} direction="vertical" onScroll={forceCheck}>
        <Content>
          <Banner banners={bannerListJS} />
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
