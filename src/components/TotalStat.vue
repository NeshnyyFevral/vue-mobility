<template>
  <div :class="$style.container">
    <span :class="$style.main">
      <slot name="main" />
    </span>
    <span :class="$style.after">
      <slot name="after" />
    </span>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';

import {
  TotalStatSize,
  TotalStatSizeAfterValue,
  TotalStatSizeMainValue,
  TotalStatTopValue,
  TotalStatVariant,
} from '@/model/totalStat';
import { useThemeStore } from '@/stores/theme';
import GlobalColors from '@/styles/colors';
import theme from '@/styles/theme';

const themeStore = useThemeStore();

const props = defineProps({
  monotone: {
    type: String,
    default: TotalStatVariant.UP,
    validator: (value) => Object.values(TotalStatVariant).includes(value),
  },
  size: {
    type: String,
    default: TotalStatSize.SMALL,
    validator: (value) => Object.values(TotalStatSize).includes(value),
  },
});

const MapMonotone = {
  [TotalStatVariant.UP]: GlobalColors.SUCCESS,
  [TotalStatVariant.DOWN]: GlobalColors.ERROR,
};

const MapSizeMain = {
  [TotalStatSize.SMALL]: TotalStatSizeMainValue.SMALL,
  [TotalStatSize.NORMAL]: TotalStatSizeMainValue.NORMAL,
  [TotalStatSize.LARGE]: TotalStatSizeMainValue.LARGE,
  [TotalStatSize.EXTRALARGE]: TotalStatSizeMainValue.EXTRALARGE,
};

const MapSizeAfter = {
  [TotalStatSize.SMALL]: TotalStatSizeAfterValue.SMALL,
  [TotalStatSize.NORMAL]: TotalStatSizeAfterValue.NORMAL,
  [TotalStatSize.LARGE]: TotalStatSizeAfterValue.LARGE,
  [TotalStatSize.EXTRALARGE]: TotalStatSizeAfterValue.EXTRALARGE,
};

const MapSizeTop = {
  [TotalStatSize.SMALL]: TotalStatTopValue.SMALL,
  [TotalStatSize.NORMAL]: TotalStatTopValue.NORMAL,
  [TotalStatSize.LARGE]: TotalStatTopValue.LARGE,
  [TotalStatSize.EXTRALARGE]: TotalStatTopValue.EXTRALARGE,
};

const afterColor = computed(() => MapMonotone[props.monotone]);
const sizeMain = computed(() => MapSizeMain[props.size]);
const sizeAfter = computed(() => MapSizeAfter[props.size]);
const top = computed(() => MapSizeTop[props.size]);
const color = computed(() => (themeStore.theme ? theme.DARK_TEXT : theme.LIGHT_TEXT));
</script>

<style module lang="scss">
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
  }

  .main {
    --stat-size: v-bind(sizeMain);
    --text-color: v-bind(color);

    margin-right: 5px;
    font-size: var(--stat-size);
    font-weight: 500;
    color: var(--text-color);
  }

  .after {
    --stat-color: v-bind(afterColor);
    --stat-size: v-bind(sizeAfter);
    --stat-top: v-bind(top);

    position: relative;
    top: var(--stat-top);
    font-size: var(--stat-size);
    font-weight: 500;
    color: var(--stat-color);
  }
</style>
