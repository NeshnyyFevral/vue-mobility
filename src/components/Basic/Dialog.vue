<template>
  <div
    :class="$style.button"
    @click="visiable = true"
  >
    <slot name="button" />
  </div>
  <div
    v-if="visiable"
    :class="visiable && $style.backdrop"
    @click="visiable = false"
  >
    <div
      :class="$style.dialog"
      @click.stop
    >
      <slot name="dialog" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const visiable = ref(false);

watch(visiable, () => {
  if (visiable.value) {
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = '17px';
  } else {
    document.body.style.overflow = 'auto';
    document.body.style.marginRight = '0px';
  }
});
</script>

<style module lang="scss">
  .backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999999;
    overflow: auto;
    background-color: rgba($color: #000, $alpha: 30%);
    transition: backgnd-color 0.3s linear;
  }

  .dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 30px;
    overflow-x: auto;
    background-color: #fff;
    transform: translate3d(-50%, -50%, 0);
  }
</style>
