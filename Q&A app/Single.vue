<template>
    <div>
        <label v-for="que in question " :key='que'>
            {{que}}    
            </label>
            <div v-for="ans in answers" :key='ans'>
            <input type="radio" value="ans"/>   {{ans}}
            </div>
            
        
        </div>    
</template>

<script>
export default {
    data(){
        return{
            question:['In this age of technology, banks have (embarked)___________ '],
            answers:['embark','close','awesome'],
        correct:['embark','close'],
        selected:[],
        chec:false
        }
    }
    
}
</script>
