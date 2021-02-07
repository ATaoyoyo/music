import { fromJS } from 'immutable'
import * as actionTypes from './constants'

const defaultState = fromJS({
  homePageData: {},
  bannerList: [],
  recommendList: [],
  privateSongsList: [],
  featuredSongsList: [],
  leaderboardList: [],
  newAlbumList: [],
  enterLoading: true,
  searchDefault: '',
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_PAGE_DATA:
      return state.set('homePageData', action.data)

    case actionTypes.CHANGE_BANNER_LIST:
      return state.set('bannerList', action.data)

    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set('recommendList', action.data)

    case actionTypes.CHANGE_PRIVATE_SONGS_LIST:
      return state.set('privateSongsList', action.data)

    case actionTypes.CHANGE_FEATURED_SONGS_LIST:
      return state.set('featuredSongsList', action.data)

    case actionTypes.CHANGE_LEADERBOARD_LIST:
      return state.set('leaderboardList', action.data)

    case actionTypes.CHANGE_NEW_ALBUM_LIST:
      return state.set('newAlbumList', action.data)

    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set('enterLoading', action.data)

    case actionTypes.CHANGE_SEARCH_DEFAULT:
      return state.set('searchDefault', action.data)

    default:
      return state
  }
}

export default reducer
