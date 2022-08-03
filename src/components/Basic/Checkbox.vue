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
    <span
      :class="[
        $style.text,
        props.switch && $style.switch
      ]"
    >
      <span v-if="props.toggle">
        {{ `${props.value.toString()}` }}
      </span>
      <span v-else>
        <slot />
      </span>
      <span v-if="props.value">{{ props.trueValue }}</span>
      <span v-else>{{ props.falseValue }}</span>
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
  switch: {
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
    --checkbox-color: v-bind(GlobalColors.DEFAULT);

    display: flex;
    align-items: center;
    font-size: 16px;
    color: var(--checkbox-color);

    &::before {
      display: inline-block;
      width: 18px;
      height: 18px;
      margin-right: 10px;
      content: '';
      border: 2.5px var(--checkbox-color) solid;
      border-radius: 2px;
    }
  }

  .switch {
    position: relative;

    &::before {
      --switch-color: v-bind(GlobalColors.DEFAULT);

      display: inline-block;
      width: 38px;
      height: 14px;
      margin-right: 10px;
      content: '';
      background-color: var(--switch-color);
      border: 2.5px var(--switch-color) solid;
      border-radius: 10px;
      opacity: 0.4;
    }

    &::after {
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      width: 20px;
      height: 20px;
      content: '';
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 1px 3px 0 rgb(94 86 105 / 20%),
        0 2px 1px -1px rgb(94 86 105 / 12%),
        0 1px 1px 0 rgb(94 86 105 / 14%);
      transition: transform 0.3s cubic-bezier(.25,.8,.5,1);
      transform: translateY(-50%);
    }
  }

  .cycle {
    --checkbox-color: v-bind(GlobalColors.DEFAULT);

    position: absolute;
    top: -11px;
    left: -11px;
    z-index: 100;
    width: 40px;
    height: 40px;
    content: '';
    background-color: var(--checkbox-color);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.2s linear, transform 0.3s cubic-bezier(.25,.8,.5,1);

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
      --checkbox-color: v-bind(color);

      background-color: var(--checkbox-color);
      background-image: url('@/assets/icons/check-mark.svg');
      background-repeat: no-repeat;
      background-size: cover;
      border-color: var(--checkbox-color);
    }

    &:checked + .text + .cycle {
      --checkbox-color: v-bind(color);

      background-color: var(--checkbox-color);
    }

    &:checked + .switch::before {
      --checkbox-color: v-bind(color);

      background-color: var(--checkbox-color);
      background-image: none;
    }

    &:checked + .switch::after {
      --checkbox-color: v-bind(color);

      background-color: var(--checkbox-color);
      transform: translate3d(18px, -50%, 0);
    }

    &:checked + .switch + .cycle {
      --checkbox-color: v-bind(color);

      background-color: var(--checkbox-color);
      transform: translateX(18px);
    }
  }

  .disabled .input:checked + .text::before {
    --checkbox-color: v-bind(GlobalColors.DEFAULT);

    background-color: var(--checkbox-color);
  }

  .disabled .input:checked + .switch::before {
    --switch-color: v-bind(color);

    background-color: var(--switch-color);
  }
</style>
