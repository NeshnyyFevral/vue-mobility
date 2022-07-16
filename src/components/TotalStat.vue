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

<script>
import { computed } from '@vue/reactivity';

import GlobalColors from '@/styles/colors';

export const MonotoneVariant = {
  UP: 'up',
  DOWN: 'down',
};
</script>

<script setup>
const props = defineProps({
  monotone: {
    type: String,
    default: MonotoneVariant.UP,
    validator: (value) => Object.values(MonotoneVariant).includes(value),
  },
});

const monotoneMap = {
  [MonotoneVariant.UP]: GlobalColors.SUCCESS,
  [MonotoneVariant.DOWN]: GlobalColors.ERROR,
};
const afterColor = computed(() => monotoneMap[props.monotone]);

</script>

<style module lang="scss">
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
  }

  .main {
    margin-right: 5px;
    font-size: 24px;
    font-weight: 500;
    color: #616161;
  }

  .after {
    --text-color: v-bind(afterColor);

    position: relative;
    top: -5px;
    font-size: 12px;
    font-weight: 500;
    color: var(--text-color);
  }
</style>
