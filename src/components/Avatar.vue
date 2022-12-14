<template>
  <div :class="$style.container">
    <div :class="$style.avatar">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import {
  AvatarBorderRadiusValue,
  AvatarCorner,
  AvatarFontSizeValue,
  AvatarSize,
  AvatarSizeValue,
  AvatarTransparency,
  AvatarTransparencyFontColorValue,
  AvatarTransparencyValue,
  AvatarVariant,
} from '@/model/avatar';
import GlobalColors from '@/styles/colors';

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
  },
  transparency: {
    type: String,
    default: AvatarTransparency.DEFAULT,
    validator: (value) => Object.values(AvatarTransparency).includes(value),
  },
});

const MapAvatarVariant = {
  [AvatarVariant.ERROR]: GlobalColors.ERROR,
  [AvatarVariant.PRIMARY]: GlobalColors.PRIMARY,
  [AvatarVariant.WARNING]: GlobalColors.WARNING,
  [AvatarVariant.DEFAULT]: GlobalColors.DEFAULT,
  [AvatarVariant.SUCCESS]: GlobalColors.SUCCESS,
  [AvatarVariant.INFO]: GlobalColors.INFO,
};

const MapAvatarSize = {
  [AvatarSize.SMALL]: AvatarSizeValue.SMALL,
  [AvatarSize.NORMAL]: AvatarSizeValue.NORMAL,
  [AvatarSize.LARGE]: AvatarSizeValue.LARGE,
  [AvatarSize.EXTRALARGE]: AvatarSizeValue.EXTRALARGE,
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

const MapAvatarTransparency = {
  [AvatarTransparency.DEFAULT]: AvatarTransparencyValue.DEFAULT,
  [AvatarTransparency.LIGHT]: AvatarTransparencyValue.LIGHT,
};

const MapAvatarFontColor = {
  [AvatarTransparency.DEFAULT]: AvatarTransparencyFontColorValue.DEFAULT,
  [AvatarTransparency.LIGHT]: AvatarTransparencyFontColorValue.LIGHT,
};

const fontColor = computed(() => (
  MapAvatarFontColor[props.transparency]
    ? MapAvatarFontColor[props.transparency]
    : MapAvatarVariant[props.variant]
));
const color = computed(() => MapAvatarVariant[props.variant]);
const size = computed(() => MapAvatarSize[props.size]);
const fontSize = computed(() => MapAvatarFontSize[props.size]);
const borderRadius = computed(() => MapAvatarCorner[props.corner]);
const opacity = computed(() => MapAvatarTransparency[props.transparency]);
</script>

<style module lang="scss">
  .container {
    --avatar-color: v-bind(color);
    --avatar-size: v-bind(size);
    --avatar-font-size: v-bind(fontSize);
    --avatar-border-radius: v-bind(borderRadius);
    --avatar-opacity: v-bind(opacity);

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--avatar-size);
    height: var(--avatar-size);
    overflow: hidden;
    font-size: var(--avatar-font-size);
    font-weight: 400;
    text-transform: uppercase;
    background-size: contain;

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
      opacity: var(--avatar-opacity);
    }
  }

  .avatar {
    --avatar-font-color: v-bind(fontColor);

    position: relative;
    z-index: 1000;
    color: var(--avatar-font-color);
  }

  .avatar img {
    --avatar-border-radius: v-bind(borderRadius);

    display: block;
    width: 100%;
    border-radius: var(--avatar-border-radius);
  }
</style>
