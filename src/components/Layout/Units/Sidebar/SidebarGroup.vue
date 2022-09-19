<template>
  <div
    :class="[
      $style.root,
      defaultIcon && $style.defaultIcon
    ]"
  >
    <button
      :class="[
        $style.button,
        active && !closedItemsGroup && $style.buttonOpen
      ]"
      @click="openList"
    >
      <span :class="$style.prependIcon">
        <component :is="icon" />
      </span>
      <h3 :class="$style.title">
        {{ title }}
      </h3>
      <ArrowIcon :class="$style.arrowIcon" />
      <Ripple :items="items" />
    </button>
    <div
      ref="listItems"
      :class="[
        $style.listItems,
        active && !closedItemsGroup && $style.listOpen,
      ]"
    >
      <SidebarItem
        v-for="item in props.list"
        :key="item.title"
        :title="item.title"
        :to="item.route"
        default-icon
        :active-link="activeLink"
        @choiceLink="$emit('choiceLink', item.title)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

import ArrowIcon from '@/assets/icons/chevron-down.svg';
import SidebarItem from '@/components/Layout/Units/Sidebar/SidebarItem.vue';
import Ripple from '@/components/Ripple.vue';
import { useRipple } from '@/hooks/useRipple';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  defaultIcon: {
    type: Boolean,
    default: false,
  },
  closedItemsGroup: {
    type: Boolean,
    default: false,
  },
  count: {
    type: Number,
    default: 0,
  },
  activeList: {
    type: String,
    default: '',
  },
  list: {
    type: Array,
    default: () => [],
  },
  activeLink: {
    type: String,
    default: '',
  },
  icon: {
    type: Object,
    required: true,
  },
});
const emits = defineEmits(['openList', 'closeList']);

const listItems = ref(null);
const listHeight = ref(`${props.count * 49}px`);

const active = computed(() => (props.activeList === props.title));

const {
  add,
  items,
} = useRipple();

const openList = (event) => {
  const button = event.target;

  const left = event.pageX - button.clientLeft - 15;
  const top = event.offsetY - button.clientTop - 15;
  const rippleColor = getComputedStyle(button).color;

  add(top, left, rippleColor);

  if (active.value) {
    emits('closeList', '');
  } else {
    emits('openList', props.title);
  }
};
</script>

<style module lang="scss">
  .root {
    --text-color: rgb(94 86 105 / 87%);

    position: relative;
    z-index: 100;
    width: 100%;
    min-width: 230px;
  }

  .button {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 18px 10px 22px;
    margin-bottom: 5px;
    overflow: hidden;
    font-size: 16px;
    color: var(--text-color);
    cursor: pointer;
    background: #F5F5F5;
    border: none;
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
    transition: background-color 0.3s cubic-bezier(.25,.8,.5,1);

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 100;
      display: block;
      content: '';
      background-color: none;
      opacity: 0;
    }

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
    background-color: rgb(94 86 105 / 8%);

    &:hover {
      background-color: rgb(94 86 105 / 20%);
    }
  }

  .arrowIcon {
    position: absolute;
    top: 25%;
    right: 10px;
    transition: transform 0.3s cubic-bezier(.25,.8,.5,1);
    transform: rotate(-90deg);
  }

  .buttonOpen .arrowIcon {
    transform: rotate(0deg);
  }

  .title {
    position: relative;
    font-weight: 400;
    color: var(--text-color);
  }

  .prependIcon {
    margin-right: 10px;
  }

  .listItems {
    height: 0;
    overflow-y: hidden;
    transition: height 0.3s cubic-bezier(.25,.8,.5,1);
  }

  .listOpen {
    --list-height: v-bind(listHeight);

    height: var(--list-height);
    margin-bottom: 5px;
  }

  .defaultIcon .button .title {
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
</style>
