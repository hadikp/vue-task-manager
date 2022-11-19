<script setup>
import Welcome from './components/Welcome.vue';
import { useUserStore } from '../stores/user'

const userData = useUserStore()
</script>

<template>
<header>
  {{ userData.user }}
</header>
<main>
   <Welcome  /> <!--v-if="!userData.user.id" -->
  <!-- <p v-if="userData.user.id">Sikeres bejelentkezés</p> -->
</main>
<footer></footer>
  
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand');


</style>
