<template>
  <div class="default-avatar">
    <span>{{ initials }}</span>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
})

const initials = computed(() => {
  const name = props.name.split(' ');
  let initials = name[0].charAt(0).toUpperCase();
  if (name.length > 1) {
    initials += name[name.length - 1].charAt(0).toUpperCase();
  }
  return initials;
})


</script>

<style scoped lang="scss">
.default-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15%;
  background-color: #6F5AF7;

  span {
    user-select: none;
    margin-top: 6px;
    font-size: 24px;
    font-weight: 600;
    color: #FFFFFF;
  }
}
</style>
