<template>
  <UserButton
    :variant="ButtonVariant.PRIMARY"
    :size="ButtonSize.LARGE"
  >
    Button
  </UserButton>
  <MoneyStat :monotone="MonotoneVariant.UP">
    <template #main>
      <span :class="$style.main">
        $132.15
      </span>
    </template>
    <template #icon>
      <ArrowUp :class="$style.icon" />
    </template>
    <template #after>
      <span :class="$style.after">
        18%
      </span>
    </template>
  </MoneyStat>
</template>

<script setup>
import MoneyStat, { MonotoneVariant } from '@/components/MoneyStat.vue';
import UserButton, { ButtonSize, ButtonVariant } from '@/components/UI/Button.vue';

import ArrowUp from '../public/icons/chevron-up.svg';
</script>
<style module lang="scss">
.main{
  font-size: 16px;
}
.after{
  font-size: 12px;
}

.icon{
  position: relative;
  top: 8px;
  left: 0px;
  width: 20px;
  height: 20px;
}
</style>
