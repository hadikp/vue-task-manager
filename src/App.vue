<script setup>
import Welcome from './components/Welcome.vue';
import AppFooter from './components/AppFooter.vue';
import { useUserStore } from '../stores/user'
import AppHeader from './components/AppHeader.vue';

const userData = useUserStore()
</script>

<template>
  <AppHeader />
<main>
   <Welcome v-if="!userData.user.id" /> 
   <Tasks v-if="userData.user.id" />
</main>
<AppFooter />
  
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand');




</style>
