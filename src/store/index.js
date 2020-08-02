import Vue from 'vue'
import Vuex from 'vuex'
import { UPDATEINFO, INCREMENT, DECREMENT } from './mutation-type.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    user: {
      name: '超哥',
      age: 23,
      sex: '男'
    }
  },
  mutations: {
    [INCREMENT] (state) {
      state.count++
    },
    [DECREMENT] (state) {
      state.count--
    },
    [UPDATEINFO] (state, height) {
      Vue.set(state.user, 'height', 170)
    }
  }
})

export default store
