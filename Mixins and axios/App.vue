<template>
  <div id="app">
    <h1>Parent</h1>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created(){
    console.log('app')
  }
}
</script>