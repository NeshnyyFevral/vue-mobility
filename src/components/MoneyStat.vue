<template>
  <div :class="$style.container">
    <span :class="$style.main">
      <slot name="main" />
    </span>
    <span :class="$style.icon">
      <slot name="icon" />
    </span>
    <span :class="$style.after">
      <slot name="after" />
    </span>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';

import GlobalColors from '@/styles/colors';

const MoneyStatSizeMainValue = {
  SMALL: '14px',
  NORMAL: '24px',
  LARGE: '30px',
  EXTRALARGE: '36px',
};

const MoneyStatSizeAfterValue = {
  SMALL: '11px',
  NORMAL: '14px',
  LARGE: '20px',
  EXTRALARGE: '24px',
};

const MoneyStatSizeIconValue = {
  SMALL: '20px',
  NORMAL: '20px',
  LARGE: '25px',
  EXTRALARGE: '30px',
};

const MoneyStatTopValue = {
  SMALL: '5px',
  NORMAL: '5px',
  LARGE: '6px',
  EXTRALARGE: '7px',
};

const MoneyStatLeftValue = {
  SMALL: '3px',
  NORMAL: '3px',
  LARGE: '4px',
  EXTRALARGE: '5px',
};

export const MoneyStatVariant = {
  UP: 'up',
  DOWN: 'down',
};

export const MoneyStatSize = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
  EXTRALARGE: 'extra large',
};
</script>

<script setup>
const props = defineProps({
  monotone: {
    type: String,
    default: MoneyStatVariant.UP,
    validator: (value) => Object.values(MoneyStatVariant).includes(value),
  },
  size: {
    type: String,
    default: MoneyStatSize.SMALL,
    validator: (value) => Object.values(MoneyStatSize).includes(value),
  },
});

const MapMonotone = {
  [MoneyStatVariant.UP]: GlobalColors.SUCCESS,
  [MoneyStatVariant.DOWN]: GlobalColors.ERROR,
};
const MapSizeMain = {
  [MoneyStatSize.SMALL]: MoneyStatSizeMainValue.SMALL,
  [MoneyStatSize.NORMAL]: MoneyStatSizeMainValue.NORMAL,
  [MoneyStatSize.LARGE]: MoneyStatSizeMainValue.LARGE,
  [MoneyStatSize.EXTRALARGE]: MoneyStatSizeMainValue.EXTRALARGE,
};

const MapSizeAfter = {
  [MoneyStatSize.SMALL]: MoneyStatSizeAfterValue.SMALL,
  [MoneyStatSize.NORMAL]: MoneyStatSizeAfterValue.NORMAL,
  [MoneyStatSize.LARGE]: MoneyStatSizeAfterValue.LARGE,
  [MoneyStatSize.EXTRALARGE]: MoneyStatSizeAfterValue.EXTRALARGE,
};

const MapSizeIcon = {
  [MoneyStatSize.SMALL]: MoneyStatSizeIconValue.SMALL,
  [MoneyStatSize.NORMAL]: MoneyStatSizeIconValue.NORMAL,
  [MoneyStatSize.LARGE]: MoneyStatSizeIconValue.LARGE,
  [MoneyStatSize.EXTRALARGE]: MoneyStatSizeIconValue.EXTRALARGE,
};

const MapSizeTop = {
  [MoneyStatSize.SMALL]: MoneyStatTopValue.SMALL,
  [MoneyStatSize.NORMAL]: MoneyStatTopValue.NORMAL,
  [MoneyStatSize.LARGE]: MoneyStatTopValue.LARGE,
  [MoneyStatSize.EXTRALARGE]: MoneyStatTopValue.EXTRALARGE,
};

const MapSizeLeft = {
  [MoneyStatSize.SMALL]: MoneyStatLeftValue.SMALL,
  [MoneyStatSize.NORMAL]: MoneyStatLeftValue.NORMAL,
  [MoneyStatSize.LARGE]: MoneyStatLeftValue.LARGE,
  [MoneyStatSize.EXTRALARGE]: MoneyStatLeftValue.EXTRALARGE,
};
const afterColor = computed(() => MapMonotone[props.monotone]);
const sizeMain = computed(() => MapSizeMain[props.size]);
const sizeAfter = computed(() => MapSizeAfter[props.size]);
const sizeIcon = computed(() => MapSizeIcon[props.size]);
const top = computed(() => MapSizeTop[props.size]);
const left = computed(() => MapSizeLeft[props.size]);

</script>

<style module lang="scss">
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
  }

  .main {
    --stat-size: v-bind(sizeMain);

    margin-right: 5px;
    font-size: var(--stat-size);
    font-weight: 500;
    line-height: var(--stat-size);
    color: #616161;
  }

  .after {
    --text-color: v-bind(afterColor);
    --stat-size: v-bind(sizeAfter);

    font-size: var(--stat-size);
    font-weight: 600;
    line-height: var(--stat-size);
    color: var(--text-color);
  }

  .icon {
    --icon-color: v-bind(afterColor);
    --size-top: v-bind(top);
    --size-left: v-bind(left);
    --icon-size: v-bind(sizeIcon);

    position: relative;
    top: var(--size-top);
    left: var(--size-left);
    width: var(--icon-size);
    height: var(--icon-size);
    fill: var(--icon-color);
  }
</style>
