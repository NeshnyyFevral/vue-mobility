<template>
  <div>
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
  </div>
</template>

<script setup>
import MoneyStat from '@/components/MoneyStat.vue';
import UserButton from '@/components/UI/Button.vue';
import { ButtonSize, ButtonVariant } from '@/enums/Button';
import { MonotoneVariant } from '@/enums/Stat';

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
  top: 15px;
  left: 10px;
  width: 20px;
  height: 20px;
}

</style>
