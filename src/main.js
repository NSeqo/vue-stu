import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


// 导入svg资源
import '@/icons'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
