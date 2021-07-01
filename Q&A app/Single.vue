<template>
    <div>
        <div v-for="(ex,index) in exam"  :key="ex">
        <label>{{index+1}}.{{ex.question}}</label>
            <div v-for="ans in ex.answers"  :key='ans' >
            <input type="radio" :value="ans" v-model="ex.selected" />  {{ans}}
            </div>
            <p>Your Answer: {{ex.selected}}</p>
            <br>
        </div>
        <button @click.once="submit">Submit</button>
        <br><br>
        <p>correct answers:{{options_correct}}</p>
        <p>wrong answers:{{options_wrong}}</p>
        <span>correct: {{correct_answers}}</span>
        <span>wrong:{{wrong_answers}}</span>
        </div>    
</template>

<script>
export default {
    data(){
        return{
            exam:[
                {
                    question:'In this age of technology, banks have (Embarked)___________ ',
                    answers:['Embark','Close','Awesome'],
                    correct:'Embark',
                    selected:'',
                    chec:false
                },
                {
                    question:'Prime minister of India (Modi)___________ ',
                    answers:['Modi','Amith','Ramnadh'],
                    correct:'Modi',
                    selected:'',
                    chec:false
                },
                {
                    question:'Minister of India (Amith)___________ ',
                    answers:['Modi','Amith','Ramnadh'],
                    correct:'Amith',
                    selected:'',
                    chec:false
                }
            ],
            options_correct:[],
            options_wrong:[],
            correct_answers:0,
            wrong_answers:0,

        }
    },
    methods:{
        submit:function(){
            for(let i=0;i<this.exam.length;i++){
                if(this.exam[i].selected===this.exam[i].correct){
                    this.options_correct.push(this.exam[i].selected)
                    this.exam[i].selected='';
                    console.log(i,this.exam[i].selected)
                }else{
                    this.options_wrong.push(this.exam[i].selected)
                    this.exam[i].selected=''
                }
            }
            this.correct_answers=this.options_correct.length;
            this.wrong_answers=this.exam.length-this.options_correct.length;

        }
    }
    
}
</script>
