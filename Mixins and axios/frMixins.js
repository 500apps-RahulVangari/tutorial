export const frMixins =  {
    data(){
        return{
            name:'Mas',
            filtertext:'',
            friends:['Rahul','Raju','Sanjay','Sam']
            }
        },
    computed:{
            filtering(){
                return this.friends.filter((x)=>{
                    return x.match(this.filtertext);
                })
            }
        },
        created(){
            this.name = 'Raas';
            console.log('mixin')
        }
    };