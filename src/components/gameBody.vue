<script>
    export default {
        props:['question','color'],
    }
</script>

<script setup>
    import {defineEmits} from 'vue'
    const emit = defineEmits("selectOption")
    const selectOption = (isCorrect) =>{
        emit('selectOption',isCorrect)
    }
    const rippleClass = (isCorrect) => {
        return isCorrect ? { class: 'text-green-accent-3' } : { class: 'text-red-accent-4' };
    };
</script>

<template>
    <v-card class="pa-4" :elevation="4">
        <v-card-title class="text-center">{{ question.text }}</v-card-title>
        <v-card-actions v-for="btn in question.options" @click="selectOption(btn.isCorrect)">
            <v-btn variant="none" color="black" :ripple="rippleClass(btn.isCorrect)" block
            >{{ btn.text }}
        </v-btn>
        </v-card-actions>
    </v-card>
</template>
