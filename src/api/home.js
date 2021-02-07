/**
 * @Description: 首页接口
 * @author ATaoYoYo
 * @date 2021/2/4
 */
import instance from './service'

// 首页全部内容
export const getHomePageRequest = () => {
  return instance.get('/homepage/block/page')
}

// banner
export const getBannerRequest = () => {
  return instance.get('/banner?type=2')
}

// 推荐歌单
export const getRecommendRequest = () => {
  return instance.get('/personalized?limit=6')
}

// 私人订制
export const getPrivateSongsRequest = () => {
  return instance.get('/personalized/newsong?limit=9')
}

// 精选歌单
export const getFeaturedSongsRequest = () => {
  return instance.get('/top/playlist?limit=6')
}

// 排行榜
export const getLeaderboardRequest = () => {
  return instance.get('/toplist/detail')
}

// 新专辑
export const getNewAlbumRequest = () => {
  return instance.get('/album/newest')
}

// 默认搜索关键词
export const getSearchDefaultRequest = () => {
  return instance.get('/search/default')
}
