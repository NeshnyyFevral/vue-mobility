<template>
  <input
    :placeholder="props.placeholder"
    :type="props.type"
    :class="$style.input"
  >
</template>

<script>
import { computed } from '@vue/reactivity';

import GlobalColors from '@/styles/colors';

const InputHeightValue = {
  SMALL: '40px',
  NORMAL: '52px',
  LARGE: '56px',
};

const InputWidthValue = {
  SMALL: '56px',
  NORMAL: '170px',
  LARGE: '300px',
  BLOCK: '100%',
};

const InputCornerValue = {
  DEFAULT: '5px',
  ROUNTED: '28px',
  RECTANGLE: '0px',
};

export const InputHeight = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
};

export const InputWidth = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
  BLOCK: 'block',
};

export const InputCorner = {
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
  height: {
    type: String,
    default: InputHeight.NORMAL,
    validator: (value) => Object.values(InputHeight).includes(value),
  },
  width: {
    type: String,
    default: InputWidth.NORMAL,
    validator: (value) => Object.values(InputWidth).includes(value),
  },
  corner: {
    type: String,
    default: InputCorner.DEFAULT,
    validator: (value) => Object.values(InputCorner).includes(value),
  },
});

const MapInputHeight = {
  [InputHeight.SMALL]: InputHeightValue.SMALL,
  [InputHeight.NORMAL]: InputHeightValue.NORMAL,
  [InputHeight.LARGE]: InputHeightValue.LARGE,
};

const MapInputWidth = {
  [InputWidth.SMALL]: InputWidthValue.SMALL,
  [InputWidth.NORMAL]: InputWidthValue.NORMAL,
  [InputWidth.LARGE]: InputWidthValue.LARGE,
  [InputWidth.BLOCK]: InputWidthValue.BLOCK,
};

const MapInputCorner = {
  [InputCorner.DEFAULT]: InputCornerValue.DEFAULT,
  [InputCorner.ROUNTED]: InputCornerValue.ROUNTED,
  [InputCorner.RECTANGLE]: InputCornerValue.RECTANGLE,
};

const height = computed(() => MapInputHeight[props.height]);
const width = computed(() => MapInputWidth[props.width]);
const borderRadius = computed(() => MapInputCorner[props.corner]);
</script>

<style module lang="scss">
  .input {
    --input-height: v-bind(height);
    --input-width: v-bind(width);
    --input-color: v-bind(GlobalColors.PRIMARY);
    --input-border-radius: v-bind(borderRadius);

    display: block;
    width: var(--input-width);
    min-height: var(--input-height);
    padding: 10px 12px;
    font-size: 14px;
    font-weight: 400;
    color: #616161;
    background-color: transparent;
    border: 1px solid rgb(94 86 105 / 28%);
    border-radius: var(--input-border-radius);

    &:focus {
      outline-color: var(--input-color);
      caret-color: var(--input-color);
    }
  }
</style>
