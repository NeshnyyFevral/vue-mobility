<template>
  <UserButton
    :variant="ButtonVariant.PRIMARY"
    :size="ButtonSize.LARGE"
  >
    Button
  </UserButton>
  <MoneyStat :monotone="MonotoneVariant.UP">
    <template #main>
      <span :class="$style.mainMoney">
        $132.15
      </span>
    </template>
    <template #icon>
      <arrowUp :class="$style.iconMoney" />
    </template>
    <template #after>
      <span :class="$style.afterMoney">
        18%
      </span>
    </template>
  </MoneyStat>
  <TotalStat :monotone="MonotoneVariant.DOWN">
    <template #main>
      <span :class="$style.mainTotal">
        $333.12k
      </span>
    </template>
    <template #after>
      <span :class="$style.afterTotal">
        +12%
      </span>
    </template>
  </TotalStat>
  <Chip
    :variant="ChipVariant.PRIMARY"
    :size="ChipSize.SMALL"
    :class="$style.chip"
  >
    Party
  </Chip>
</template>

<script setup>
import arrowUp from '@/assets/icons/chevron-up.svg';
import Chip, { ChipSize, ChipVariant } from '@/components/Chip.vue';
import MoneyStat from '@/components/MoneyStat.vue';
import TotalStat, { MonotoneVariant } from '@/components/TotalStat.vue';
import UserButton, { ButtonSize, ButtonVariant } from '@/components/UI/Button.vue';
</script>

<style module lang="scss">
  .mainMoney {
    font-size: 16px;
    line-height: 16px;
  }

  .afterMoney {
    font-size: 12px;
    line-height: 12px;
    color: currentColor;
  }

  .iconMoney {
    position: relative;
    top: 8px;
    left: 1px;
    width: 20px;
    height: 20px;
  }

  .mainTotal {
    font-size: 20px;
  }

  .afterTotal {
    font-size: 12px;
  }

  .chip {
    font-size: 14px;
  }
</style>
