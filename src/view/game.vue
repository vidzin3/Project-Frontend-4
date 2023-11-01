<script>
    import {defineProps} from 'vue'
    import {useRouter} from 'vue-router'

    export default {
        setup(){
            const router = useRouter()
            return {
                router
            }
        },
        props:['v']
    }
</script>

<template>
    <v-card class="d-lg-flex md-block align-center" :elevation="4">
        <v-img :src="v.img" :width="400"></v-img>
        <div class="pa-4 ">
            <v-card-title>{{ v.name }}</v-card-title>
            <v-card-subtitle class="mb-4">GeoGuessr is the most fun game out there! Easy to learn but really hard to master, so is really addictive! And you learn lots about the world at the same time!</v-card-subtitle>
            <v-btn class="mx-4" @click="router.push(`/playgame/${v.id}`)" color="yellow">Play Now!</v-btn>
        </div>
    </v-card>
</template>