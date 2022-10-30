<template>
  <div :class="$style.root">
    <p :class="$style.copyright">
      COPYRIGHT © 2022 ThemeSelection, All rights Reserved
    </p>
    <p :class="$style.made">
      Hand-crafted & Made with
    </p>
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
    margin-bottom: 10px;
    color: var(--text-color);
  }

  @media screen and (max-width: 720px) {
    .copyright {
      width: 300px;
    }

    .made {
      width: 110px;
    }
  }

  @media screen and (max-width: 476px) {
    .copyright {
      width: 160px;
    }
  }
</style>
