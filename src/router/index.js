import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Collection from '@/components/Collection'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/KakaoFriends/',
      name: 'Main',
      component: Main
    }
    ,{
      path: '/KakaoFriends/Collection',
      name: 'Collection',
      component: Collection
    }
  ]
})
