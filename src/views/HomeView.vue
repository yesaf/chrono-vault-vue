<script setup lang="ts">
import useUserStore from '@/stores/user';
import type { IUser } from '@/stores/user';
import { computed } from 'vue';
import type { ComputedRef } from 'vue';

import LogoExtended from '@/components/icons/LogoExtended.vue';

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

    <LogoExtended/>
  </main>
</template>
