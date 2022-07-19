<template>
  <div :class="$style.container">
    <div :class="$style.avatar">
      <slot />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';

import GlobalColors from '@/styles/colors';

const AvatarPaddingValue = {
  SMALL: '5px',
  NORMAL: '10px',
  LARGE: '15px',
  EXTRALARGE: '20px',
}; // сделать норм круг

const AvatarFontSizeValue = {
  SMALL: '11px',
  NORMAL: '14px',
  LARGE: '24px',
  EXTRALARGE: '36px',
};

const AvatarBorderRadiusValue = {
  DEFAULT: '50%',
  ROUNTED: '4px',
  RECTANGLE: '0px',
};

export const AvatarSize = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
  EXTRALARGE: 'extra large',
};

export const AvatarVariant = {
  PRIMARY: 'primary',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
  DEFAULT: 'default',
  INFO: 'info',
};

export const AvatarCorner = {
  DEFAULT: 'default',
  ROUNTED: 'rounted',
  RECTANGLE: 'rectangle',
};
</script>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: AvatarVariant.DEFAULT,
    validator: (value) => Object.values(AvatarVariant).includes(value),
  },
  size: {
    type: String,
    default: AvatarSize.NORMAL,
    validator: (value) => Object.values(AvatarSize).includes(value),
  },
  corner: {
    type: String,
    default: AvatarCorner.DEFAULT,
    validator: (value) => Object.values(AvatarCorner).includes(value),
  }, // добавить light версию
});

const MapAvatarVariant = {
  [AvatarVariant.ERROR]: GlobalColors.ERROR,
  [AvatarVariant.PRIMARY]: GlobalColors.PRIMARY,
  [AvatarVariant.WARNING]: GlobalColors.WARNING,
  [AvatarVariant.DEFAULT]: GlobalColors.DEFAULT,
  [AvatarVariant.SUCCESS]: GlobalColors.SUCCESS,
  [AvatarVariant.INFO]: GlobalColors.INFO,
};

const MapAvatarPadding = {
  [AvatarSize.SMALL]: AvatarPaddingValue.SMALL,
  [AvatarSize.NORMAL]: AvatarPaddingValue.NORMAL,
  [AvatarSize.LARGE]: AvatarPaddingValue.LARGE,
  [AvatarSize.EXTRALARGE]: AvatarPaddingValue.EXTRALARGE,
};

const MapAvatarFontSize = {
  [AvatarSize.SMALL]: AvatarFontSizeValue.SMALL,
  [AvatarSize.NORMAL]: AvatarFontSizeValue.NORMAL,
  [AvatarSize.LARGE]: AvatarFontSizeValue.LARGE,
  [AvatarSize.EXTRALARGE]: AvatarFontSizeValue.EXTRALARGE,
};

const MapAvatarCorner = {
  [AvatarCorner.DEFAULT]: AvatarBorderRadiusValue.DEFAULT,
  [AvatarCorner.ROUNTED]: AvatarBorderRadiusValue.ROUNTED,
  [AvatarCorner.RECTANGLE]: AvatarBorderRadiusValue.RECTANGLE,
};

const color = computed(() => MapAvatarVariant[props.variant]);
const padding = computed(() => MapAvatarPadding[props.size]);
const fontSize = computed(() => MapAvatarFontSize[props.size]);
const borderRadius = computed(() => MapAvatarCorner[props.corner]);
</script>

<style module lang="scss">
  .container {
    --avatar-color: v-bind(color);
    --avatar-size: v-bind(padding);
    --avatar-font-size: v-bind(fontSize);
    --avatar-border-radius: v-bind(borderRadius);

    position: relative;
    padding: var(--avatar-size);
    font-size: var(--avatar-font-size);
    font-weight: 600;
    color: var(--avatar-color);
    text-transform: uppercase;

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
      content: "";
      background-color: var(--avatar-color);
      border-radius: var(--avatar-border-radius);
    }
  }

  .avatar {
    position: relative;
    z-index: 1000;
    color: #fff;
  }
</style>
