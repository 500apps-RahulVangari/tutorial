<template>
    <p>{{exm}}</p>
</template>

<script>
export default {
    data(){
        return{
            exm:[],
        }
    },
    methods:{
        async fetchQuestions(){
            const res = await fetch('http://localhost:5000/fill_exam');
            const data = await res.json();
            return data
        },
        async created(){
            this.exm = await this.fetchQuestions();
        }
    }
}
</script>