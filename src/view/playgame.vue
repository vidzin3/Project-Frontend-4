<script>
    import gameHeader from '../components/gameHeader.vue';
    import gameBody from '../components/gameBody.vue';
    import Resualt from '../components/resault.vue'
    import { gameStore } from '../store/store';
    import {onMounted, ref,computed} from 'vue'
    import {useRoute} from 'vue-router'

    export default {
        components : {
    gameHeader,
    gameBody,
    Resualt
},
        setup(){

            const route = useRoute()
            const store = gameStore()

            // const currentQuestion = computed(() =>{
            //     return store.country.find(q => q.id === parseInt(route.params.id))
            // })

            const parseIntRoute = parseInt(route.params.id)
            const showresauld = ref(false)

            const storeMeu = async () =>{
                await store.getApi()
                view()
                Counted()
            }

            onMounted(() => {
                storeMeu()
            })

            const progress = ref(0)
            const numberOfCorrectAnswer = ref(0)

            const incProgress = computed(()=>{
                const resulte = store.country.map(item => item.questions.length)
                return `${progress.value/resulte*100}`
            })
            const questioncount = computed(()=>{
                return `${progress.value}/${store.country.findIndex(q => q.questions.length)}`
            })

            const view = () =>{
                const resulte = store.country.map(item => item.questions.length)
                return `${progress.value}/${resulte}`
            }
            const Counted = () =>{
                const resulte = store.country.map(item => item.questions.length)
                return `${resulte}`
            }
            const color = ref("null");

            const onClickAnswer = (isCorrect) => {
                if(isCorrect){
                    numberOfCorrectAnswer.value++
                    if(isCorrect == true){
                        color.value = "text-green"
                    }
                    if(isCorrect == false){
                        color.value = "text-red"
                    }
                }
                if(Counted() -1 === progress.value){
                    showresauld.value = true
                }
                progress.value++
            }
            

            return {
                incProgress,
                progress,
                store,
                questioncount,
                view,
                onClickAnswer,
                numberOfCorrectAnswer,
                Counted,
                showresauld,
                color
            }

        }
    }
</script>

<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <gameHeader v-for="question in store.country" :question="question" :view="view()" :incProgress="incProgress" />
            </v-col>
        </v-row>
        <v-row v-if="!showresauld">
            <v-col>
                <gameBody v-for="question in store.country" :color="color" :question="question.questions[progress]" 
                @selectOption="onClickAnswer" />
            </v-col>
        </v-row>
        <v-row v-else>
            <v-col>
                <Resualt :numberOfCorrectAnswer="numberOfCorrectAnswer" :Counted="Counted()" />
            </v-col>
        </v-row>
    </v-container>
</template>