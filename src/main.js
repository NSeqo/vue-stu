import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// 导入svg资源
import '@/icons'

new Vue({
  render: h => h(App),
}).$mount('#app')
