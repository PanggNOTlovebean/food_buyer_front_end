import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser:null,
    isLogin:false,
    token:""
  },
  mutations: {
    loginStateChanged(state,key) {
      state.isLogin=key;
    }
  },
  actions: {

  }
})
