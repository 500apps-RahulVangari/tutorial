<template>
 <div>
      <div v-for="(ex,index) in exam"  :key="ex">
        <label>{{index+1}}.{{ex.question}}</label>
        <br>
            <div v-for="ans in ex.answers"  :key='ans' >
            <input type="checkbox" :value="ans" v-model="ex.selected"/> {{ans}}
            </div>
            <label>Your Answers:</label>
            <span v-for="se in ex.selected" :key="se"> {{se}} </span>
            <br><br>
        </div>
        <button @click.once="check">Submit</button>
        <br>
        <label>Correct Answers: </label><span v-for="co in correct_answers" :key='co' > {{co}}</span><br>
        <label>Wrong Answers: </label><span v-for="wo in wrong_answers" :key='wo' > {{wo}}</span>
        <br>
        <label>Correct:{{multi_correct_num}}</label>
        <label>Wrong:{{multi_wrong_num}}</label>
        </div>  
</template>

<script>
  export default {
    data() {
      return {
       exam:[
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
            correct_answers:[],
            wrong_answers:[],
            multi_correct_num:0,
            multi_wrong_num:0,


      }
    },
    methods:{
        check:function(){
          for(let i=0;i<2;i++){
            if(this.exam[i].correct.length===this.exam[i].selected.length){
                      for(let j=0;j<this.exam[i].correct.length;j++){
                         if(this.exam[i].correct[j]===this.exam[i].selected[j]){
                           this.correct_answers.push(this.exam[i].selected[j])
                           this.multi_correct_num++
                    }else if(this.exam[i].correct[j]!==this.exam[i].selected[j]){
                      this.multi_wrong_num++
                      this.wrong_answers.push(this.exam[i].selected[j]);
                    }
                }
            }
            else if(this.exam[i].correct.length!==this.exam[i].selected.length){
              this.multi_wrong_num++
              this.wrong_answers.push(this.exam[i].selected[j]);
            }
          }
        }
    }
  }
</script>

