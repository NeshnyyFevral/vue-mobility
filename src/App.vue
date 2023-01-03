<template>
  <div :class="$style.app">
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue';

import { useThemeStore } from '@/stores/theme';
import theme from '@/styles/theme';

const themeStore = useThemeStore();

const background = computed(() => (themeStore.theme ? theme.DARK_BG : theme.LIGHT_BG));
const color = computed(() => (themeStore.theme ? theme.DARK_TEXT : theme.LIGHT_TEXT));
</script>

<style module lang="scss">
  .app {
    --color-bg: v-bind(background);
    --color-text: v-bind(color);

    color: var(--color-text);
    background-color: var(--color-bg);
    transition: background-color 0.3s cubic-bezier(.25,.8,.5,1);
  }
</style>
