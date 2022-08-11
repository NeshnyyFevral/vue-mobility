<template>
  <label
    :for="props.label"
    :class="$style.container"
  >
    <input
      :id="props.label"
      :class="$style.input"
      :name="props.name"
      type="radio"
      :checked="props.checked"
    >
    <span :class="$style.text">
      <span
        v-if="props.userSlot"
        :id="props.label"
      >
        <slot />
      </span>
      <span
        v-else
        :id="props.label"
      >{{ props.value }}</span>
    </span>
    <span :class="$style.cycle" />
  </label>
</template>

<script>
import { computed } from 'vue';

import GlobalColors from '@/styles/colors';

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
</script>

<style module lang="scss">
  .container {
    --radio-color: v-bind(color);

    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .text {
    --radio-color: v-bind(GlobalColors.DEFAULT);

    position: relative;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: var(--radio-color);

    &::before {
      display: inline-block;
      width: 18px;
      height: 18px;
      padding: 0;
      margin-right: 10px;
      content: '';
      border: 2px var(--radio-color) solid;
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
    --radio-color: v-bind(GlobalColors.DEFAULT);

    position: absolute;
    top: -11px;
    left: -11px;
    z-index: 100;
    width: 40px;
    height: 40px;
    content: '';
    background-color: var(--radio-color);
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

    &:checked + .text::before {
      --radio-color: v-bind(color);

      border-color: var(--radio-color);
    }

    &:checked + .text::after {
      --radio-color: v-bind(color);

      background-color: var(--radio-color);
      border-color: var(--radio-color);
      opacity: 1;
    }

    &:checked + .text + .cycle {
      --radio-color: v-bind(color);

      background-color: var(--radio-color);
    }
  }
</style>
