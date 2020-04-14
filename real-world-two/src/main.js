import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseIcon from '@/components/BaseIcon.vue'
import 'nprogress/nprogress.css'
import Vuelidate from 'vuelidate'

// Global components
Vue.component('BaseIcon', BaseIcon)

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
