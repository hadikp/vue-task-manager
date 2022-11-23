<script setup>
  import { useUserStore } from '../../stores/user'
  const userData = useUserStore()

  const addTask = () => {
    console.log('Addtask called')
  }
</script>

<template>
  <footer v-if="userData.user.id">
    <form @submit.prevent="addTask">
      <input class="text-input" type="text" placeholder="Új feladat" />
      <input class="date-input" type="date" />
      <button><font-awesome-icon icon="plus" /></button>
    </form>

    <nav>
    <ul>
      <li><font-awesome-icon icon="user-astronaut" /></li>
      <li class="active"><font-awesome-icon icon="igloo" /></li>
      <li><font-awesome-icon icon="cog" /></li>
    </ul>
  </nav>
  </footer>

</template>

<style scoped>

  .active {
    border-bottom: 0.25rem solid  #fff;
  }
  footer {
    position: fixed;
    bottom: 0;
    height: 20vh;
  }

  footer form {
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;
    background-color: var(--blue);
    border-radius: 0.5rem;
    margin: 0.5rem;
  }

  .text-input {
    background-color: var(--blue);
    color: #ffff;
    width: 60vw;
  }

  .date-input {
    background-color: var(--blue);
    color: #ffff;
    width: 20vw;
  }

  footer input::placeholder {
    color: #ffff;
  }

  footer button {
    width: 1.75rem;
    height: 1.75rem;
    border: none;
    border-radius: 50%;
    font-size: 1.25rem;
    color: var(--blue);
  }

  nav ul {
    background-color: var(--blue);
    width: 100vm;
    height: 4.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  nav i {
    font-size: 3rem;
  }

  nav li {
    padding-bottom: 0.25rem;
    border-radius: 0.25rem;
  }

  nav svg {
    font-size: 3rem;
  }
</style>