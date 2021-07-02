import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Multi from './Multi.vue'
import Single from './Single.vue'
import Bot from './bot.vue'
import Fill from './Fill.vue'
import Multibot from './Multibot.vue'
import { BootstrapVue,IconsPlugin } from 'bootstrap-vue'


Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css';

const routes = [
  {path:'/multi', component: Multi},
  {path:'/single', component: Single},
  {path:'/fill', component: Fill},
  // {path:'/bot', component:Bot},
  // {path:'/multibot', component:Multibot}

]

const router = new VueRouter({
  routes : routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router : router,
  render: h => h(App)
})
