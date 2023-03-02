<template>
  <main>
    <div class="auth-form">
      <LoginForm v-if="activeForm === 'login'" :on-login="login" :on-sign-up="goToSignUp"/>
      <SignUpForm v-else :on-back="goToLogin" :on-sign-up="signUp"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import LoginForm from '@/components/auth/LoginForm.vue';
import SignUpForm from '@/components/auth/SignUpForm.vue';
import {ref} from "vue";

const activeForm = ref('login');

const goToSignUp = () => {
  activeForm.value = 'signup';
}

const goToLogin = () => {
  activeForm.value = 'login';
}

const login = (username: string, password: string) => {
  console.log(username, password);
}

const signUp = (email: string, username: string, password: string) => {
  console.log(email, username, password);
}

</script>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url("../assets/images/background.svg") center center / cover no-repeat fixed;
}

.auth-form {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;
  height: 580px;

  background-color: #fff;
  border-radius: 30px;

  box-shadow: rgb(145 145 145) 1px 1px 12px 1px;
}
</style>
