<template>
  <UserButton
    :variant="ButtonVariant.PRIMARY"
    :size="ButtonSize.LARGE"
  >
    Button
  </UserButton>
  <TotalStat :monotone="MonotoneVariant.DOWN">
    <template #main>
      <span :class="$style.main">
        $333.12k
      </span>
    </template>
    <template #after>
      <span :class="$style.after">
        +12%
      </span>
    </template>
  </TotalStat>
</template>

<script setup>
import TotalStat, { MonotoneVariant } from '@/components/TotalStat.vue';
import UserButton, { ButtonSize, ButtonVariant } from '@/components/UI/Button.vue';

</script>
<style module lang="scss">
  .main {
    color: currentColor;
  }

  .after {
    color: currentColor;
  }
</style>
