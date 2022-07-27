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

const ButtonExtensionValue = {
  DEFAULT: 'auto',
  BLOCK: '100%',
};

const ButtonBorderValue = {
  DEFAULT: 'none',
  OUTLINED: '1px solid',
  UNLIMITED: 'none',
};

const ButtonFontColorValue = {
  DEFAULT: '#fff',
  OUTLINED: false,
  UNLIMITED: false,
};

const ButtonBGValue = {
  DEFAULT: false,
  OUTLINED: 'transparent',
  UNLIMITED: 'transparent',
};

const ButtonShadowValue = {
  DEFAULT: false,
  OUTLINED: 'none',
  UNLIMITED: 'none',
};

const ButtonAfterValue = {
  DEFAULT: 'none',
  OUTLINED: 'block',
  UNLIMITED: 'block',
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

export const ButtonExtension = {
  DEFAULT: 'default',
  BLOCK: 'block',
};

export const ButtonBorder = {
  DEFAULT: 'default',
  OUTLINED: 'outlined',
  UNLIMITED: 'unlimited',
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
  extension: {
    type: String,
    default: ButtonExtension.DEFAULT,
    validator: (value) => Object.values(ButtonExtension).includes(value),
  },
  border: {
    type: String,
    default: ButtonBorder.DEFAULT,
    validator: (value) => Object.values(ButtonBorder).includes(value),
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

const MapButtonExtension = {
  [ButtonExtension.DEFAULT]: ButtonExtensionValue.DEFAULT,
  [ButtonExtension.BLOCK]: ButtonExtensionValue.BLOCK,
};

const MapButtonBorder = {
  [ButtonBorder.DEFAULT]: ButtonBorderValue.DEFAULT,
  [ButtonBorder.OUTLINED]: ButtonBorderValue.OUTLINED,
  [ButtonBorder.UNLIMITED]: ButtonBorderValue.UNLIMITED,
};

const MapButtonFontColor = {
  [ButtonBorder.DEFAULT]: ButtonFontColorValue.DEFAULT,
  [ButtonBorder.OUTLINED]: ButtonFontColorValue.OUTLINED,
  [ButtonBorder.UNLIMITED]: ButtonFontColorValue.UNLIMITED,
};

const MapButtonBG = {
  [ButtonBorder.DEFAULT]: ButtonBGValue.DEFAULT,
  [ButtonBorder.OUTLINED]: ButtonBGValue.OUTLINED,
  [ButtonBorder.UNLIMITED]: ButtonBGValue.UNLIMITED,
};

const MapButtonShadow = {
  [ButtonBorder.DEFAULT]: ButtonShadowValue.DEFAULT,
  [ButtonBorder.OUTLINED]: ButtonShadowValue.OUTLINED,
  [ButtonBorder.UNLIMITED]: ButtonShadowValue.UNLIMITED,
};

const MapButtonAfter = {
  [ButtonBorder.DEFAULT]: ButtonAfterValue.DEFAULT,
  [ButtonBorder.OUTLINED]: ButtonAfterValue.OUTLINED,
  [ButtonBorder.UNLIMITED]: ButtonAfterValue.UNLIMITED,
};

const color = computed(() => MapButtonVariant[props.variant]);
const size = computed(() => MapButtonSizes[props.size]);
const width = computed(() => MapButtonExtension[props.extension]);
const border = computed(() => MapButtonBorder[props.border]);
const after = computed(() => MapButtonAfter[props.border]);
const fontColor = computed(() => (
  MapButtonFontColor[props.border]
    ? MapButtonFontColor[props.border]
    : MapButtonVariant[props.variant]
));
const background = computed(() => (
  MapButtonBG[props.border]
    ? MapButtonBG[props.border]
    : MapButtonVariant[props.variant]
));
const shadow = computed(() => (
  MapButtonShadow[props.border]
    ? MapButtonShadow[props.border]
    : MapButtonVariant[props.variant]
));
</script>

<style module lang="scss">
  .button {
    --button-color: v-bind(color);
    --button-size: v-bind(size);
    --button-width: v-bind(width);
    --button-border: v-bind(border);
    --button-font-color: v-bind(fontColor);
    --button-background: v-bind(background);
    --button-shadow: v-bind(shadow);

    position: relative;
    z-index: 1000;
    display: block;
    min-width: var(--button-width);
    padding: var(--button-size);
    font-weight: 600;
    color: var(--button-font-color);
    text-transform: uppercase;
    cursor: pointer;
    background-color: var(--button-background);
    border: var(--button-border);
    border-color: var(--button-color);
    border-radius: 5px;
    box-shadow: 0 4px 8px -4px var(--button-shadow);
    transition: box-shadow 0.25s linear, opacity 0.25s linear;

    &:hover {
      box-shadow: 0 6px 20px -8px var(--button-shadow);
      opacity: 0.9;
    }

    &::after {
      --button-color: v-bind(color);
      --button-after: v-bind(after);

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 100;
      display: var(--button-after);
      content: '';
      background-color: var(--button-color);
      opacity: 0;
      transition: opacity 0.2s linear;
    }

    &:hover::after {
      opacity: 0.15;
    }
  }
</style>
