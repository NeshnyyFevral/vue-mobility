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
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const emits = defineEmits(['choice']);
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  focus: {
    type: Boolean,
    default: false,
  },
});

const open = ref(false);
const root = ref(null);
const current = ref('');

const listClose = (event) => {
  if (!root.value?.contains(event.target)) {
    open.value = false;
  }
};

const choice = (item) => {
  current.value = item;
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
    width: 100%;
  }

  .list {
    position: absolute;
    top: 10px;
    width: 100%;
    padding: 5px 0;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 4px 14px 0 rgb(94 86 105 / 14%);
    animation: spawn 0.2s cubic-bezier(.25,.8,.5,1);
  }

  .listItem {
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s cubic-bezier(.25,.8,.5,1);

    &:hover {
      background-color: rgb(222 222 222);
    }
  }

  @keyframes spawn {
    from {
      // transform: scale(0);
      opacity: 0;
    }

    to {
      // transform: scale(1);
      opacity: 1;
    }
  }
</style>
