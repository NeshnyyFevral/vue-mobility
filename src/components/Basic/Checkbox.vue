<template>
  <label
    :for="props.label"
    :class="[
      $style.container,
      props.disabled && $style.disabled
    ]"
  >
    <input
      :id="props.label"
      :checked="props.value"
      :class="$style.input"
      :disabled="props.disabled"
      type="checkbox"
      @change="emits('changeValue')"
    >
    <span :class="$style.text">
      <span v-if="props.value">{{ props.trueValue }}</span>
      <span v-else>{{ props.falseValue }}</span>
      <span v-if="props.toggle">
        {{ `${props.value.toString()}` }}
      </span>
      <span v-else>
        <slot />
      </span>
    </span>
    <span :class="$style.cycle" />
  </label>
</template>

<script>
import { computed } from 'vue';

import GlobalColors from '@/styles/colors';

export const checboxVariant = {
  PRIMARY: 'primary',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
  DEFAULT: 'default',
  INFO: 'info',
};
</script>

<script setup>
const emits = defineEmits(['changeValue']);

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  value: {
    type: Boolean,
    default: false,
  },
  toggle: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: checboxVariant.DEFAULT,
    validator: (value) => Object.values(checboxVariant).includes(value),
  },
  trueValue: {
    type: String,
    default: '',
  },
  falseValue: {
    type: String,
    default: '',
  },
});

const MapCheckboxVarian = {
  [checboxVariant.DEFAULT]: GlobalColors.DEFAULT,
  [checboxVariant.ERROR]: GlobalColors.ERROR,
  [checboxVariant.INFO]: GlobalColors.INFO,
  [checboxVariant.PRIMARY]: GlobalColors.PRIMARY,
  [checboxVariant.SUCCESS]: GlobalColors.SUCCESS,
  [checboxVariant.WARNING]: GlobalColors.WARNING,
};

const color = computed(() => MapCheckboxVarian[props.variant]);
</script>

<style module lang="scss">
  .container {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .text {
    --color-checkbox: v-bind(GlobalColors.DEFAULT);

    display: flex;
    align-items: center;
    font-size: 16px;
    color: var(--color-checkbox);

    &::before {
      z-index: 10;
      display: inline-block;
      width: 18px;
      height: 18px;
      padding: 0;
      margin-right: 10px;
      content: '';
      border: 2.5px var(--color-checkbox) solid;
      border-radius: 2px;
    }
  }

  .cycle {
    --color-checkbox: v-bind(GlobalColors.DEFAULT);

    position: absolute;
    top: -11px;
    left: -11px;
    z-index: 100;
    width: 40px;
    height: 40px;
    content: '';
    background-color: var(--color-checkbox);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.2s linear;

    &:hover {
      opacity: 0.1;
    }
  }

  .disabled {
    cursor: auto;
    opacity: 0.7;

    & .cycle {
      display: none;
    }
  }

  .input {
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked + .text::before {
      --color-checkbox: v-bind(color);

      background-color: var(--color-checkbox);
      background-image: url('@/assets/icons/check-mark.svg');
      background-repeat: no-repeat;
      background-size: cover;
      border-color: var(--color-checkbox);
    }

    &:checked + .text + .cycle {
      --color-checkbox: v-bind(color);

      background-color: var(--color-checkbox);
    }
  }

  .disabled .input:checked + .text::before {
    --color-checkbox: v-bind(GlobalColors.DEFAULT);

    background-color: var(--color-checkbox);
  }
</style>
