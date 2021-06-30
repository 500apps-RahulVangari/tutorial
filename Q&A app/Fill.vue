<template>
    <div>
    <h1>Fill in Blanks</h1>
    <div v-for="(question,index) in questions" 
        :key=question>
    <p>
        {{index+1}}.{{question}}
        <input type="text" v-model="given" >
    </p>
    <p>{{given}}</p><button @click="check">Check</button><span>{{check()}}</span>
    </div>
    <!-- <p>{{questions[0]}}
        <input type="text" v-model='ans'>
        </p>
    <p>{{ans}}</p> -->
    </div>
</template>

<script>


export default {
    data(){
        return{
            questions:['In this age of technology, banks have (embarked)___________ '],
            answers:['embarked',],
            given:[],
            chec:false,
        }
    },
    methods:{
        check:function(){
                if(this.given[0]==this.answers[0]){
                    return "correct";
                }
                else{
                    return "wrong";
                }
        } 
        },
    computed:{
        add:function(event){
            return{
                
            }
        }

    }
}
</script>