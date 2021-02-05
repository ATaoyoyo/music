import { combineReducers } from 'redux'

import { reducer as homeReducer } from '../application/Home/store/index'

export default combineReducers({
  home: homeReducer,
})
