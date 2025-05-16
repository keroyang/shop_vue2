import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@/assets/css/inc/plugins.css'
import '@/assets/css/style.less'
import '@/assets/css/home.less'

//引入路由
import router from './router'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由：底下的写法KV一致的话，一般省略v
  //注册路由信息：当这里书写router的时候，组件身上都拥有$route，$router属性
  router,
}).$mount('#app')

