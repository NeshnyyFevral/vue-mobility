<template>
  <div
    :class="$style.button"
    @click="open"
  >
    <slot name="button" />
  </div>

  <transition
    :enter-active-class="$style.backEnterActive"
    :leave-active-class="$style.backLeaveActive"
    :enter-from-class="$style.backEnterFrom"
    :leave-to-class="$style.backLeaveTo"
  >
    <div
      v-if="visiable"
      :class="$style.backdrop"
      @click="close"
    />
  </transition>
  <transition
    :enter-active-class="$style.enterActive"
    :leave-active-class="$style.leaveActive"
    :enter-from-class="$style.enterFrom"
    :leave-to-class="$style.leaveTo"
  >
    <div
      v-if="visiable"
      :class="$style.dialog"
      @click.stop
    >
      <div :class="$style.title">
        <slot name="title" />
      </div>
      <div :class="$style.text">
        <slot name="text" />
      </div>
      <div :class="$style.actions">
        <slot name="actions" />
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed, watch } from 'vue';

const props = defineProps({
  visiable: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['close', 'open']);

const visiableComp = computed(() => props.visiable);

watch(visiableComp, () => {
  if (visiableComp.value) {
    document.body.style.overflow = 'hidden';
    if (document.body.offsetWidth > 1270) { document.body.style.marginRight = '17px'; }
  } else {
    document.body.style.overflow = 'auto';
    document.body.style.marginRight = '0px';
  }
});

const close = () => { emits('close'); };
const open = () => { emits('open'); };
</script>

<style module lang="scss">
  .backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999998;
    overflow: auto;
    background-color: rgba($color: #000, $alpha: 30%);
  }

  .dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999999;
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 20px;
    overflow-x: auto;
    background-color: #fff;
    border-radius: 7px;
    transform: translate3d(-50%, -50%, 0);
  }

  .title {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
    color: rgb(94 86 105 / 87%);
  }

  .text {
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 1.5;
    color: rgb(94 86 105 / 68%);
  }

  .actions {
    display: flex;
    justify-content: end;
  }

  .enterActive,
  .leaveActive {
    transition: transform 0.6s cubic-bezier(.25,.8,.5,1),
      opacity 0.2s cubic-bezier(.25,.8,.5,1);
    transform-origin: -40% -50%;
  }

  .leaveActive {
    left: 50.5%;
  }

  .enterFrom,
  .leaveTo {
    opacity: 0;
    transform: scale(0.5);
  }

  .backEnterActive,
  .backLeaveActive {
    transition: opacity 0.2s cubic-bezier(.25,.8,.5,1);
  }

  .backEnterFrom,
  .backLeaveTo {
    opacity: 0;
  }
</style>
