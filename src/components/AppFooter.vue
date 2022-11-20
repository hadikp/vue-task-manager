<script setup>
  import { useUserStore } from '../../stores/user'
  const userData = useUserStore()
</script>

<template>
  <footer v-if="userData.user.id">
    <form>
      <input type="text" placeholder="Új feladat" />
      <input type="date" />
      <button><font-awesome-icon icon="Plus" /></button>
    </form>
  </footer>
</template>

<style scoped>
  footer {
    position: fixed;
    bottom: 0;
    height: 20vh;
  }
</style>