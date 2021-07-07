<template>
 <div>
     <input type="text" v-model="filtertext">
     <ul>
    <li v-for="f in filtering" :key="f">{{f}}</li>
  </ul>
 </div>
</template>

<script>
import { frMixins } from "./frMixins";
export default {
    mixins:[frMixins]
}
</script>