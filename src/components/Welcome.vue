<script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  const email = ref('hadikp@freemail.hu')
  const password = ref('')
  const error = ref('')

  const login = () => {
    if(!email.value || !password.value){
      error.value = 'Töltsd ki mindkét mezőt!'
      return
    }

    axios.post('api/user/create',
      {
        email: email.value,
        password: password.value
      }).then(resp => console.log(resp.data))
        .catch(err => (error.value = 'Hibás bejelentkezés, próbáld meg újra'))
  }
</script>

<template>
  <h1>taskR</h1>
  
  <div class="df">
    <h2>A leg<strong>cool</strong>abb task kezelő evör</h2>
    <img src="../assets/vue.svg" class="logo" alt="Vue logo" />
  </div>
   <form class="df" v-on:submit.prevent="login" > <!-- -->
    <font-awesome-icon icon="user-astronaut" />
    {{ error }} 
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
     <button>login</button> <!--v-on:click="login()" -->
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
  color: #fff;
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