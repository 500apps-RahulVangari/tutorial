<template>
    <div>
        <h1>Choose the correct</h1>
        <div v-for="(ex,index) in single_exam"  :key="ex">
        <label>{{index+1}}.{{ex.question}}</label>
            <div v-for="ans in ex.answers"  :key='ans'>
            <input type="radio" :value="ans" v-model="ex.selected" />  {{ans}}
            </div>
            <span :class="[(ex.selected === ex.correct)?'green':'red']" v-show="single_chec">Your Answer: {{ex.selected}}</span>
            <br>
            <!-- <span  v-show="ex.selected === ex.correct && single_chec " class="red">Your Answer : {{ex.se}}</span> -->
            <span  v-show="ex.selected !== ex.correct && single_chec " class='green'>Correct Answer : {{ex.correct}}</span>
            <br>
        </div>
        <b-button @click.once="submit">Submit</b-button>
        <br>
        <br>
        <span>Correct: {{single_correct_num}}</span>
        <span>wrong:{{single_wrong_num}}</span>
        <span>{{total_wrong}}</span>
        </div>    
</template>

<script>
export default {
    data(){
        return{
            single_chec:false,
            single_exam:[
                {
                    question:'In this age of technology, banks have (Embarked)___________ ',
                    answers:['Embark','Close','Awesome'],
                    correct:'Embark',
                    selected:'',
                },
                {
                    question:'Prime minister of India (Modi)___________ ',
                    answers:['Modi','Amith','Ramnadh'],
                    correct:'Modi',
                    selected:'',
                },
                {
                    question:'Minister of India (Amith)___________ ',
                    answers:['Modi','Amith','Ramnadh'],
                    correct:'Amith',
                    selected:'',
                }
            ],
            single_options_correct:[],
            single_options_wrong:[],
            single_correct_num:0,
            single_wrong_num:0,
            total_wrong:0,
        }
    },
    methods:{
        submit:function(){
            this.single_chec="true";
            for(let i=0;i<this.single_exam.length;i++){
                if(this.single_exam[i].selected===this.single_exam[i].correct){
                    this.single_options_correct.push(this.single_exam[i].selected)
                }else{
                    console.log('else')
                    this.single_options_wrong.push(this.single_exam[i].selected)

                }
            }
            this.single_correct_num=this.single_options_correct.length;
            this.single_wrong_num=this.single_exam.length-this.single_options_correct.length;
            this.$emit('single',this.single_correct_num)
        },
        mouted(){
            this.$root.$on('eventing', data => {
                this.total_wrong+=data;
        
    });
        }

    }
    
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