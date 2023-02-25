<template>
  <svg :style="{height: height, width: 7*height}">
    <text :style="{fontSize: height, lineHeight: height+'px'}" :y="0.8*height">
      T
    </text>
    <image :href="logo" :style="{height: 0.9*height}" :x="0.75*height"/>
    <text :style="{fontSize: height, lineHeight: height+'px'}"
          :x="1.25*height"
          :y="0.8*height">
      ME MAVEN
    </text>
  </svg>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.svg';
import { defineProps } from 'vue';
defineProps({ height: { type: Number, default: 100 } });
</script>

<style scoped>
/*import Zen Antique font*/
@import url('https://fonts.googleapis.com/css?family=Zen+Antique&display=swap');
svg {
  -webkit-filter: invert(100%); /* safari 6.0 - 9.0 */
  filter: invert(100%);
  user-select: none;          /* Non-prefixed version */
}

text {
  font-family: 'Zen Antique', serif;
  fill: #000;
}
</style>
