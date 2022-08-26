<script setup>

</script>

<template>
  <h1>taskR</h1>
  <div class="df">
    <h2>A leg<strong>cool</strong>abb task kezelő evör</h2>
    <img src="../assets/vue.svg" class="logo" alt="Vue logo" />
  </div>
  <form class="df">
    <font-awesome-icon icon="user-astronaut" />
    <input type="email" placeholder="email">
    <input type="password" placeholder="password">
    <button>login</button>
  </form>
</template>

<style scoped>



h1 {
  font-size: 7rem;
  text-align: center;
}

h2 {
  font-size: 2rem;
  text-align: right;
  font-weight: normal;
}

.logo {
  width: 100px;
  height: 100px;
}

form {
  background-color: var(--blue);
  border-radius: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 2rem;
}

form svg {
  font-size: 5rem;
}

input {
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--inputBg);
  padding: 0.5rem;
}

button {
  background-color: var(--blue);
  color: #fff;
  border: none;
  font-size: 5.5rem;
}

main {
  padding: 0.5rem;
}
</style>