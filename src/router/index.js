import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Stage from '@/components/Stage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/stage/:level_name/:stage_name',
      name: 'Stage',
      component: Stage
    }
  ]
})
