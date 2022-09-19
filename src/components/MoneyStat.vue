<template>
  <div :class="$style.container">
    <span :class="$style.main">
      <slot name="main" />
    </span>
    <span :class="$style.after">
      <span :class="$style.icon">
        <slot name="icon" />
      </span>
      <span :class="$style.afterText">
        <slot name="after" />
      </span>
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
  EXTRA_LARGE: '36px',
};

const MoneyStatSizeAfterValue = {
  SMALL: '11px',
  NORMAL: '14px',
  LARGE: '20px',
  EXTRA_LARGE: '24px',
};

const MoneyStatSizeIconValue = {
  SMALL: '20px',
  NORMAL: '20px',
  LARGE: '25px',
  EXTRA_LARGE: '30px',
};

const MoneyStatTopValue = {
  SMALL: '5px',
  NORMAL: '5px',
  LARGE: '6px',
  EXTRA_LARGE: '7px',
};

const MoneyStatLeftValue = {
  SMALL: '3px',
  NORMAL: '3px',
  LARGE: '4px',
  EXTRA_LARGE: '5px',
};

export const MoneyStatVariant = {
  UP: 'up',
  DOWN: 'down',
};

export const MoneyStatSize = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
  EXTRA_LARGE: 'extralarge',
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
  [MoneyStatSize.EXTRA_LARGE]: MoneyStatSizeMainValue.EXTRA_LARGE,
};

const MapSizeAfter = {
  [MoneyStatSize.SMALL]: MoneyStatSizeAfterValue.SMALL,
  [MoneyStatSize.NORMAL]: MoneyStatSizeAfterValue.NORMAL,
  [MoneyStatSize.LARGE]: MoneyStatSizeAfterValue.LARGE,
  [MoneyStatSize.EXTRA_LARGE]: MoneyStatSizeAfterValue.EXTRA_LARGE,
};

const MapSizeIcon = {
  [MoneyStatSize.SMALL]: MoneyStatSizeIconValue.SMALL,
  [MoneyStatSize.NORMAL]: MoneyStatSizeIconValue.NORMAL,
  [MoneyStatSize.LARGE]: MoneyStatSizeIconValue.LARGE,
  [MoneyStatSize.EXTRA_LARGE]: MoneyStatSizeIconValue.EXTRA_LARGE,
};

const MapSizeTop = {
  [MoneyStatSize.SMALL]: MoneyStatTopValue.SMALL,
  [MoneyStatSize.NORMAL]: MoneyStatTopValue.NORMAL,
  [MoneyStatSize.LARGE]: MoneyStatTopValue.LARGE,
  [MoneyStatSize.EXTRA_LARGE]: MoneyStatTopValue.EXTRA_LARGE,
};

const MapSizeLeft = {
  [MoneyStatSize.SMALL]: MoneyStatLeftValue.SMALL,
  [MoneyStatSize.NORMAL]: MoneyStatLeftValue.NORMAL,
  [MoneyStatSize.LARGE]: MoneyStatLeftValue.LARGE,
  [MoneyStatSize.EXTRA_LARGE]: MoneyStatLeftValue.EXTRA_LARGE,
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
    display: flex;
    align-items: flex-end;
  }

  .afterText {
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
