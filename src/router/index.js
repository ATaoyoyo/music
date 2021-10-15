import Home from '../pages/home'
import Mine from '../pages/mine'
import PodCast from '../pages/podcast'
import Village from '../pages/village'
import Follow from '../pages/follow'

const routes = [
  {
    path: '/',
    components: Home
  }, 
  {
    path: '/mine',
    components: Mine
  },
  {
    path: '/podcast',
    components: PodCast
  },
  {
    path: '/village',
    components: Village
  },
  {
    path: 'follow',
    components: Follow
  }
]


export default routes