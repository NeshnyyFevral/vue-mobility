<template>
  <div :class="$style.root">
    <button
      :class="[
        $style.button,
        open && $style.buttonOpen,
        !open && $style.buttonClose
      ]"
      @click="open = !open"
    >
      <span :class="$style.prependIcon">
        <slot name="prepend" />
      </span>
      <h3 :class="$style.title">
        {{ title }}
      </h3>
      <ArrowIcon :class="$style.arrowIcon" />
    </button>
    <div
      :class="[
        $style.listItems,
        open && $style.listOpen,
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import ArrowIcon from '@/assets/icons/chevron-down.svg';

defineProps({
  title: {
    type: String,
    default: '',
  },
});

const open = ref(false);
</script>

<style module lang="scss">
  .root {
    --text-color: rgb(94 86 105 / 87%);

    position: relative;
    z-index: 100;
    width: 230px;
  }

  .button {
    display: flex;
    align-items: center;
    padding: 10px 18px 10px 22px;
    margin-bottom: 5px;
    font-size: 16px;
    cursor: pointer;
    background: #F5F5F5;
    border: none;
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
    transition: background-color 0.3s cubic-bezier(.25,.8,.5,1),
      margin 0.3s cubic-bezier(.25,.8,.5,1);

    &:hover {
      background-color: rgb(94 86 105 / 8%);
    }
  }

  .arrowIcon, .prependIcon {
    width: 24px;
    height: 24px;
    fill: var(--text-color);
  }

  .buttonOpen {
    margin-bottom: 132.6px;
    background-color: rgb(94 86 105 / 8%);

    &:hover {
      background-color: rgb(94 86 105 / 20%);
    }
  }

  .arrowIcon {
    margin-left: 26px;
    transition: transform 0.3s cubic-bezier(.25,.8,.5,1);
    transform: rotate(-90deg);
  }

  .buttonOpen .arrowIcon {
    transform: rotate(0deg);
  }

  .title {
    font-weight: 400;
    color: var(--text-color);
  }

  .prependIcon {
    margin-right: 10px;
  }

  .listItems {
    display: none;
    margin-bottom: 5px;
    transition: margin 0.3s cubic-bezier(.25,.8,.5,1);
  }

  .listOpen {
    position: absolute;
    top: 49px;
    z-index: 1;
    display: block;
    flex-direction: column;
    margin-bottom: 132px;
  }
</style>
