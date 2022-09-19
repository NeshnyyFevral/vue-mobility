<template>
  <span
    v-for="item in items"
    :key="item.key"
    :style="{top: `${item.top}px`, left: `${item.left}px`, backgroundColor: item.color}"
    :class="$style.ripple"
  />
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<style module lang="scss">
  .ripple {
    position: absolute;
    z-index: 10;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    opacity: 0.4;
    transform: scale(0);
    animation: ripple 0.8s linear;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(40);
    }
  }
</style>
