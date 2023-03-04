<script setup lang="ts">
import useUserStore from '@/stores/user';
import { RouterLink } from 'vue-router';

import Loader from '@/components/shared/Loader.vue';

const userStore = useUserStore();
console.log(userStore.user);

</script>

<template>
  <main>
    <h1>Home View</h1>
    <RouterLink to="auth">Go to Auth</RouterLink>

    <Loader class="loader"/>
  </main>
</template>

<style scoped>
.loader {
  width: 100px;
  height: 100px;
}
</style>
