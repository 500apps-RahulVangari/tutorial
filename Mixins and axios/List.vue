<template>
<div>
 <div class="row">
     <h2>List</h2>
     <p v-html="'<strong>Strong v-html</strong>'"></p>
     <p v-text="'V-text'"></p>
     <!-- <input type="text" v-model="filtertext">
     <ul>
    <li v-for="f in filtering" :key="f">{{f}}</li>
  </ul> -->
 </div>
<div class="row">
    <h1 v-highlight:background="'aqua'">Custom directive</h1>
</div>
</div>
</template>

<script>
// import { frMixins } from "./frMixins";
export default {
    // mixins:[frMixins]
}
</script>
<style scoped>
/* .row{
    background-color:;
} */
</style>
