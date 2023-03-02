<template>
  <h1>
    Create account
  </h1>

  <p class="hint">
    Please, provide your email, username and choose a password.
  </p>

  <div class="inputs">
    <input class="auth-input" type="email"
           placeholder="Email"
           :value="email" @change="email = $event.target.value">
    <input class="auth-input" type="text"
           placeholder="Username"
           :value="username" @change="username = $event.target.value">
    <input class="auth-input" type="password"
           placeholder="Password"
           :value="password" @change="password = $event.target.value">
  </div>

  <span class="error">{{ error }}</span>

  <button class="sign-up-btn" @click="signUp">
    Sign up
  </button>

  <p class="login-text">Already have the account? <button @click="onBack" class="login-btn">Log in</button></p>

</template>

<script setup lang="ts">
import {defineProps, ref, watch} from "vue";

const email = ref('');
const username = ref('');
const password = ref('');

const error = ref('All fields are required');

watch([email, username, password], () => {
  if (email.value.length > 0 && username.value.length > 0 && password.value.length > 0) {
    error.value = '';
  } else {
    error.value = 'All fields are required';
  }
});

const props = defineProps({
  onSignUp: {
    type: Function,
    required: true
  },
  onBack: {
    type: Function,
    required: true
  }
});

const signUp = () => {
  props.onSignUp(email.value, username.value, password.value);
}

</script>

<style scoped>

h1 {
  position: relative;
  margin: 45px 0 0 0;
  font-size: 38px;
  font-weight: 600;
  user-select: none;
}

.hint {
  margin: 10px 0 0 0;
  width: 325px;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  color: var(--color-subtext);
  user-select: none;
  text-align: center;
}

.inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;

  margin-top: 50px;
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
  margin-top: 20px;
}

.sign-up-btn {
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

  margin-top: 56px;
}

.sign-up-btn:hover {
  background-color: var(--color-primary-light);
}

.login-text {
  margin-top: 30px;

}

.login-text {
  color: var(--color-subtext);
}

.login-btn {
  font-size: 16px;
  font-weight: 400;
  text-decoration: underline;
  user-select: none;
  background-color: transparent;
  border: none;
  padding: 0;
}

.login-btn:hover {
  text-decoration: none;
}


</style>
