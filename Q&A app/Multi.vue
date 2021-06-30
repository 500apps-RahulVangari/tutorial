<template>
<div>
    <p>In this age of technology, banks have (embarked)___________ </p>
  <div v-for="ans in answer" :key="ans">
    <label>{{ans}}
    <input type="checkbox" :value='ans' v-model="selected" :disabled="chec">
    </label>
  </div>
  <br>
<button @click.once='chec = !chec' >check</button><span v-show='chec'>{{check()}}</span>
</div>
</template>

<script>
  export default {
    data() {
      return {
        answer:['embark','close','awesome'],
        correct:['embark','close'],
        selected:[],
        chec:false
      }
    },
    methods:{
        check:function(){
            if(this.correct.length===this.selected.length){
                for(let i=0;i<this.correct.length;i++){
                    if(this.correct[i]===this.selected[i]){
                        return 'correct';
                    }
                }
            }
            else{
                return 'wrong';
            }
        }
    }
  }
</script>

<style scoped>
.par{
    display:inline;
    word-wrap: break-word;
}
</style>