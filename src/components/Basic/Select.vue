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
import {
  computed, ref, watch,
} from 'vue';

import Arrow from '@/assets/icons/chevron-down.svg';
import { useThemeStore } from '@/stores/theme';
import theme from '@/styles/theme';

const themeStore = useThemeStore();
const emits = defineEmits(['choice']);
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});

const open = ref(false);
const root = ref(null);

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
const selectBg = computed(() => (themeStore.theme ? theme.DARK_BG_CARD : theme.LIGHT_BG_CARD));
const selectText = computed(() => (themeStore.theme ? theme.DARK_TEXT : theme.LIGHT_TEXT));
const selectHover = computed(() => (themeStore.theme ? theme.LIGHT_TEXT : theme.DARK_TEXT));
</script>

<style module lang="scss">
  .root {
    --select-bg: v-bind(selectBg);
    --select-text: v-bind(selectText);
    --select-hover: v-bind(selectHover);

    position: relative;
    z-index: 110;
    width: 100%;
    cursor: pointer;
  }

  .list {
    position: absolute;
    top: 10px;
    z-index: 100;
    width: 100%;
    max-height: 150px;
    padding: 5px 0;
    overflow-y: scroll;
    background-color: var(--select-bg);
    border-radius: 2px;
    box-shadow: 0 4px 14px 0 rgb(94 86 105 / 14%);
    animation: spawn 0.2s cubic-bezier(.25,.8,.5,1);

  }

  .listItem {
    padding: 5px 10px;
    color: var(--select-text);
    cursor: pointer;
    transition: background-color 0.3s cubic-bezier(.25,.8,.5,1);

    &:hover {
      background-color: var(--select-hover);
    }
  }

  .arrow {
    position: absolute;
    top: 50%;
    right: 20px;
    z-index: 10;
    width: 25px;
    height: 25px;
    fill: var(--select-text);
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
