<template>
  <router-link
    :class="[
      $style.root,
      $style.link,
      defaultIcon && $style.defaultIcon,
      active && $style.active
    ]"
    :to="to"
    @click="onClick"
  >
    <span :class="$style.prependIcon">
      <slot name="prepend" />
    </span>
    <h3 :class="$style.title">
      {{ title }}
    </h3>
    <Ripple :items="items" />
  </router-link>
</template>

<script setup>
import { computed } from 'vue';

import Ripple from '@/components/Ripple.vue';
import { useRipple } from '@/hooks/useRipple';
import { useThemeStore } from '@/stores/theme';
import GlobalColors from '@/styles/colors';
import theme from '@/styles/theme';

const themeStore = useThemeStore();

const emits = defineEmits(['choiceLink']);
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  defaultIcon: {
    type: Boolean,
    default: false,
  },
  to: {
    type: Object,
    default: () => {},
  },
  activeLink: {
    type: String,
    default: '',
  },
});

const active = computed(() => props.title === props.activeLink);

const {
  add,
  items,
} = useRipple();

const onClick = (event) => {
  emits('choiceLink');
  const button = event.target;

  const left = event.pageX - button.clientLeft - 15;
  const top = event.offsetY - button.clientTop - 15;
  const rippleColor = getComputedStyle(button).color;

  add(top, left, rippleColor);
};

const color = computed(() => (themeStore.theme ? theme.DARK_TEXT : theme.LIGHT_TEXT));
</script>

<style module lang="scss">
  .root {
    --text-color: v-bind(color);

    position: relative;
    z-index: 99;
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 230px;
    padding: 10px 18px 10px 22px;
    margin-bottom: 5px;
    overflow: hidden;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    background: transparent;
    border: none;
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
    transition: background 0.3s cubic-bezier(.25,.8,.5,1);

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 100;
      display: block;
      content: '';
      background: none;
      opacity: 0;
    }

    &:hover {
      background: rgb(94 86 105 / 8%);
    }
  }

  .title {
    position: relative;
    margin-left: 0;
    font-size: 16px;
    font-weight: 400;
    color: var(--text-color);
    transition: color 0.3s cubic-bezier(.25,.8,.5,1);
  }

  .defaultIcon .title {
    margin-left: 7px;

    &::before {
      position: absolute;
      top: 50%;
      left: -33px;
      width: 10px;
      height: 10px;
      content: '';
      border: 1px solid currentColor;
      border-radius: 50%;
      transform: translateY(-50%);
    }
  }

  .prependIcon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    fill: var(--text-color);
    transition: fill 0.3s cubic-bezier(.25,.8,.5,1);
  }

  .active {
    --bg-color: v-bind(GlobalColors.PRIMARY);

    background: linear-gradient(98deg,#cea0ff, var(--bg-color) 94%);

    &:hover {
      background: linear-gradient(98deg,#cea0ff, var(--bg-color) 100%);
    }
  }

  .active .title {
    color: #fff;
  }

  .active .prependIcon {
    fill: #fff;
  }
</style>
