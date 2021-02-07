/**
 * @Description: 首页action
 * @author ATaoYoYo
 * @date 2021/2/4
 */
import * as actionTypes from './constants'
import { fromJS } from 'immutable'
import {
  getBannerRequest,
  getRecommendRequest,
  getPrivateSongsRequest,
  getFeaturedSongsRequest,
  getLeaderboardRequest,
  getNewAlbumRequest,
  getSearchDefaultRequest,
  getHomePageRequest,
} from '../../../api/home'

export const changeHomePageData = (data) => ({
  type: actionTypes.CHANGE_HOME_PAGE_DATA,
  data: fromJS(data),
})

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER_LIST,
  data: fromJS(data),
})

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data),
})

export const changePrivateSongsList = (data) => ({
  type: actionTypes.CHANGE_PRIVATE_SONGS_LIST,
  data: fromJS(data),
})

export const changeFeaturedSongsList = (data) => ({
  type: actionTypes.CHANGE_FEATURED_SONGS_LIST,
  data: fromJS(data),
})

export const changeLeaderboardList = (data) => ({
  type: actionTypes.CHANGE_LEADERBOARD_LIST,
  data: fromJS(data),
})

export const changeNewAlbumList = (data) => ({
  type: actionTypes.CHANGE_NEW_ALBUM_LIST,
  data: fromJS(data),
})

export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data,
})

export const changeSearchDefault = (data) => ({
  type: actionTypes.CHANGE_SEARCH_DEFAULT,
  data: fromJS(data),
})

export const getHomePageData = () => {
  return (dispatch) => {
    getHomePageRequest()
      .then((data) => {
        dispatch(changeHomePageData(data.data))
      })
      .catch((err) => {
        console.error('homePageData请求出错', err)
      })
  }
}

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest()
      .then((data) => {
        dispatch(changeBannerList(data.banners))
      })
      .catch((err) => {
        console.error('banner请求出错', err)
      })
  }
}

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendRequest()
      .then((data) => {
        dispatch(changeRecommendList(data.result))
      })
      .catch((err) => {
        console.error('recommend请求出错', err)
      })
  }
}

export const getPrivateSongsList = () => {
  return (dispatch) => {
    getPrivateSongsRequest()
      .then((data) => {
        dispatch(changePrivateSongsList(data.result))
      })
      .catch((err) => {
        console.error('privateSongs请求出错', err)
      })
  }
}

export const getFeaturedSongsList = () => {
  return (dispatch) => {
    getFeaturedSongsRequest()
      .then((data) => {
        dispatch(changeFeaturedSongsList(data.playlists))
      })
      .catch((err) => {
        console.error('featuredSongs请求出错', err)
      })
  }
}

export const getLeaderboardList = () => {
  return (dispatch) => {
    getLeaderboardRequest()
      .then((data) => {
        dispatch(changeLeaderboardList(data.list))
      })
      .catch((err) => {
        console.error('leaderboard请求出错', err)
      })
  }
}

export const getNewAlbumList = () => {
  return (dispatch) => {
    getNewAlbumRequest()
      .then((data) => {
        dispatch(changeNewAlbumList(data.albums))
      })
      .catch((err) => {
        console.error('newAlbum请求出错', err)
      })
  }
}

export const getSearchDefault = () => {
  return (dispatch) => {
    getSearchDefaultRequest()
      .then((data) => {
        dispatch(changeSearchDefault(data.data))
      })
      .catch((err) => {
        console.error('searchDefault请求出错', err)
      })
  }
}

// loading关闭
export const getEnterLoad = () => {
  return (dispatch) => dispatch(changeEnterLoading(false))
}
