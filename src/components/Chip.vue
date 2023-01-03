<template>
  <span :class="$style.chip">
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue';

import {
  ChipSize,
  ChipSizeValue,
  ChipVariant,
} from '@/model/chip';
import GlobalColors from '@/styles/colors';

const props = defineProps({
  variant: {
    type: String,
    default: ChipVariant.DEFAULT,
    validator: (value) => Object.values(ChipVariant).includes(value),
  },
  size: {
    type: String,
    default: ChipSize.NORMAL,
    validator: (value) => Object.values(ChipSize).includes(value),
  },
});

const MapChipVariant = {
  [ChipVariant.ERROR]: GlobalColors.ERROR,
  [ChipVariant.PRIMARY]: GlobalColors.PRIMARY,
  [ChipVariant.WARNING]: GlobalColors.WARNING,
  [ChipVariant.DEFAULT]: GlobalColors.DEFAULT,
  [ChipVariant.SUCCESS]: GlobalColors.SUCCESS,
  [ChipVariant.INFO]: GlobalColors.INFO,
};

const MapChipSizes = {
  [ChipSize.SMALL]: ChipSizeValue.SMALL,
  [ChipSize.NORMAL]: ChipSizeValue.NORMAL,
  [ChipSize.LARGE]: ChipSizeValue.LARGE,
};

const color = computed(() => MapChipVariant[props.variant]);
const size = computed(() => MapChipSizes[props.size]);
</script>

<style module lang="scss">
  .chip {
    --chip-color: v-bind(color);
    --chip-size: v-bind(size);

    position: relative;
    padding: var(--chip-size);
    font-size: 14px;
    font-weight: 600;
    color: var(--chip-color);

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: "";
      background-color: var(--chip-color);
      border-radius: 12px;
      opacity: 0.12;
    }
  }
</style>
