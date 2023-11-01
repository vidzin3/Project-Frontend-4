<script>
    export default {
        props:['question','view','incProgress']
    }
</script>

<template>
    <v-progress-linear
        :model-value="incProgress"
        class="me-2"
        height="40"
        striped
        color="deep-orange"  
    >
    <strong>{{ Math.ceil(incProgress) }}%</strong>    
    </v-progress-linear>
    <v-card class="mt-4">
        <v-card-title>{{ question.name }}</v-card-title>
        <p class="text-h5 px-4 py-3" >Quizes finish <span class="text-white pa-2 rounded-lg bg-black">{{ view }}</span></p>
    </v-card>
</template>