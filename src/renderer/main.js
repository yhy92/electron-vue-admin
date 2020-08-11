import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

/** 引入css样式 */
import './styles/index.scss'
import './styles/icons.css'
import './styles/login.scss'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './utils/validate.js'
Vue.use(Element)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
