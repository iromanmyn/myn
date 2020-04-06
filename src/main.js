import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  //将App组件对象渲染到页面上
  render: h => h(App),
  //配置路由器（内部路由才生效）
  router,

}).$mount('#app')
