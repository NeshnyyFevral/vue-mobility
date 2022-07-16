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

import { MonotoneVariant } from '@/components/TotalStat.vue';
import GlobalColors from '@/styles/colors';
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
    font-size: 20px;
    font-weight: 500;
    color: #616161;
  }

  .after {
    --text-color: v-bind(afterColor);

    font-size: 12px;
    font-weight: 600;
    color: var(--text-color);
  }

  .icon {
    --icon-color: v-bind(afterColor);

    fill: var(--icon-color);
  }
</style>
