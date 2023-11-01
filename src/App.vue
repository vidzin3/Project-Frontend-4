<script>
    import {RouterView} from 'vue-router'

    export default {
        components:{
            RouterView
        },
        data(){
            return{
                icons: [
                    'mdi-facebook',
                    'mdi-twitter',
                    'mdi-linkedin',
                    'mdi-instagram',
                ],    
            }
        }
    }

</script>

<template>

<v-app>
    <v-app-bar theme="dark">
        <v-app-bar-nav-icon size="small"></v-app-bar-nav-icon>
        <v-app-bar-title>Questions Country</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-list-item class="rounded-xl" active-class="active" to="/">Home</v-list-item>
        <v-list-item class="rounded-xl" active-class="active" to="/about">About</v-list-item>
    </v-app-bar>
    <v-main>
        <RouterView />
    </v-main>
    <v-footer class="d-flex pa-0 align-end">
        <div class="bg-teal d-flex w-100 align-center px-4">
        <strong>Build By David</strong>

        <v-spacer></v-spacer>

        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            :icon="icon"
            variant="plain"
            size="small"
        ></v-btn>
        </div>
    </v-footer>
</v-app>
</template>