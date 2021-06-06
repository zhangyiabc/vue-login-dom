import Vue from 'vue'
// import { whoAmI } from './api/user'
import App from './App.vue'
import router from './router'
import store from './store'

// import {whoAmI} from "./api/user"
Vue.config.productionTip = false

store.dispatch("loginUser/whoAmI")

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
