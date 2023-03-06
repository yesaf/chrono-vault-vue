<script setup lang="ts">
import { RouterLink } from 'vue-router';

import SideMenu from '@/components/sideMenu/SideMenu.vue';
import Loader from '@/components/shared/Loader.vue';
</script>

<template>
  <div class="home-page">
    <SideMenu/>
    <main>
      <h1>Home View</h1>
      <RouterLink to="auth">Go to Auth</RouterLink>

      <Loader class="loader"/>
    </main>
  </div>
</template>

<style scoped>
.loader {
  width: 100px;
  height: 100px;
}

.home-page {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
</style>
