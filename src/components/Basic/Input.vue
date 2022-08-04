<template>
  <label
    :for="label"
    :class="[
      $style.container,
      outlined && $style.outlined,
      solo && $style.solo,
      disabled && $style.disabled,
      readonly && $style.readonly,
    ]"
  >
    <component
      :is="multiline"
      :id="label"
      :class="[
        $style.input,
        dirty && $style.dirty,
        shaped && $style.shaped
      ]"
      :disabled="disabled"
      :readonly="readonly"
      :value="value"
      @input="checkValue"
    />
    <div
      :id="label"
      :class="$style.desc"
    >
      {{ placeholder }}
    </div>
    <div :class="$style.line" />
  </label>
</template>

<script>
import { computed, onMounted, ref } from 'vue';

import GlobalColors from '@/styles/colors';

const InputSizeValue = {
  SMALL: '40px',
  NORMAL: '48px',
  LARGE: '56px',
};

const InputRadiusValue = {
  DEFAULT: '5px',
  ROUNTED: '28px',
  RECTANGLE: '0px',
};

export const InputSize = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
};

export const InputRadius = {
  DEFAULT: 'dafault',
  ROUNTED: 'rounted',
  RECTANGLE: 'rectangle',
};
</script>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: InputSize.NORMAL,
    validator: (value) => Object.values(InputSize).includes(value),
  },
  radius: {
    type: String,
    default: InputRadius.DEFAULT,
    validator: (value) => Object.values(InputRadius).includes(value),
  },
  multiline: {
    type: String,
    default: 'input',
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  shaped: {
    type: Boolean,
    default: false,
  },
  solo: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});

const MapInputSize = {
  [InputSize.SMALL]: InputSizeValue.SMALL,
  [InputSize.NORMAL]: InputSizeValue.NORMAL,
  [InputSize.LARGE]: InputSizeValue.LARGE,
};

const MapInputRadius = {
  [InputRadius.DEFAULT]: InputRadiusValue.DEFAULT,
  [InputRadius.ROUNTED]: InputRadiusValue.ROUNTED,
  [InputRadius.RECTANGLE]: InputRadiusValue.RECTANGLE,
};

const size = computed(() => MapInputSize[props.size]);
const radius = computed(() => MapInputRadius[props.radius]);

const dirty = ref(false);

onMounted(() => { dirty.value = !!props.value; });

const checkValue = (event) => { dirty.value = !!event.target.value; };
</script>

<style module lang="scss">
  .container {
    position: relative;
    width: 100%;
    cursor: text;
  }

  .disabled {
    pointer-events: none;
    user-select: none;
    opacity: 0.6;
  }

  .input {
    --input-size: v-bind(size);
    --input-color: v-bind(GlobalColors.PRIMARY);
    --input-radius: v-bind(radius);

    display: block;
    min-width: 100%;
    min-height: var(--input-size);
    padding: 10px 0;
    font-size: 14px;
    font-weight: 400;
    color: #616161;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid rgb(94 86 105 / 28%);
    border-radius: var(--input-radius);
    outline: none;

    &:focus {
      outline-color: var(--input-color);
      caret-color: var(--input-color);
    }
  }

  .disabled .input {
    border-bottom: 1px dashed rgb(97 97 97);
  }

  .outlined::after {
    display: none;
  }

  .outlined .input {
    padding: 10px 12px;
    border: 1px solid rgb(94 86 105 / 28%);
  }

  .solo .input {
    box-shadow: 0 1px 3px 0 rgb(94 86 105 / 20%),
      0 3px 1px -2px rgb(94 86 105 / 12%),
      0 2px 2px 0 rgb(94 86 105 / 14%);
  }

  .outlined .shaped {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .outlined .input:focus {
    outline: var(--input-color) solid 1px;
  }

  .solo .input:focus {
    outline: none;
    caret-color: auto;
  }

  .desc {
    --desc-color: v-bind(GlobalColors.DEFAULT);

    position: absolute;
    top: 50%;
    left: 0;
    font-size: 16px;
    font-weight: 400;
    color: var(--desc-color);
    pointer-events: none;
    background-color: #fff;
    transition: transform 0.3s cubic-bezier(.25,.8,.5,1),
      scale 0.3s cubic-bezier(.25,.8,.5,1),
      top 0.3s cubic-bezier(.25,.8,.5,1),
      color 0.3s cubic-bezier(.25,.8,.5,1);
    transform: translateY(-50%);
    transform-origin: top left;
  }

  .outlined .desc {
    left: 12px;
  }

  .dirty + .desc {
    top: 0;
    color: #616161;
    transform: translateY(-40%) scale(0.75);
  }

  .input:focus + .desc {
    --desc-color: v-bind(GlobalColors.PRIMARY);

    top: 0;
    color: var(--desc-color);
    transform: translateY(-40%) scale(0.75);
  }

  .solo .dirty + .desc {
    display: none;
  }

  .solo .input:focus + .desc {
    display: none;
  }

  .line {
    --line-color: v-bind(GlobalColors.PRIMARY);

    position: absolute;
    bottom: -1.5px;
    left: 50%;
    width: 0;
    height: 3px;
    background-color: var(--line-color);
    transition: width 0.3s cubic-bezier(.25,.8,.5,1),
      left 0.3s cubic-bezier(.25,.8,.5,1);
  }

  .outlined .line {
    display: none;
  }

  .input:focus + .desc + .line {
    left: 0;
    width: 100%;
  }
</style>
