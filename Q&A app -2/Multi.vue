<template>
 <div>
   <h1>Multi choice questions</h1>
      <div v-for="(ex,index) in multi_exam"  :key="ex">
        <label>{{index+1}}.{{ex.question}}</label>
        <br>
            <div v-for="ans in ex.answers"  :key='ans' >
            <input type="checkbox" :value="ans" v-model="ex.selected" :disabled="multi_chec"/> {{ans}}
            </div>
            <label>Your Answers:</label> 
            <span 
              :class="[JSON.stringify(ex.selected) === JSON.stringify(ex.correct) ? 'green' : 'red']" 
              v-show=" multi_chec" v-for="se in ex.selected" 
              :key="se"> 
              {{se}} 
            </span>
            <br>
            <label v-show="JSON.stringify(ex.selected) !== JSON.stringify(ex.correct) && multi_chec" class='green'>Correct Answers: 
              <span v-for="co in ex.correct" :key="co" > {{co}} </span>
              </label>
            <br><br>
        </div>
        <b-button @click.once="submit">Submit</b-button>
        <br>
        <br> 
        <label>Correct:{{multi_correct_num}}</label>
        <label>Wrong:{{multi_wrong_num}}</label>
        </div>  
</template>

<script>
  export default {
    data() {
      return {
        multi_chec :false,
       multi_exam:[
                {
                    question:'In this age of technology, banks have more (Security)___________ ',
                    answers:['Security','Technology','Wealth'],
                    correct:['Security','Technology'],
                    selected:[],
                },
                {
                    question:'Ministers of India (Modi)___________ ',
                    answers:['Modi','Amith','KCR'],
                    correct:['Modi','Amith'],
                    selected:[],
                }
            ],
            multi_correct_answers:[],
            multi_wrong_answers:[],
            multi_correct_num:0,
            multi_wrong_num:0,


      }
    },
    methods:{
        submit:function(){
          this.multi_chec = true;
          for(let i=0;i<2;i++){
            if(JSON.stringify(this.multi_exam[i].selected) === JSON.stringify(this.multi_exam[i].correct)){

              this.multi_correct_num++
          }else{
              this.multi_wrong_num++
          }
            if(this.multi_exam[i].correct.length===this.multi_exam[i].selected.length){
                      for(let j=0;j<this.multi_exam[i].correct.length;j++){
                         if(this.multi_exam[i].correct[j]===this.multi_exam[i].selected[j]){                          
                           this.multi_correct_answers.push(this.multi_exam[i].selected[j])
                          //  this.multi_correct_num++
                    }else if(this.multi_exam[i].correct[j]!==this.multi_exam[i].selected[j]){                    
                      // this.multi_wrong_num++
                      this.multi_wrong_answers.push(this.multi_exam[i].selected[j]);
                    }
                }
            }
            else if(this.multi_exam[i].correct.length!==this.multi_exam[i].selected.length){
              // this.multi_chec = true;
              // this.multi_wrong_num++
              this.multi_wrong_answers.push(this.multi_exam[i].selected[j]);
            }
          }
          this.$emit('multi',this.multi_correct_num)
        }
    }
  }
</script>

<style scoped>
.red{
  background-color: red;
  color: honeydew;
}
.green {
  background-color: green;
  color: honeydew;
}

</style>