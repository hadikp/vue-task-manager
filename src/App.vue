<script setup>
import Welcome from './components/Welcome.vue';
import AppFooter from './components/AppFooter.vue';
import { useUserStore } from '../stores/user'

const userData = useUserStore()
</script>

<template>
<header v-if="userData.user.id">
  {{ userData.user }}
</header>
<main>
   <Welcome v-if="!userData.user.id" /> 
   <Tasks v-if="userData.user.id" />
</main>
<AppFooter />
  
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand');




</style>
