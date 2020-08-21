import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/theme.css'
import constant from  './utils/constant'


Vue.config.productionTip = false
Vue.prototype.$constant=constant

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
