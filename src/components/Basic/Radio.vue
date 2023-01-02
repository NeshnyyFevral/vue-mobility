<template>
  <label
    :for="label"
    :class="$style.container"
  >
    <input
      :id="label"
      :class="$style.input"
      :name="props.name"
      type="radio"
      :checked="checked"
    >
    <span :class="$style.text">
      <span v-if="userSlot">
        <slot />
      </span>
      <span v-else>{{ value }}</span>
    </span>
    <span :class="$style.cycle" />
  </label>
</template>

<script>
import { computed } from 'vue';

import { useThemeStore } from '@/stores/theme';
import GlobalColors from '@/styles/colors';
import theme from '@/styles/theme';

export const RadioVariant = {
  PRIMARY: 'primary',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
  DEFAULT: 'default',
  INFO: 'info',
};
</script>

<script setup>
const themeStore = useThemeStore();
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  userSlot: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: RadioVariant.DEFAULT,
    validator: (value) => Object.values(RadioVariant).includes(value),
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

const MapRadioVarian = {
  [RadioVariant.DEFAULT]: GlobalColors.DEFAULT,
  [RadioVariant.ERROR]: GlobalColors.ERROR,
  [RadioVariant.INFO]: GlobalColors.INFO,
  [RadioVariant.PRIMARY]: GlobalColors.PRIMARY,
  [RadioVariant.SUCCESS]: GlobalColors.SUCCESS,
  [RadioVariant.WARNING]: GlobalColors.WARNING,
};

const color = computed(() => MapRadioVarian[props.variant]);
const textColor = computed(() => (themeStore.theme ? theme.DARK_TEXT : theme.LIGHT_TEXT));
const cycleColor = computed(() => (themeStore.theme ? theme.LIGHT_TEXT : theme.DARK_TEXT));
</script>

<style module lang="scss">
  .container {
    --radio-color: v-bind(color);
    --text-color: v-bind(textColor);

    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .text {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: var(--text-color);

    &::before {
      display: inline-block;
      width: 18px;
      height: 18px;
      padding: 0;
      margin-right: 10px;
      content: '';
      border: 2px var(--text-color) solid;
      border-radius: 50%;
    }

    &::after {
      position: absolute;
      top: 50%;
      left: 0;
      z-index: 10;
      display: inline-block;
      width: 11px;
      height: 11px;
      padding: 0;
      content: '';
      border: 2px var(--radio-color) solid;
      border-radius: 50%;
      opacity: 0;
      transform: translate3d(33%, -50%, 0);
    }
  }

  .cycle {
    --cycle-color: v-bind(cycleColor);

    position: absolute;
    top: -11px;
    left: -11px;
    z-index: 100;
    width: 40px;
    height: 40px;
    content: '';
    background-color: var(--cycle-color);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.2s linear;

    &:hover {
      opacity: 0.1;
    }
  }

  .input {
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked + .text {
      &::before {
        border-color: var(--radio-color);
      }

      &::after {
        background-color: var(--radio-color);
        border-color: var(--radio-color);
        opacity: 1;
      }
    }

    &:checked + .text + .cycle {
      background-color: var(--radio-color);
    }
  }
</style>
