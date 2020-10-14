import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import mutations from './mutations.js'
import actions from './Action.js'
import getters from './Getters.js'
const state = {
  productList:[],
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
