// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

import Navigator from '@/components/Navigator'
import Foot from '@/components/Foot'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
// Vue.prototype.$backend = 'http://127.0.0.1:8000'
// TODO: need to use https
Vue.prototype.$backend = 'http://pyfun-backend.clo5de.info:8090'
Vue.prototype.$ajax = Axios

Vue.component('navigator', Navigator)
Vue.component('foot', Foot)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  //template: '<App/>'
  render: h => h(App)
})
