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
           @keypress.enter="focusNext"
           :value="email" @input="onEmailChange">
    <input class="auth-input" type="text"
           placeholder="Username"
           @keypress.enter="focusNext"
           :value="username" @input="onUsernameChange">
    <input class="auth-input" type="password"
           placeholder="Password"
            @keypress.enter="focusNext"
           :value="password" @input="onPasswordChange">
    <input class="auth-input" type="password"
           placeholder="Confirm password"
            @keypress.enter="focusNext"
            :value="passwordConfirm" @input="onPasswordConfirmChange">
  </div>

  <span class="error">{{ error }}</span>

  <button class="sign-up-btn" @click="signUp">
    Sign up
  </button>

  <p class="login-text">Already have an account? <button @click="onBack" class="login-btn">Log in</button></p>

</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import setRefOnChange from "@/utils/setRefOnChange";
import focusNext from "@/utils/focusNext";
import type {PropType} from "vue";

const email = ref('');
const username = ref('');
const password = ref('');
const passwordConfirm = ref('');

const onEmailChange = setRefOnChange(email);
const onUsernameChange = setRefOnChange(username);
const onPasswordChange = setRefOnChange(password);
const onPasswordConfirmChange = setRefOnChange(passwordConfirm);

const error = ref('');

watch([email, username, password, passwordConfirm], () => {
  if (!email.value.length || !username.value.length ||
      !password.value.length || !passwordConfirm.value.length) {
    error.value = 'All fields are required';
  } else if (password.value !== passwordConfirm.value) {
    error.value = 'Passwords do not match';
  } else {
    error.value = '';
  }


});

interface IProps {
  onSignUp: (email: string, username: string, password: string) => void,
  onBack: () => void
}

const props = defineProps({
  onSignUp: {
    type: Function as PropType<IProps['onSignUp']>,
    required: true
  },
  onBack: {
    type: Function as PropType<IProps['onBack']>,
    required: true
  }
});

const signUp = () => {
  props.onSignUp(email.value, username.value, password.value);
}

</script>

<style scoped lang="scss">

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
  gap: 24px;
  width: 100%;

  margin-top: 30px;
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

  &:focus {
    border-bottom-width: 2px;
  }
}

.error {
  height: 20px;
  font-size: 16px;
  font-weight: 400;
  color: var(--color-error);
  margin-top: 21px;
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

  margin-top: 33px;

  &:hover {
    background-color: var(--color-primary-light);
  }
}

.login-text {
  margin-top: 30px;

}

.login-text {
  color: var(--color-subtext);
  user-select: none;
}

.login-btn {
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
</style>
