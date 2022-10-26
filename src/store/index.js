import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userdata: {},
    // bokeid
    ID: ''
  },
  getters: {
  },
  mutations: {
    getudata (state, data) {
      state.userdata = data
    },
    getbokid (state, data) {
      state.ID = data
    }
  },
  actions: {
  },
  modules: {
  }
})
