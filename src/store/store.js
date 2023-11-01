import {defineStore} from 'pinia'
import axios from 'axios'

export const gameStore = defineStore('country',{
    state:()=>({
        country:[]
    }),
   getters:{
        getQus(){
            return this.country.findIndex(item => item.questions.length);
        }
   },
   actions:{
        async getApi(){
            try{
                const res = await axios.get('http://localhost:3000/quiz')
                this.country = res.data
            }catch(error){
                console.log(error)
            }
        },
        getLength(){
            const index = this.country.findIndex(item => item.questions);
        }
    }
})