<template>
  <h1>Welcome back!</h1>
  <p>Continue with Google or enter your details.</p>

  <button class="google-btn">
    <img :src="googleLogo" class="google-logo">
    <span>Log in with Google</span>
  </button>

  <p>or</p>
  <hr>

  <div class="inputs">
    <input class="auth-input"
           type="text" :value="username"
           @change="username = $event.target.value"
           placeholder="Username">
    <input class="auth-input"
           type="password" :value="password"
           @change="password = $event.target.value"
           placeholder="Password">
  </div>

  <span class="error">{{ error }}</span>

  <a href="#" class="reset-password">Forgot password?</a>

  <button class="login-btn" @click="login">
    Log in
  </button>

  <p>Don't have an account?
    <button class="sign-up" @click="onSignUp">Sign up for free</button>
  </p>
</template>

<script setup lang="ts">
import {ref, defineProps, watch} from 'vue';
import googleLogo from '@/assets/images/google-logo.svg';

const props = defineProps({
  onLogin: {
    type: Function,
    required: true
  },
  onSignUp: {
    type: Function,
    required: true
  }
});

const login = () => {
  props.onLogin(username.value, password.value);
}

const username = ref('');
const password = ref('');

const error = ref('All fields are required');
watch([username, password], () => {
  if (username.value.length > 0 && password.value.length > 0) {
    error.value = '';
  } else {
    error.value = 'Some error';
  }
});

</script>

<style scoped>
h1 {
  margin: 45px 0 0 0;
  font-size: 38px;
  font-weight: 600;
  user-select: none;
}

p {
  margin: 15px 0;
  font-size: 16px;
  font-weight: 400;
  user-select: none;

  color: var(--color-subtext);
}

hr {
  width: calc(100% - 40px);
  height: 1px;
  margin: 8px 20px;
  border: none;
  background-color: var(--color-border);
}

.google-btn {
  display: flex;
  gap: 5px;
  padding: 0;
  height: 55px;
  width: 325px;

  border: 1.5px solid var(--color-border);
  border-radius: 7px;
  background-color: var(--color-white);

  font-size: 19px;
  font-weight: 500;
  line-height: 24px;

  align-items: center;
  justify-content: center;
  user-select: none;
}

.google-btn:hover {
  background-color: var(--color-gray);
}

.google-logo {
  width: 24px;
  height: 24px;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0 10px 0;
}

.auth-input {
  width: 325px;
  height: 30px;

  border-top: none;
  border-left: none;
  border-right: none;

  border-bottom: 1px solid var(--color-border);

  font-size: 18px;
  padding: 0 2px;

  outline: none;
}

.auth-input:focus {
  border-bottom-width: 2px;
}

.error {
  height: 20px;
  font-size: 16px;
  font-weight: 400;
  color: var(--color-error);
  margin-bottom: 10px;
}

.reset-password {
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  user-select: none;
}

.reset-password:hover {
  text-decoration: underline;
}

.login-btn {
  width: 325px;
  height: 55px;

  border: none;
  border-radius: 7px;
  background-color: var(--color-primary);

  font-size: 19px;
  font-weight: 500;
  line-height: 24px;
  color: var(--color-white);

  align-items: center;
  justify-content: center;
  user-select: none;

  margin: 20px 0 15px;
}

.login-btn:hover {
  background-color: var(--color-primary-light);
}

.sign-up {
  font-size: 16px;
  font-weight: 400;
  text-decoration: underline;
  user-select: none;
  background-color: transparent;
  border: none;
  padding: 0;
}

.sign-up:hover {
  text-decoration: none;
}

</style>
