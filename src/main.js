import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false


// Now the app has started!
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
