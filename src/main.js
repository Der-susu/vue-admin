import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
//挂载
// import store from "./store"

// axios.interceptors.request.use((config) => {
//   if(localStorage.getItem('token')) {
//     config.headers.Authorization = localStorage.getItem('token')
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// })


Vue.prototype.$axios = axios
// Vue.use(axios)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
