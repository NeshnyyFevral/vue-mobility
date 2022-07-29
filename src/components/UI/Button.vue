<template>
  <button
    :class="[$style.button,
             props.block && $style.buttonBlock,
             props.outlined && $style.buttonOutlined,
             props.unlimited && $style.buttonUnlimited]"
  >
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
  block: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  unlimited: {
    type: Boolean,
    default: false,
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

    position: relative;
    z-index: 1000;
    padding: var(--button-size);
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    background-color: var(--button-color);
    border: none;
    border-color: var(--button-color);
    border-radius: 5px;
    box-shadow: 0 4px 8px -4px var(--button-color);
    transition: box-shadow 0.25s linear, opacity 0.25s linear;

    &:hover {
      box-shadow: 0 6px 20px -8px var(--button-color);
      opacity: 0.9;
    }
  }

  .buttonBlock {
    min-width: 100%;
    text-align: center;
  }

  .buttonOutlined {
    --button-color: v-bind(color);

    color: var(--button-color);
    border: 1px solid var(--button-color);
  }

  .buttonUnlimited {
    --button-color: v-bind(color);

    color: var(--button-color);
  }

  .buttonOutlined,
  .buttonUnlimited {
    background-color: transparent;
    box-shadow: none;

    &::after {
      --button-color: v-bind(color);

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 100;
      display: block;
      content: '';
      background-color: var(--button-color);
      opacity: 0;
      transition: opacity 0.2s linear;
    }

    &:hover::after {
      opacity: 0.15;
    }

    &:hover {
      box-shadow: none;
    }
  }
</style>
