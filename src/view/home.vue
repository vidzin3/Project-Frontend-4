<script>
    import { onMounted, ref } from 'vue';
    import { gameStore } from '../store/store'; 
    import game from '../view/game.vue'

    export default {
        setup(){
            const game = gameStore()

            const store = game

            const loading = ref(true)

            onMounted(async () => {
                try{
                    await game.getApi()
                }catch (error){
                    console.log("error",error)
                }finally{
                    loading.value = false
                }
            })

            return {
                game,
                store
            }
        },
        components:{
            game
        }
    }
</script>

<template>
    <v-progress-linear indeterminate color="cyan" v-if="loading"></v-progress-linear>
    <v-container v-else fluid>
        <game v-for="v in game.country" :key="v.id" :v="v" />
        <!-- <v-card >
            <v-img :src="v.img" :width="400"></v-img>
            <div class="d-flex flex-column pa-4 ">
                <v-card-title>{{ v.name }}</v-card-title>
                <v-card-subtitle class="mb-4">GeoGuessr is the most fun game out there! Easy to learn but really hard to master, so is really addictive! And you learn lots about the world at the same time!</v-card-subtitle>
                <v-btn color="yellow">Play Now!</v-btn>
            </div>
        </v-card> -->
    </v-container>
</template>