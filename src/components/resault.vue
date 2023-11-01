<script>
    export default {
        props:['numberOfCorrectAnswer','Counted']
    }
</script>

<template>
    <!-- <v-alert icon="$vuetify" title="Your Soccore" type="info"></v-alert> -->
    <v-card title="Your Sccore" :elevation="5" class="text-center">
        <v-card-title class="text-h4 mb-10">
            <v-text class="bg-red pa-3">
                {{ numberOfCorrectAnswer }} / {{ Counted }}
            </v-text>
        </v-card-title>
        <v-card-actions class="d-flex align-center justify-center">
            <v-btn to="/" color="orange" variant="outlined">GO BACK</v-btn>
        </v-card-actions>
    </v-card>
</template>