<template>
  <div :class="$style.root">
    <p>COPYRIGHT © 2022 ThemeSelection, All rights Reserved</p>
    <p>Hand-crafted & Made with</p>
  </div>
</template>

<script setup>
import GlobalColors from '@/styles/colors';
</script>

<style module lang="scss">
  .root {
    --text-color: v-bind(GlobalColors.DEFAULT);

    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text-color);
  }
</style>
