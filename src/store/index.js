import Vue from 'vue'
import Vuex from 'vuex'
import loginUser from "./loginUser"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    // name:"y"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loginUser
  }
});
window.store = store;
export default store
