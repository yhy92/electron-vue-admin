import Vue from 'vue'
import Vuex from 'vuex'

// import { createPersistedState, createSharedMutations } from 'vuex-electron'
// import modules from './modules'
import login from './modules/login'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login
  }
  // plugins: [
  //   createPersistedState(),
  //   createSharedMutations()
  // ],
  // strict: process.env.NODE_ENV !== 'production'
})
