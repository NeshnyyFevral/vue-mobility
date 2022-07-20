<template>
  <button :class="$style.button">
    <slot />
  </button>
</template>

<script>
import { computed } from '@vue/reactivity';

import GlobalColors from '@/styles/colors';

const ButtonSizeValue = {
  SMALL: '7px 15px',
  NORMAL: '10px 20px',
  LARGE: '13px 35px',
};

export const ButtonSize = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
};

export const ButtonVariant = {
  PRIMARY: 'primary',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
  DEFAULT: 'default',
  INFO: 'info',
};
</script>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: ButtonVariant.DEFAULT,
    validator: (value) => Object.values(ButtonVariant).includes(value),
  },
  size: {
    type: String,
    default: ButtonSize.NORMAL,
    validator: (value) => Object.values(ButtonSize).includes(value),
  },
});

const MapButtonVariant = {
  [ButtonVariant.ERROR]: GlobalColors.ERROR,
  [ButtonVariant.PRIMARY]: GlobalColors.PRIMARY,
  [ButtonVariant.WARNING]: GlobalColors.WARNING,
  [ButtonVariant.DEFAULT]: GlobalColors.DEFAULT,
  [ButtonVariant.SUCCESS]: GlobalColors.SUCCESS,
  [ButtonVariant.INFO]: GlobalColors.INFO,
};

const MapButtonSizes = {
  [ButtonSize.SMALL]: ButtonSizeValue.SMALL,
  [ButtonSize.NORMAL]: ButtonSizeValue.NORMAL,
  [ButtonSize.LARGE]: ButtonSizeValue.LARGE,
};

const color = computed(() => MapButtonVariant[props.variant]);
const size = computed(() => MapButtonSizes[props.size]);
</script>

<style module lang="scss">
  .button {
    --button-color: v-bind(color);
    --button-size: v-bind(size);

    display: block;
    padding: var(--button-size);
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    background-color: var(--button-color);
    border: none;
    border-radius: 5px;
    box-shadow: 0 4px 8px -4px var(--button-color);
    transition: box-shadow 0.25s linear, opacity 0.25s linear;

    &:hover {
      box-shadow: 0 6px 20px -8px  var(--button-color);
      opacity: 0.9;
    }
  }
</style>
