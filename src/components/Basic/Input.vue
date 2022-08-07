<template>
  <label
    :for="label"
    :class="[
      $style.container,
      outlined && $style.outlined,
      solo && $style.solo,
      disabled && $style.disabled,
      readonly && $style.readonly,
      error && $style.error,
      focus && $style.focus,
      validateOnBlur && $style.validateOnBlur
    ]"
  >
    <span
      v-if="prefix"
      :class="$style.prefix"
    >
      {{ prefix }}
    </span>
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
      :value="inputValue"
      :maxlength="maxlength || 524288"
      @input="checkValue"
      @focus="checkValue"
      @blur="blurInput"
    />
    <div :class="$style.details">
      <div
        :id="label"
        :class="$style.desc"
      >
        <span v-if="placeholder">{{ placeholder }}</span>
        <span v-else>
          <slot />
        </span>
      </div>
      <div :class="$style.line" />
      <div
        v-if="counter || maxlength"
        :class="$style.counter"
      >
        {{ inputValue.length }} / {{ counter || maxlength }}
      </div>
      <div :class="$style.hint">
        {{ hintValue }}
      </div>
      <div v-if="clearable && dirty">
        <cross
          :class="$style.crossIcon"
          @click="clearInput"
        />
      </div>
    </div>
    <span
      v-if="suffix"
      :class="$style.suffix"
    >
      {{ suffix }}
    </span>
  </label>
</template>

<script>
import { computed, onMounted, ref } from 'vue';

import cross from '@/assets/icons/cross.svg';
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

export const InputVariant = {
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
  variant: {
    type: String,
    default: InputVariant.PRIMARY,
    validator: (value) => Object.values(InputVariant).includes(value),
  },
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
  counter: {
    type: Number,
    default: 0,
  },
  maxlength: {
    type: Number,
    default: 0,
  },
  rules: {
    type: Array,
    default: () => [],
  },
  hint: {
    type: String,
    default: '',
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  suffix: {
    type: String,
    default: '',
  },
  prefix: {
    type: String,
    default: '',
  },
  validateOnBlur: {
    type: Boolean,
    default: false,
  },
});

const MapInputVariant = {
  [InputVariant.ERROR]: GlobalColors.ERROR,
  [InputVariant.PRIMARY]: GlobalColors.PRIMARY,
  [InputVariant.WARNING]: GlobalColors.WARNING,
  [InputVariant.DEFAULT]: GlobalColors.DEFAULT,
  [InputVariant.SUCCESS]: GlobalColors.SUCCESS,
  [InputVariant.INFO]: GlobalColors.INFO,
};

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
const color = computed(() => MapInputVariant[props.variant]);

const dirty = ref(false);
const error = ref(false);
const focus = ref(false);
const inputValue = ref('');
const hintValue = ref('');
const finnalyValue = ref('');

const checkRules = (rules) => {
  let flag = false;
  rules.forEach((rule) => {
    if (flag) return;
    const ruleValue = rule(finnalyValue.value);

    if (typeof ruleValue === 'string') {
      hintValue.value = ruleValue;
      error.value = true;
      flag = true;
    } else {
      hintValue.value = props.hint;
      error.value = false;
    }
  });
};

onMounted(() => {
  inputValue.value = props.value;
  hintValue.value = props.hint;
  finnalyValue.value = props.prefix + inputValue.value + props.suffix;
  dirty.value = !!finnalyValue.value;

  checkRules(props.rules);
});

const checkValue = (event) => {
  inputValue.value = event.target.value;
  finnalyValue.value = props.prefix + inputValue.value + props.suffix;
  dirty.value = !!finnalyValue.value;
  focus.value = true;

  checkRules(props.rules);
  if (props.validateOnBlur) {
    error.value = !props.validateOnBlur;
  }
};

const clearInput = () => {
  inputValue.value = '';
  dirty.value = false;
};

const blurInput = () => {
  focus.value = false;
  checkRules(props.rules);
};
</script>

<style module lang="scss">
  .container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: text;
    border-bottom: 1px solid rgb(94 86 105 / 28%);
  }

  .disabled {
    pointer-events: none;
    user-select: none;
    border-bottom: 1px dashed rgb(97 97 97);
    opacity: 0.6;
  }

  .input {
    --input-size: v-bind(size);
    --input-color: v-bind(color);
    --input-radius: v-bind(radius);

    display: block;
    width: 100%;
    min-height: var(--input-size);
    padding: 10px 0;
    font-size: 14px;
    font-weight: 400;
    color: #616161;
    background-color: transparent;
    border: none;
    border-radius: var(--input-radius);
    outline: none;

    &:focus {
      outline-color: var(--input-color);
      caret-color: var(--input-color);
    }
  }

  .outlined {
    border: none;
  }

  .outlined::after {
    display: none;
  }

  .outlined .input {
    padding: 10px 12px;
    border: 1px solid rgb(94 86 105 / 28%);
  }

  .error .input {
    --input-color: v-bind(GlobalColors.ERROR);

    border-color: var(--input-color);
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

  .outlined .details .desc {
    left: 12px;
  }

  .dirty + .details .desc {
    top: 0;
    color: #616161;
    transform: translateY(-40%) scale(0.75);
  }

  .error .details .desc {
    --desc-color: v-bind(GlobalColors.ERROR);

    color: var(--desc-color);
    animation: error 0.5s linear;
    animation-delay: 0.2s;
  }

  .input:focus + .details .desc {
    --desc-color: v-bind(color);

    top: 0;
    color: var(--desc-color);
    transform: translateY(-40%) scale(0.75);
  }

  .solo .dirty + .details .desc {
    display: none;
  }

  .error .input:focus + .details .desc {
    --desc-color: v-bind(GlobalColors.ERROR);

    color: var(--desc-color);
  }

  .validateOnBlur .input:focus + .details .desc {
    --desc-color: v-bind(color);

    top: 0;
    color: var(--desc-color);
    transform: translateY(-40%) scale(0.75);
  }

  .solo .input:focus + .details .desc {
    display: none;
  }

  .line {
    --line-color: v-bind(color);

    position: absolute;
    bottom: -1.5px;
    left: 50%;
    width: 0;
    height: 3px;
    background-color: var(--line-color);
    transition: width 0.3s cubic-bezier(.25,.8,.5,1),
      left 0.3s cubic-bezier(.25,.8,.5,1);
  }

  .outlined .details .line {
    display: none;
  }

  .error .details .line {
    --line-color: v-bind(GlobalColors.ERROR);

    background-color: var(--line-color);
  }

  .input:focus + .details .line {
    left: 0;
    width: 100%;
  }

  .validateOnBlur .input:focus + .details .line {
    --line-color: v-bind(color);

    background-color: var(--line-color);
  }

  .validateOnBlur .input:focus {
    caret-color: var(--line-color);
  }

  .counter, .hint {
    position: absolute;
    right: 0;
    bottom: -22px;
    font-size: 12px;
  }

  .hint {
    --hint-color: v-bind(GlobalColors.DEFAULT);

    bottom: -10px;
    left: 0;
    color: var(--hint-color);
    opacity: 0;
    transition: bottom 0.3s cubic-bezier(.25,.8,.5,1),
      opacity 0.3s cubic-bezier(.25,.8,.5,1);
  }

  .error .details .counter {
    --counter-color: v-bind(GlobalColors.ERROR);

    color: var(--counter-color);
  }

  .error .details .hint {
    --hint-color: v-bind(GlobalColors.ERROR);

    bottom: -22px;
    color: var(--hint-color);
    opacity: 1;
  }

  .input:focus + .details .hint {
    --hint-color: v-bind(GlobalColors.ERROR);

    bottom: -22px;
    color: var(--hint-color);
    opacity: 1;
  }

  .validateOnBlur .input:focus + .details .hint {
    bottom: -10px;
    left: 0;
    opacity: 0;
  }

  .crossIcon {
    position: absolute;
    right: 16px;
    bottom: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    fill: #616161;
    transition: fill 0.2s linear;
  }

  .input:focus + .details .crossIcon {
    --icon-color: v-bind(color);

    fill: var(--icon-color);
  }

  .prefix, .suffix {
    --text-color: v-bind(GlobalColors.DEFAULT);

    font-size: 14px;
    color: var(--text-color);
    transition: color 0.2s cubic-bezier(.25,.8,.5,1);
  }

  .prefix {
    margin-right: 5px;
  }

  .suffix {
    margin-left: 5px;
  }

  .focus .prefix, .focus .suffix {
    --text-color: v-bind(color);

    color: var(--text-color);
  }

  @keyframes error {
    20% {
      margin-right: 0;
      margin-left: -5px;
    }

    40% {
      margin-right: -5px;
      margin-left: 0;
    }

    60% {
      margin-right: 0;
      margin-left: -3px;
    }

    80% {
      margin-right: -2px;
      margin-left: 0;
    }

    100% {
      margin-right: 0;
      margin-left: 0;
    }
  }
</style>
