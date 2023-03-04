<template>
  <h1>Welcome back!</h1>
  <p>Continue with Google or enter your details.</p>

  <button class="google-btn">
    <img :src="googleLogo" alt="" class="google-logo">
    <span>Log in with Google</span>
  </button>

  <p>or</p>
  <hr>

  <div class="inputs">
    <input class="auth-input"
           type="email" :value="email"
           @input="onUsernameChange"
           @keypress.enter="focusNext"
           placeholder="Email">
    <input class="auth-input"
           type="password" :value="password"
           @input="onPasswordChange"
           @keypress.enter="login"
           placeholder="Password">
  </div>

  <span class="error" :class="highlightError && 'highlight'">
    {{ error }}
  </span>

  <a href="#" class="reset-password">Forgot password?</a>

  <button class="login-btn" @click="login">
    Log in
  </button>


  <p>Don't have an account?
    <button class="sign-up" @click="onSignUp">
      Sign up for free
    </button>
  </p>

  <div v-if="loading" class="loader-bg">
    <Loader class="loader"/>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import type {PropType} from 'vue';
import setRefOnChange from '@/utils/setRefOnChange';
import focusNext from "@/utils/focusNext";
import googleLogo from '@/assets/images/google-logo.svg';

import Loader from '@/components/shared/Loader.vue';
import {isEmail} from "@/utils/validators";

interface IProps {
  onLogin: (username: string, password: string) => Promise<any>,
  onSignUp: () => void,
  authError: string
}

const props = defineProps({
  onLogin: {
    type: Function as PropType<IProps['onLogin']>,
    required: true
  },
  onSignUp: {
    type: Function as PropType<IProps['onSignUp']>,
    required: true
  }
});


const loading = ref(false);

const email = ref('');
const password = ref('');

const onUsernameChange = setRefOnChange(email);
const onPasswordChange = setRefOnChange(password);

const error = ref('');
const highlightError = ref(false);
const setErrorHighlight = () => {
  highlightError.value = true;
  setTimeout(() => {
    highlightError.value = false;
  }, 500);
};

watch([email, password], () => {
  if (!isEmail(email.value)) {
    error.value = 'Invalid email';
  } else if (!email.value.length || !password.value.length) {
    error.value = 'All fields are required';
  } else {
    error.value = '';
  }
});

const login = () => {
  if (error.value.length || !email.value.length) {
    setErrorHighlight();
    return;
  }
  loading.value = true;
  props.onLogin(email.value, password.value)
      .catch(() => {
        loading.value = false;
        error.value = 'Invalid username or password';
      })
}

</script>

<style scoped lang="scss">
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
  position: relative;
  display: flex;
  gap: 5px;
  padding: 0;
  height: 55px;
  width: 325px;

  border: 1px solid var(--color-border);
  border-radius: 7px;
  background-color: var(--color-white);

  font-size: 19px;
  font-weight: 500;
  line-height: 24px;

  align-items: center;
  justify-content: center;
  user-select: none;

  & > span {
    margin-left: 15px;
  }

  & > .google-logo {
    position: absolute;
    left: 56px;

    width: 24px;
    height: 24px;
    transition: width, height, left;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
  }

  &:hover {
    background-color: var(--color-gray-light);

  }

  &:hover > .google-logo {
    width: 30px;
    height: 30px;
    left: 53px;
  }
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
  transition: font-size 0.4s ease-in-out;
}

.error.highlight {
  font-size: 18px;
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

  margin: 20px 0 15px;

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

  &:hover {
    background-color: var(--color-primary-light);
  }
}

.sign-up {
  font-size: 16px;
  font-weight: 400;
  text-decoration: underline;
  user-select: none;
  background-color: transparent;
  border: none;
  padding: 0;

  &:hover {
    text-decoration: none;
  }
}

.loader-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
  background-color: var(--color-white);
  opacity: 0.9;
}

.loader {
  height: 150px;
  width: 150px;
}
</style>
