<template>
  <div class="auth-form">
    <input type="text" :value="name">
    <input type="text" :value="password">
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const name = ref('')
const password = ref('')

</script>

<style scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 500px;

  background-color: #fff;
  border-radius: 10px;
}
</style>
