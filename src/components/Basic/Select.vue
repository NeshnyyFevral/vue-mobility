<template>
  <div
    :class="[
      $style.root,
      focus && $style.focus,
    ]"
  >
    <span :class="$style.prepend">
      <slot name="prepend" />
    </span>
    <label
      :for="label"
      :class="[
        $style.container,
        outlined && $style.outlined,
        solo && $style.solo,
      ]"
    >
      <component
        :is="'select'"
        :id="label"
        :class="[
          $style.select,
          dirty && $style.dirty,
          shaped && $style.shaped
        ]"
        :value="selectValue"
        @input="inputSelect"
      >
        <option>1</option>
        <option>2</option>
      </component>
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
        <div v-if="clearable && dirty">
          <Cross
            :class="$style.crossIcon"
            @click="clearSelect"
          />
        </div>
      </div>
    </label>
    <span :class="$style.append">
      <slot name="append" />
    </span>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

import Cross from '@/assets/icons/cross.svg';
import GlobalColors from '@/styles/colors';

const SelectSizeValue = {
  SMALL: '40px',
  NORMAL: '46px',
  LARGE: '58px',
};

const SelectRadiusValue = {
  DEFAULT: '5px',
  ROUNTED: '28px',
  RECTANGLE: '0px',
};

export const SelectSize = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
};

export const SelectRadius = {
  DEFAULT: 'dafault',
  ROUNTED: 'rounted',
  RECTANGLE: 'rectangle',
};

export const SelectVariant = {
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
    default: SelectVariant.PRIMARY,
    validator: (value) => Object.values(SelectVariant).includes(value),
  },
  placeholder: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: SelectSize.NORMAL,
    validator: (value) => Object.values(SelectSize).includes(value),
  },
  radius: {
    type: String,
    default: SelectRadius.DEFAULT,
    validator: (value) => Object.values(SelectRadius).includes(value),
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
  clearable: {
    type: Boolean,
    default: false,
  },
});

const selectValue = ref(props.value);
const focus = ref(false);
const dirty = ref(false);

const MapSelectVariant = {
  [SelectVariant.ERROR]: GlobalColors.ERROR,
  [SelectVariant.PRIMARY]: GlobalColors.PRIMARY,
  [SelectVariant.WARNING]: GlobalColors.WARNING,
  [SelectVariant.DEFAULT]: GlobalColors.DEFAULT,
  [SelectVariant.SUCCESS]: GlobalColors.SUCCESS,
  [SelectVariant.INFO]: GlobalColors.INFO,
};

const MapSelectSize = {
  [SelectSize.SMALL]: SelectSizeValue.SMALL,
  [SelectSize.NORMAL]: SelectSizeValue.NORMAL,
  [SelectSize.LARGE]: SelectSizeValue.LARGE,
};

const MapSelectRadius = {
  [SelectRadius.DEFAULT]: SelectRadiusValue.DEFAULT,
  [SelectRadius.ROUNTED]: SelectRadiusValue.ROUNTED,
  [SelectRadius.RECTANGLE]: SelectRadiusValue.RECTANGLE,
};

const size = computed(() => MapSelectSize[props.size]);
const radius = computed(() => MapSelectRadius[props.radius]);
const color = computed(() => MapSelectVariant[props.variant]);

const clearSelect = () => {
  selectValue.value = '';
  dirty.value = false;
};

const inputSelect = (event) => {
  selectValue.value = event.target.value;
  dirty.value = !!event.target.value;
};

</script>

<style module lang="scss">

  .root {
    display: flex;
    align-items: center;
    width: 100%;

  }

  .container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid rgb(94 86 105 / 28%);
    transition: border-color 0.3s cubic-bezier(.25,.8,.5,1);
  }

  .select {
    --select-size: v-bind(size);
    --select-color: v-bind(color);
    --select-radius: v-bind(radius);

    display: block;
    width: 100%;
    min-height: var(--select-size);
    padding: 13px 0 4px;
    font-size: 14px;
    font-weight: 400;
    color: #616161;
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: var(--select-radius);
    outline: none;

    &:focus {
      outline-color: var(--select-color);
      caret-color: var(--select-color);
    }
  }

  .outlined {
    border: none;

    &::after {
      display: none;
    }
  }

  .solo .select {
    box-shadow: 0 1px 3px 0 rgb(94 86 105 / 20%),
      0 3px 1px -2px rgb(94 86 105 / 12%),
      0 2px 2px 0 rgb(94 86 105 / 14%);
  }

  .outlined .select {
    padding: 10px 12px;
    border: 1px solid rgb(94 86 105 / 28%);

    &:focus {
      outline: var(--select-color) solid 1px;
    }
  }

  .outlined .shaped {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .solo .select:focus {
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
    transition: transform 0.3s cubic-bezier(.25,.8,.5,1),
      scale 0.3s cubic-bezier(.25,.8,.5,1),
      top 0.3s cubic-bezier(.25,.8,.5,1),
      color 0.3s cubic-bezier(.25,.8,.5,1);
    transform: translateY(-50%);
    transform-origin: top left;
  }

  .outlined .details .desc {
    left: 12px;
    background-color: #fff;
  }

  .dirty + .details .desc {
    top: 0;
    color: #616161;
    transform: translateY(-20%) scale(0.75);
  }

  .select:focus + .details .desc {
    --desc-color: v-bind(color);

    top: 0;
    color: var(--desc-color);
    transform: translateY(-20%) scale(0.75);
  }

  .solo .dirty + .details .desc {
    display: none;
  }

  .solo .select:focus + .details .desc {
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
      left 0.3s cubic-bezier(.25,.8,.5,1),
      background-color 0.3s cubic-bezier(.25,.8,.5,1);
  }

  .solo .details .line {
    display: none;
  }

  .outlined .details .line {
    display: none;
  }

  .select:focus + .details .line {
    left: 0;
    width: 100%;
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

  .select:focus + .details .crossIcon {
    --icon-color: v-bind(color);

    fill: var(--icon-color);
  }

  .append,
  .prepend {
    cursor: pointer;
    transition: fill 0.2s cubic-bezier(.25,.8,.5,1);
  }

  .focus .prepend,
  .focus .append {
    --icon-color: v-bind(color);

    fill: var(--icon-color);
  }
</style>
