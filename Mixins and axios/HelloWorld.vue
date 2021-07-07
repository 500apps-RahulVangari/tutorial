<template>
<div class="container">
  <h2>{{name}}</h2>
  <!-- <p>{{text | toUpper | tolower }}</p> -->
  <input type="text" v-model="filtertext">
  <ul>
    <li v-for="f in filtering" :key="f">{{f}}</li>
  </ul>
  <hr>
  <b-button @click="post">post</b-button>
  <List></List>
  <hr>
  <ul>
    <li v-for="f in fr" :key="f">{{f}}</li>
  </ul>
  <!-- <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-left
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>     {{text}}    </b-card-text>

    <b-button @click="show = !show" variant="primary">Go somewhere</b-button>
  </b-card>
    <p v-show="show">{{info}}</p>
    <b-form-group
      label=question
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="flavour-2a"
        stacked
      ></b-form-checkbox-group>
    </b-form-group> -->
</div>

</template>

<script>
import axios from 'axios'
import List from './List.vue'
import { frMixins } from "./frMixins";
export default {
  mixins:[frMixins],
  data(){
    return{
      fr:[],
    }
  },
  // data(){
  //   return{
  //     text:"A beautiful picture",
  //     filtertext:'',
  //     friends:['Rahul','Raju','Sanjay','Sam']
      // info:" Some quick example text to build on the card title and make up the bulk of the card's content.",
      // show:false
      // question:'You can have ',
      // answer:[''],
      // selected: [], 
      //   options: [
      //     { text: 'Orange', value: 'orange' },
      //     { text: 'Apple', value: 'apple' },
      //     { text: 'Pineapple', value: 'pineapple' },
      //     { text: 'Grape', value: 'grape' }
      //   ]
  //   }
  // },
  // filters:{
  //   toUpper(val){
  //     return val.toUpperCase();
  //   }
  // },
  // computed:{
  //   filtering(){
  //     return this.friends.filter((x)=>{
  //       return x.match(this.filtertext);
  //     })
  //   }
  // },
  created(){
    this.name="Yas"
    console.log('hello')
  },
  components:{
    List,
  },
  methods:{
    post(){
      axios.get('https://fill-70ce3-default-rtdb.firebaseio.com/ax/-Me04kuyRficicu6GgsS.json',this.friends)
      .then(res => {console.log(res)
      this.fr=res.data})
      .catch(error =>console.log(error))
    }
  }
}
</script>