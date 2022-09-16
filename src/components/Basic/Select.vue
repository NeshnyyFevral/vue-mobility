<template>
  <div
    ref="root"
    :class="$style.root"
    @click="open = true"
  >
    <div
      :class="$style.textField"
    >
      <slot />
    </div>
    <div
      v-if="open"
      :class="$style.list"
    >
      <div
        v-for="item in items"
        :key="item"
        :class="$style.listItem"
        @click="choice(item)"
      >
        {{ item }}
      </div>
    </div>
    <Arrow
      :class="[
        $style.arrow,
        open && $style.open
      ]"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

import Arrow from '@/assets/icons/chevron-down.svg';

const emits = defineEmits(['choice']);
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  focus: {
    type: Boolean,
    default: false,
  },
  view: {
    type: Number,
    default: Number.MAX_VALUE,
  },
});

const open = ref(false);
const root = ref(null);

const listHeight = `${29.2 * props.view + 5}px`;

const listClose = (event) => {
  if (!root.value?.contains(event.target)) {
    open.value = false;
  }
};

const choice = (item) => {
  open.value = false;
  emits('choice', item);
};

watch(open, () => {
  if (open.value) {
    document.addEventListener('click', listClose);
  } else {
    document.removeEventListener('click', listClose);
  }
});
</script>

<style module lang="scss">
  .root {
    position: relative;
    z-index: 110;
    width: 100%;
    cursor: pointer;

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: '';
    }
  }

  .list {
    --list-height: v-bind(listHeight);

    position: absolute;
    top: 10px;
    z-index: 100;
    width: 100%;
    height: var(--list-height);
    padding: 5px 0;
    overflow-y: auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 4px 14px 0 rgb(94 86 105 / 14%);
    animation: spawn 0.2s cubic-bezier(.25,.8,.5,1);

  }

  .listItem {
    padding: 5px 10px;
    color: rgb(94 86 105 / 87%);
    cursor: pointer;
    transition: background-color 0.3s cubic-bezier(.25,.8,.5,1);

    &:hover {
      background-color: rgb(236 236 236);
    }
  }

  .arrow {
    position: absolute;
    top: 50%;
    right: 20px;
    z-index: 10;
    width: 25px;
    height: 25px;
    transition: transform 0.2s cubic-bezier(.25,.8,.5,1);
    transform: translateY(-50%);
  }

  .open {
    transform: rotate(180deg) translateY(50%);
  }

  @keyframes spawn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>
