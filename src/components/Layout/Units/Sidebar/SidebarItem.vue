<template>
  <router-link
    :class="[
      $style.root,
      $style.link,
      defaultIcon && $style.defaultIcon,
      active && $style.active
    ]"
    :to="to"
    @click="$emit('choiceLink')"
  >
    <span :class="$style.prependIcon">
      <slot name="prepend" />
    </span>
    <h3 :class="$style.title">
      {{ title }}
    </h3>
  </router-link>
</template>

<script setup>
import { computed } from 'vue';

import GlobalColors from '@/styles/colors';

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
</script>

<style module lang="scss">
  .root {
    --text-color: rgb(94 86 105 / 87%);

    position: relative;
    z-index: 99;
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 230px;
    padding: 10px 18px 10px 22px;
    margin-bottom: 5px;
    text-decoration: none;
    cursor: pointer;
    background: transparent;
    border: none;
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
    transition: background 0.3s cubic-bezier(.25,.8,.5,1);

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
