<template>
  <label
    :for="label"
    :class="[
      $style.container,
      disabled && $style.disabled,
    ]"
  >
    <input
      :id="label"
      :checked="value"
      :class="$style.input"
      :disabled="disabled"
      type="checkbox"
      @change="emits('changeValue', $event.target.checked)"
    >
    <span
      :class="[
        $style.text,
        toggle && $style.toggle,
      ]"
    >
      <CheckIcon
        v-if="!toggle"
        :class="$style.icon"
      />
      <span>
        <slot />
      </span>
    </span>
    <span :class="$style.cycle" />
  </label>
</template>

<script>
import { computed } from 'vue';

import appStorage from '@/appStorage';
import CheckIcon from '@/assets/icons/check-mark.svg';
import GlobalColors from '@/styles/colors';

export const CheckboxVariant = {
  PRIMARY: 'primary',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
  DEFAULT: 'default',
  INFO: 'info',
  DARK: 'dark',
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
  disabled: {
    type: Boolean,
    default: false,
  },
  toggle: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: CheckboxVariant.DEFAULT,
    validator: (value) => Object.values(CheckboxVariant).includes(value),
  },
});

const MapCheckboxVariant = {
  [CheckboxVariant.DEFAULT]: GlobalColors.DEFAULT,
  [CheckboxVariant.ERROR]: GlobalColors.ERROR,
  [CheckboxVariant.INFO]: GlobalColors.INFO,
  [CheckboxVariant.PRIMARY]: GlobalColors.PRIMARY,
  [CheckboxVariant.SUCCESS]: GlobalColors.SUCCESS,
  [CheckboxVariant.WARNING]: GlobalColors.WARNING,
  [CheckboxVariant.DARK]: '#2b2b2b',
};

const color = computed(() => MapCheckboxVariant[props.variant]);
const textColor = computed(() => {
  console.log(appStorage.get('colorTheme') ? '#fff' : GlobalColors.DEFAULT);
  return appStorage.get('colorTheme') ? '#fff' : GlobalColors.DEFAULT;
});
</script>

<style module lang="scss">
  .container {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .text {
    --checkbox-color: v-bind(textColor);

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

  .toggle {
    position: relative;

    &::before {
      display: inline-block;
      width: 38px;
      height: 14px;
      margin-right: 10px;
      content: '';
      background-color: var(--checkbox-color);
      border: 2.5px var(--checkbox-color) solid;
      border-radius: 10px;
      opacity: 0.4;
      transition: background-color 0.3s cubic-bezier(.25,.8,.5,1);
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
      transition: transform 0.3s cubic-bezier(.25,.8,.5,1),
        background-color 0.3s cubic-bezier(.25,.8,.5,1);
      transform: translateY(-50%);
    }
  }

  .cycle {
    --cycle-color: v-bind(GlobalColors.DEFAULT);

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

  .icon {
    display: none;
  }

  .input {
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked + .text::before {
      --checkbox-color: v-bind(color);

      background-color: var(--checkbox-color);
      border-color: var(--checkbox-color);
    }

    &:checked + .text .icon {
      position: absolute;
      top: 50%;
      left: 1.5px;
      display: block;
      width: 15px;
      height: 15px;
      fill: #fff;
      transform: translateY(-50%);
    }

    &:checked + .text + .cycle {
      --cycle-color: v-bind(color);

      background-color: var(--cycle-color);
    }

    &:checked + .toggle::before {
      background-color: var(--checkbox-color);
    }

    &:checked + .toggle::after {
      --checkbox-color: v-bind(color);

      background-color: var(--checkbox-color);
      transform: translate3d(18px, -50%, 0);
    }

    &:checked + .toggle + .cycle {
      background-color: var(--cycle-color);
      transform: translateX(18px);
    }
  }

  .disabled .input:checked + .text::before {
    background-color: var(--checkbox-color);
  }

  .disabled .input:checked + .toggle::before {
    background-color: var(--checkbox-color);
  }
</style>
