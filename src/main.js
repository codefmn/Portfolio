import Vue from 'vue'
import axios from 'axios'
import Home from './Home.vue'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5b8fa28e81a5b8204eb7d4da/portfolio/'

new Vue({
  render: h => h(Home)
}).$mount('#app')
