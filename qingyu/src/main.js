import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './uitils/rem'
// import 'amfe-flexible'; //引入rem自适应
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
