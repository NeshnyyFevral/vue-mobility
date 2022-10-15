<template>
  <div
    :class="$style.button"
    @click="open"
  >
    <slot name="button" />
  </div>

  <Teleport to="body">
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
        :class="[
          $style.dialog,
          cancel && $style.cancel
        ]"
        @click.stop
        @animationend="cancel = false"
      >
        <div :class="$style.title">
          <slot name="title" />
        </div>
        <div
          :class="[
            $style.content,
            scrollable && $style.scrollContent
          ]"
        >
          <slot name="content" />
        </div>
        <div :class="$style.actions">
          <slot name="actions" />
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import {
  computed,
  ref,
  watch,
} from 'vue';

const props = defineProps({
  visiable: {
    type: Boolean,
    default: false,
  },
  persistent: {
    type: Boolean,
    default: false,
  },
  scrollable: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['close', 'open']);

const cancel = ref(false);

const visiableComp = computed(() => props.visiable);

const calcScrollWidth = () => window.innerWidth - document.documentElement.clientWidth;
const scrollWidth = calcScrollWidth();

watch(visiableComp, () => {
  if (visiableComp.value) {
    document.body.style.overflow = 'hidden';
    if (document.body.offsetWidth > 1270) { document.body.style.marginRight = `${scrollWidth}px`; }
  } else {
    document.body.style.overflow = 'auto';
    document.body.style.marginRight = '0px';
  }
});

const close = () => {
  if (props.persistent) {
    cancel.value = true;
  } else {
    emits('close');
  }
};
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
    width: 600px;
    max-height: 450px;
    padding: 20px;
    overflow-x: auto;
    overflow-y: auto;
    background-color: #fff;
    border-radius: 7px;
    transform: translate3d(-50%, -50%, 0);
    transform-origin: 0 0;
  }

  .title {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
    color: rgb(94 86 105 / 87%);
  }

  .content {
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 1.5;
    color: rgb(94 86 105 / 68%);
  }

  .scrollContent {
    max-height: 200px;
    overflow-y: auto;
  }

  .actions {
    display: flex;
    justify-content: end;
  }

  .enterActive,
  .leaveActive {
    transition: transform 0.2s cubic-bezier(.25,.8,.5,1),
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

  .cancel {
    animation: cancel 0.2s cubic-bezier(.25,.8,.5,1);
  }

  @keyframes cancel {
    33% {
      transform: scale(1) translate3d(-50%, -50%, 0);
    }

    66% {
      transform: scale(1.05) translate3d(-50%, -50%, 0);
    }

    100% {
      transform: scale(1) translate3d(-50%, -50%, 0);
    }
  }

  @media screen and (max-width: 850px ) {
    .dialog {
      width: 400px;
    }
  }

  @media screen and (max-width: 500px ) {
    .dialog {
      width: 250px;
    }
  }
</style>
