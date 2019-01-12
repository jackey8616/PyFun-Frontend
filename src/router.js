import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('./components/Index.vue')
    },
    {
      path: '/stage/:level_name/:stage_name',
      name: 'Stage',
      component: () => import('./components/Stage.vue')
    }
  ]
})
