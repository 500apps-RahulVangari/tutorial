<template>
<div>
    <h1>Bootstrap</h1>
  <div v-for="ex in exam" :key="ex">
        <b-form-group :label="ex.question" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
                id="radio-group-1"
                v-model="ex.selected"
                :options="ex.options"
                :disabled="ex.chec"
                :aria-describedby="ariaDescribedby"
                name="radio-options"
            ></b-form-radio-group>
        </b-form-group>
          <div>Result: <span v-show="ex.chec"> {{check()}}</span></div>
         <b-button @click="ex.chec = !ex.chec,check">Check</b-button>
    </div>
    <br>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          chec:false,
          exam:[
              {
            question:'HI',
            answer:'fourth',
            selected: '',
            chec:false,
            options: [
            { text: 'Toggle this custom radio', value: 'first' },
            { text: 'Or toggle this other custom radio', value: 'second' },
            { text: 'This one is Disabled', value: 'third' },
            { text: 'This is the 4th radio', value: 'fourth' }
            ]},
            {
            question:'HI 2',
            answer:'first2',
            selected: 'first2',
            chec:false,
            options: [
            { text: 'Toggle this custom radio2', value: 'first2' },
            { text: 'Or toggle this other custom radio2', value: 'second' },
            { text: 'This one is Disabled2', value: 'third2' },
            { text: 'This is the 4th radio2', value: 'fourth' }
            ]}
            ],
            answers:[],
      }
    },
    methods:{
        check:function(){
            for(let i=0;i<2;i++)
            if(this.exam[i].selected==this.exam[i].answer){
              answers.push(this.exam[i].selected);
              console.log(this.answers)
                return 'correct';
            }
            else{
                return 'wrong';
            }
        }
    },
    computed:{
        c:function(){
            console.log('hi');
        }
    }
    
  }
</script>