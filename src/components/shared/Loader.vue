<template>
  <div class="loader"/>
</template>

<style scoped>
.loader {
  background-repeat: no-repeat;
  background-position: center;
  animation: loader 8s infinite;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
    background-image: url('../../assets/images/loader/hourglass_up_full.svg');
  }
  13% {
    background-image: url('../../assets/images/loader/hourglass_up.svg');
  }
  26% {
    background-image: url('../../assets/images/loader/hourglass_down.svg');
  }
  39% {
    background-image: url('../../assets/images/loader/hourglass_down_full.svg');
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
    background-image: url('../../assets/images/loader/hourglass_down_full.svg');
  }
  63% {
    background-image: url('../../assets/images/loader/hourglass_down.svg');
  }
  76% {
    background-image: url('../../assets/images/loader/hourglass_up.svg');
  }
  89% {
    background-image: url('../../assets/images/loader/hourglass_up_full.svg');
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
    background-image: url('../../assets/images/loader/hourglass_up_full.svg');
  }
}
</style>
