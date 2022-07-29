<template>
  <component
    :is="props.multiline"
    :placeholder="props.placeholder"
    :type="props.type"
    :class="$style.input"
  />
</template>

<script>
import { computed } from '@vue/reactivity';

import GlobalColors from '@/styles/colors';

const InputSizeValue = {
  SMALL: '40px',
  NORMAL: '52px',
  LARGE: '56px',
};

const InputRadiusValue = {
  DEFAULT: '5px',
  ROUNTED: '28px',
  RECTANGLE: '0px',
};

export const InputSize = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
};

export const InputRadius = {
  DEFAULT: 'dafault',
  ROUNTED: 'rounted',
  RECTANGLE: 'rectangle',
};
</script>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: InputSize.NORMAL,
    validator: (value) => Object.values(InputSize).includes(value),
  },
  radius: {
    type: String,
    default: InputRadius.DEFAULT,
    validator: (value) => Object.values(InputRadius).includes(value),
  },
  multiline: {
    type: String,
    default: 'text',
  },
});

const MapInputSize = {
  [InputSize.SMALL]: InputSizeValue.SMALL,
  [InputSize.NORMAL]: InputSizeValue.NORMAL,
  [InputSize.LARGE]: InputSizeValue.LARGE,
};

const MapInputRadius = {
  [InputRadius.DEFAULT]: InputRadiusValue.DEFAULT,
  [InputRadius.ROUNTED]: InputRadiusValue.ROUNTED,
  [InputRadius.RECTANGLE]: InputRadiusValue.RECTANGLE,
};

const size = computed(() => MapInputSize[props.size]);
const radius = computed(() => MapInputRadius[props.radius]);
</script>

<style module lang="scss">
  .input {
    --input-size: v-bind(size);
    --input-color: v-bind(GlobalColors.PRIMARY);
    --input-radius: v-bind(radius);

    display: block;
    min-width: 100%;
    min-height: var(--input-size);
    padding: 10px 12px;
    font-size: 14px;
    font-weight: 400;
    color: #616161;
    background-color: transparent;
    border: 1px solid rgb(94 86 105 / 28%);
    border-radius: var(--input-radius);

    &:focus {
      outline-color: var(--input-color);
      caret-color: var(--input-color);
    }
  }
</style>
