const state = {
  // 登录方式 1--账号密码 2--手机号 3--微信登录
  index: 0,
  register: 0
}
const mutations = {
  SET_INDEX (state, index) {
    state.index = index
  },
  SET_REGISTER (state, index) {
    state.index = index
  }
}
const actions = {
  setIndex ({commit}, index) {
    commit('SET_INDEX', index)
  },
  setRegister ({commit}, index) {
    commit('SET_REGISTER', index)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
