// 发现图标
export const findIcons = [
  { icon: 'calendar-day', text: '每日推荐' },
  { icon: 'broadcast-tower', text: '私人FM' },
  { icon: 'th-list', text: '歌单' },
  { icon: 'chart-bar', text: '排行榜' },
  { icon: 'headset', text: '直播' },
  { icon: 'compact-disc', text: '数字专辑' },
  { icon: 'home', text: '歌房' },
  { icon: 'gamepad', text: '游戏专区' },
]

// 推荐歌单
export const recommendSongs = { picUrl: 'picUrl', name: 'name', desc: 'name' }

// 精选歌单
export const featuredSongs = {
  picUrl: 'coverImgUrl',
  name: 'name',
  desc: 'description',
}

// 私人订制
export const privateSongs = {
  picUrl: 'picUrl',
  name: 'name',
  author: `['song']['artists'][0][name]`,
}
// 新专辑
export const newAlbumSongs = {
  picUrl: 'picUrl',
  name: 'name',
  author: `['artist']['name']`,
}
