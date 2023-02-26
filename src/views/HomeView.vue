<script setup lang="ts">
import useUserStore from '@/stores/user';
import type { IUser } from '@/stores/user';
import { computed } from 'vue';
import type { ComputedRef } from 'vue';

import Loader from '@/components/shared/Loader.vue';

const userStore = useUserStore();
const user: ComputedRef<IUser> = computed(() => {
  return userStore.user;
});

</script>

<template>
  <main>
    <h1>Home View</h1>
    <pre>{{ user.name }}</pre>
    <pre>{{ user.email }}</pre>

    <Loader class="loader"/>
  </main>
</template>

<style scoped>
.loader {
  width: 100px;
  height: 100px;
}
</style>
