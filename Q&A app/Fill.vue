<template>
    <div>
    <h1>Fill in Blanks</h1>
        <div v-for="(ex,index) in exam" :key='ex'>
            <label>{{index+1}}.{{ex.question}}</label> 
            <input type="text" v-model.lazy="ex.given" >
            <p>Your answer:{{ex.given}}</p>
            <br><br>
        </div>
        <button @click.once="submit">Submit</button>
        <br>
        <label>Correct Answers</label><span v-for="co in correct_answers" :key='co' > {{co}}</span>
        <br>
        <label>Wrong Answers: </label><span v-for="wo in wrong_answers" :key='wo' > {{wo}}</span>
        <br>
        <label>Correct: {{fill_correct}}</label>
        <br>
        <label>Wrong: {{fill_wrong}}</label>

    </div>
</template>

<script>


export default {
    data(){
        return{
            exam:[
                {
                    question:'In this age of technology, banks have (embarked)',
                    answer:'embarked',
                    given:'',
                    chec:false,
                },
                {
                    question:'Oppsite of East(west)',
                    answer:'west',
                    given:'',
                    chec:false,
                }
                ],
                fill_correct:0,
                fill_wrong:0,
            correct_answers:[],
            wrong_answers:[],
        }
    },
    methods:{
        submit:function(){
            for(let i=0;i<2;i++){
                if(this.exam[i].given===this.exam[i].answer){
                    this.correct_answers.push(this.exam[i].given);
                    this.exam[i].given=''
                }
                else if(this.exam[i].given!==this.exam[i].answer){
                    this.wrong_answers.push(this.exam[i].given);
                    this.exam[i].given=''
                }
            }
            this.fill_correct=this.correct_answers.length;
            this.fill_wrong=this.wrong_answers.length;
        } 
    },
}
</script>