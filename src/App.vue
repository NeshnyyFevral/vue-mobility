<template>
  <div>
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
  </div>
</template>

<script setup>
import TotalStat from '@/components/TotalStat.vue';
import UserButton from '@/components/UI/Button.vue';
import { ButtonSize, ButtonVariant } from '@/enums/Button';

import { MonotoneVariant } from './enums/Stat';

</script>
<style module lang="scss">

</style>
