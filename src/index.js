import Vue from 'vue'
import App from './components/App.vue'
//import './styles'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
