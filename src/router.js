import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home.vue'
import About from './components/About'
import RoomsSingle from './components/RoomsSingle'
import RoomsContainer from './components/RoomsContainer'
import Room from './components/Room'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/rooms/:slug',
        name: 'rooms-single',
        components: {default: RoomsSingle,room:Room},
        props: {room: true, }
      },
      {
        path:'/rooms',
        name:'rooms-container',
        component:RoomsContainer
      }
  ]
})