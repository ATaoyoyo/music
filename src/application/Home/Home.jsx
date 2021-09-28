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
  recommendSongs,
  featuredSongs,
  privateSongs,
  newAlbumSongs,
} from './config'

const Home = (props) => {
  const {
    recommendList,
    featuredSongsList,
    enterLoading,
    searchDefault,
    getHomePageDataDispatch,

    getRecommendDataDispatch,
    getFeaturedSongsDataDispatch,
    setEnterLoadingDispatch,
    getSearchDefaultDispatch,
  } = props

  const scrollRef = useRef()

  useEffect(() => {
    let timer = setTimeout(() => {
      setEnterLoadingDispatch()
    }, 500)

    getSearchDefaultDispatch()
    getHomePageDataDispatch()
    getRecommendDataDispatch()
    getFeaturedSongsDataDispatch()

    return () => {
      clearTimeout(timer)
    }
  }, [
    getFeaturedSongsDataDispatch,
    getHomePageDataDispatch,
    getRecommendDataDispatch,
    getSearchDefaultDispatch,
    setEnterLoadingDispatch,
  ])

  useEffect(() => {
    scrollRef.current?.refresh && scrollRef.current.refresh()
  })

  const searchDefaultJS = searchDefault ? searchDefault.toJS() : '搜点歌曲？'
  const recommendListJS = recommendList ? recommendList.toJS() : []
  const featuredSongsListJS = featuredSongsList ? featuredSongsList.toJS() : []

  const leftIcon = <Icon icon="bars" style={{ color: '#fff' }} />
  const center = <Input placeholder={searchDefaultJS['showKeyword']} />
  const rightText = <Icon icon="search" style={{ color: '#fff' }} />

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
          <Banner />
          <Icons />
          <Recommend
            desc="推荐歌单"
            recommend={recommendListJS}
            songInfo={recommendSongs}
          />
          <PrivateSongs songInfo={privateSongs} />
          <Recommend
            desc="精选歌单"
            recommend={featuredSongsListJS}
            songInfo={featuredSongs}
          />
          <Leaderboard />
          <PrivateSongs songInfo={newAlbumSongs} />
        </Content>
      </Scroll>
    </HomeContainer>
  )
}

const mapStateToProps = (state) => ({
  homePageData: state.home.get('homePageData'),
  recommendList: state.home.get('recommendList'),
  privateSongsList: state.home.get('privateSongsList'),
  featuredSongsList: state.home.get('featuredSongsList'),

  enterLoading: state.home.get('enterLoading'),
  searchDefault: state.home.get('searchDefault'),
})

const mapDispatchToProps = (dispatch) => ({
  getHomePageDataDispatch() {
    dispatch(actions.getHomePageData())
  },
  getRecommendDataDispatch() {
    dispatch(actions.getRecommendList())
  },
  getFeaturedSongsDataDispatch() {
    dispatch(actions.getFeaturedSongsList())
  },

  setEnterLoadingDispatch() {
    dispatch(actions.getEnterLoad())
  },
  getSearchDefaultDispatch() {
    dispatch(actions.getSearchDefault())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home))
