import Vue from 'vue'
import App from './App.vue'

// Import Bootstrap for vuejs
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
