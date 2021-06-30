import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Multi from './Multi.vue'
import Single from './Single.vue'
import Fill from './Fill.vue'

Vue.use(VueRouter);

const routes = [
  {path:'/multi', component: Multi},
  {path:'/single', component: Single},
  {path:'/fill', component: Fill},
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
