import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const base = axios.create({
  //DEJAR EL URL EN MAYUSCULAS O NO FUNCIONA!!!!!
  baseURL : 'http://localhost:3000'
})
Vue.prototype.$http = base;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
