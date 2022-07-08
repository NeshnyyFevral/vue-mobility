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

<script setup>
import { computed } from '@vue/reactivity';

import { MonotoneVariant } from '@/enums/Stat';
import GlobalColors from '@/styles/colors';

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
.container{
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}
.main{
  color: #616161;
  font-size: 20px;
  font-weight: 500;
  margin-right: 5px;
}
.after{
  --text-color: v-bind(afterColor);
  color: var(--text-color);
  font-size: 12px;
  font-weight: 600;
}

.icon{
  --icon-color: v-bind(afterColor);
  fill: var(--icon-color);
}
</style>
