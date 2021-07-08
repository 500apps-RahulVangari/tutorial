import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import axios from 'axios'

Vue.config.productionTip = false
Vue.directive('highlight',{
  bind(el,binding){
    el.style.backgroundColor="navy";
    el.style.color="honeydew";
    el.style.backgroundColor=binding.value;
  }
})
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.filter('tolower',function(val){
  return val.toLowerCase()
})

axios.defaults.baseURL="https://fill-70ce3-default-rtdb.firebaseio.com"

Vue.mixin({
  // created(){
  //   console.log('Global Mixins')
  // }
})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.js'

new Vue({
  render: h => h(App),
}).$mount('#app')
