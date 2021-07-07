import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.filter('tolower',function(val){
  return val.toLowerCase()
})

Vue.mixin({
  created(){
    console.log('Global Mixins')
  }
})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.js'

new Vue({
  render: h => h(App),
}).$mount('#app')
