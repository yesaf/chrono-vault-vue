<template>
  <h1>Welcome back!</h1>
  <p>Continue with Google or enter your details.</p>

  <GoogleLogin :callback="googleCallback"
               :buttonConfig="{
    width: '325',
    logo_alignment: 'center',
     text: 'continue_with'
  }"/>

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

import Loader from '@/components/shared/Loader.vue';
import {isEmail} from "@/utils/validators";

interface IProps {
  onLogin: (username: string, password: string) => Promise<any>,
  onGoogleLogin: (credential: string) => Promise<any>,
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
  },
  onGoogleLogin: {
    type: Function as PropType<IProps['onGoogleLogin']>,
    required: true
  },
});

interface IGoogleResponse {
  clientId: string,
  client_id: string,
  credential: string,
  select_by: string,
}

const googleCallback = (res: IGoogleResponse) => {
  props.onGoogleLogin(res.credential);
};

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

.inputs {
  display: flex;
  flex-direction: column;
  gap: 30px;
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
