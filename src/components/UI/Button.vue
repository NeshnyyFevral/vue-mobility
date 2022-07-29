<template>
  <button
    :class="[
      $style.button,
      props.block && $style.buttonBlock,
      props.outlined && $style.buttonOutlined,
      props.unlimited && $style.buttonUnlimited
    ]"
    @click="rippleAnimation"
  >
    <slot />
  </button>
</template>

<script>
import { computed } from '@vue/reactivity';

import GlobalColors from '@/styles/colors';

const rippleDuration = '600ms';

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

const rippleAnimation = (event) => {
  const button = event.target;
  if (button.tagName !== 'BUTTON') return;
  const rippleItem = document.createElement('span');
  const radius = button.clientWidth / 2;

  rippleItem.style.width = `${button.clientWidth}px`;
  rippleItem.style.height = `${button.clientWidth}px`;

  rippleItem.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  rippleItem.style.top = `${event.clientY - button.offsetTop - radius}px`;

  if (button.classList.value.includes('buttonOutlined') || button.classList.value.includes('buttonUnlimited')) {
    rippleItem.classList.add('colorRipple');
  }
  rippleItem.classList.add('rippleItem');
  button.append(rippleItem);

  setTimeout(() => {
    rippleItem.remove();
  }, parseInt(rippleDuration, 10));
};
</script>

<style module lang="scss">
  .button {
    --button-color: v-bind(color);
    --button-size: v-bind(size);

    position: relative;
    z-index: 1000;
    padding: var(--button-size);
    overflow: hidden;
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
      background-color: none;
      opacity: 0;
      transition: opacity 0.2s linear;
    }

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
      background-color: var(--button-color);
    }

    &:hover::after {
      opacity: 0.15;
    }

    &:hover {
      box-shadow: none;
    }
  }

</style>

<style lang="scss">
  .rippleItem {
    --ripple-duration: v-bind(rippleDuration);

    position: absolute;
    z-index: 10;
    background-color: rgb(255 255 255 / 40%);
    border-radius: 50%;
    opacity: 1;
    transform: scale(0);
    animation: ripple var(--ripple-duration) linear;
  }

  .colorRipple {
    --ripple-color: v-bind(color);

    background-color: var(--ripple-color);
    opacity: 0.4;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(4);
    }
  }
</style>
