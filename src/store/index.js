import Vue from 'vue'
import Vuex from 'vuex'
// import {state, mutations} from './mutations.js'
// import * as getters from './getters.js'
// import * as actions from './actions.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {

  },
  // mutation必定是同步函數，沒有例外
  mutations: {
  },
  getters: {},
  // 先在aciton中處理可能的非同步請求，當取得對應的資料後，接著再透過mutation以處理同步的方式變更state的資料
  actions: {

  },
  strict: true
})
