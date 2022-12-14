<template>
  <button
    :class="[
      $style.button,
      block && $style.block,
      outlined && $style.outlined,
      unlimited && $style.unlimited
    ]"
    @click="onClick"
  >
    <slot />
    <Ripple :items="items" />
  </button>
</template>

<script setup>
import { computed } from '@vue/reactivity';

import Ripple from '@/components/Ripple.vue';
import { useRipple } from '@/hooks/useRipple';
import {
  ButtonSize,
  ButtonSizeValue,
  ButtonVariant,
} from '@/model/button';
import GlobalColors from '@/styles/colors';

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

const {
  add,
  items,
} = useRipple();

const onClick = (event) => {
  const button = event.target;
  const left = event.pageX - button.offsetLeft - 15;
  const top = event.pageY - button.offsetTop - 15;

  const rippleColor = getComputedStyle(button).color;
  add(top, left, rippleColor);
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

  .block {
    min-width: 100%;
    text-align: center;
  }

  .outlined {
    color: var(--button-color);
    border: 1px solid var(--button-color);
  }

  .unlimited {
    color: var(--button-color);
  }

  .outlined,
  .unlimited {
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
