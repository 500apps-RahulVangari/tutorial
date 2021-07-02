<template>
  <div>
    <h1>Q and A app</h1> 
    <h2>Correct:{{correct}} </h2>
    <!-- <h2>Wrong:{{wrong}}</h2> -->
    <div class='container'>
    <Multi @multi="multi_num($event)"></Multi>
    <hr>
    <Single @single="single_num($event)"></Single>
    <hr>
    <Fill @fill="fill_num($event)"> </Fill>
    <!-- <b-button @click="submit" >Submit</b-button> -->
    </div>
  </div>
</template>

<script>
import Single from './Single.vue'
import Multi from './Multi.vue'
import Fill from './Fill.vue'

export default {
  name: 'app',
  data () {
    return {
      h:'Hi',
      correct:0,
      wrong:0,
      fill_c:0,
      single_c:0,
      multi_c:0
    }
  },
  methods:{
    fill_num(f1,f2){
      this.correct+=f1.event;
      this.wrong+=f2;  
    },
    single_num(value){
      this.correct+=value;
    },
    multi_num(value){
      this.correct+=value;
    },
    // submit(){
    //   this.correct=this.multi+this.single+this.fill;
    // }
    
  },
  components:{
    Multi,
    Single,
    Fill,
    
  },
  computed:{
    
    },
}
</script>

<style>

</style>

    <!-- <div class='container'>
    <router-link to='/multi'>Multi</router-link>
    <br>
    <router-link to ='/single'>Single</router-link>
    <br>
    <router-link to="/fill">Fill</router-link>
    <br>
    <router-link to='/'>Home</router-link>
    
    <hr>
    <hr>
    <router-view></router-view>
    </div> -->