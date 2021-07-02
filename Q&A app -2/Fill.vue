<template>
    <div>
    <h1>Fill in Blanks</h1>
        <div v-for="(ex,index) in fill_exam" :key='ex'>
            <label>{{index+1}}.{{ex.question}}</label> 
            <input type="text" v-model.lazy="ex.given" ><br>
            <span v-show="fill_chec">Your Answer:{{ex.given}}</span><br>
            <span v-show="ex.given === ex.answer && fill_chec" class="green">Correct Answer: {{ex.answer}}</span>
            <span v-show="ex.given !== ex.answer && fill_chec" class="red">Correct Answer: {{ex.answer}}</span>
            <br><br>
        </div>
        <b-button @click.once="submit">Submit</b-button>
        <br> 
        <br>
        <span>Correct: {{fill_correct_num}}</span>
        <span>Wrong: {{fill_wrong_num}} </span>
        <!-- <button @click="passEvent">update</button> -->
    </div>
</template>

<script>


export default {
    data(){
        return{
            fill_chec:false,
            fill_exam:[
                {
                    question:'In this age of technology, banks have (embarked)',
                    answer:'embarked',
                    given:'',
                },
                {
                    question:'Oppsite of East(west)',
                    answer:'west',
                    given:'',
                }
                ],
                fill_correct_num:0,
                fill_wrong_num:0,
            fill_correct_answers:[],
            fill_wrong_answers:[],
        }
    },
    methods:{
        submit:function(){
            this.fill_chec=true;
            for(let i=0;i<2;i++){
                if(this.fill_exam[i].given===this.fill_exam[i].answer){
                    this.fill_correct_answers.push(this.fill_exam[i].given);
                }
                else if(this.fill_exam[i].given!==this.fill_exam[i].answer){
                    this.fill_wrong_answers.push(this.fill_exam[i].given);
                }
            }
            this.fill_correct_num=this.fill_correct_answers.length;
            this.fill_wrong_num=this.fill_wrong_answers.length;
            this.$emit('fill',this.fill_correct_num);
            this.$root.$emit('eventing', this.fill_wrong_num);
        },
        // passEvent:function(){
        // } 
    },
}
</script>

<style>
.red{
    background-color: red;
    color: honeydew;
}
.green{
    background-color: green;
    color: honeydew;
}
</style>