<template>
  <div>
    <h1>Q and A app</h1>
    <div class='container'>
    <router-link to='/multi'>Multi</router-link>
    <br>
    <router-link to ='/single'>Single</router-link>
    <br>
    <router-link to="/fill">Fill</router-link>
    <br>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    
    }
  },
  methods:{
    
    
  }
}
</script>

<style>

</style>
