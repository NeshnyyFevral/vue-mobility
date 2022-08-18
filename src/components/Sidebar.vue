<template>
  <div
    :class="[
      $style.root,
      open && $style.open
    ]"
  >
    <div :class="$style.header">
      <LogoIcon :class="$style.logo" />
      <h1 :class="$style.title">
        materio
      </h1>
      <button
        :class="$style.headerButton"
        @click="switchSidebar"
      />
    </div>
  </div>
</template>

<script setup>
import LogoIcon from '@/assets/icons/logo.svg';

defineProps({
  open: {
    type: Boolean,
    default: true,
  },
});

const emits = defineEmits(['switchSidebar']);

const switchSidebar = () => {
  emits('switchSidebar');
};
</script>

<style module lang="scss">

  .root {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  }

  .open {
    width: 230px;
  }

  .header {
    display: flex;
    align-items: center;
  }

  .logo {
    margin: 15px;
  }

  .title {
    display: none;
    font-size: 20px;
    color: rgb(94 86 105 / 87%);
    text-transform: uppercase;
  }

  .headerButton {
    position: relative;
    width: 16px;
    height: 16px;
    margin-left: 60px;
    cursor: pointer;
    background-color: transparent;
    border: 2px solid rgb(94 86 105 / 87%);
    border-radius: 50%;

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 5px;
      height: 5px;
      content: '';
      background-color: rgb(94 86 105 / 87%);
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.2s cubic-bezier(.25,.8,.5,1);
      transform: translate3d(-50%, -50%, 0);
    }
  }

  .open .headerButton::after {
    opacity: 1;
  }

  .open .title {
    display: block;
  }
</style>
