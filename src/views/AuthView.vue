<template>
  <main>
    <AuthForm class="form-block" />
  </main>
</template>

<script setup lang="ts">
import AuthForm from '@/components/auth/AuthForm.vue'

</script>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
}
</style>
