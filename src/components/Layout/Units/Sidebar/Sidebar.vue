<template>
  <div
    :class="[
      $style.root,
      open && $style.open,
      !open && active && $style.active
    ]"
  >
    <div :class="$style.header">
      <LogoIcon :class="$style.logo" />
      <div :class="$style.headerWrapper">
        <h1 :class="$style.titleLogo">
          materio
        </h1>
        <button
          :class="[
            $style.headerButton,
            $style.menu
          ]"
          @click="switchSidebar"
        >
          <CrossIcon />
        </button>
      </div>
    </div>
    <div :class="$style.container">
      <div :class="$style.content">
        <div
          v-for="node in SidebarTree"
          :key="node.title"
        >
          <div
            v-if="node.title"
            :class="[
              $style.titleWrapper,
              !open && $style.titleWrapperHide,
              active && $style.titleWrapperShow
            ]"
          >
            <span :class="$style.line" />
            <h3 :class="$style.title">
              {{ node.title }}
            </h3>
          </div>
          <SidebarGroup
            v-for="item in node.group"
            :key="item.title"
            :title="item.title"
            :list="item.list"
            :icon="item.icon"
            :count="item.list.length"
            :active-list="activeList"
            :closed-items-group="closedItemsGroup"
            :active-link="activeLink"
            @openList="toggleList"
            @closeList="toggleList"
            @choiceLink="choiceLink"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

import CrossIcon from '@/assets/icons/cross.svg';
import CardsIcon from '@/assets/icons/Sidebar/cards.svg';
import ComponentsIcon from '@/assets/icons/Sidebar/components.svg';
import DashboardsIcon from '@/assets/icons/Sidebar/dashboards.svg';
import InvoiceIcon from '@/assets/icons/Sidebar/invoice.svg';
import LogoIcon from '@/assets/icons/Sidebar/logo.svg';
import PagesIcon from '@/assets/icons/Sidebar/pages.svg';
import UserIcon from '@/assets/icons/Sidebar/user.svg';
import SidebarGroup from '@/components/Layout/Units/Sidebar/SidebarGroup.vue';
import { Routes } from '@/router';
import { useThemeStore } from '@/stores/theme';
import theme from '@/styles/theme';

const themeStore = useThemeStore();

const props = defineProps({
  open: {
    type: Boolean,
    default: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const activeLink = ref('');
const activeList = ref('');

const emits = defineEmits(['switchSidebar']);
const switchSidebar = () => { emits('switchSidebar'); };

const choiceLink = (title) => { activeLink.value = title; };
const toggleList = (title) => { activeList.value = title; };

const closedItemsGroup = computed(() => !props.open && !props.active);

const SidebarTree = [
  {
    title: '',
    group: [
      {
        title: 'Dashboards',
        icon: DashboardsIcon,
        list: [
          { title: 'CRM', route: { name: Routes.CRM } },
          { title: 'Analytics', route: {} },
          { title: 'eCommerce', route: {} },
        ],
      },
    ],
  },
  {
    title: 'apps and pages',
    group: [
      {
        title: 'Pages',
        icon: PagesIcon,
        list: [
          { title: 'Preview', route: { name: Routes.PREVIEW } },
          { title: 'Knowledge Base', route: {} },
          { title: 'Account Setting', route: {} },
          { title: 'Pricing', route: {} },
          { title: 'FAQ', route: {} },
        ],
      },
      {
        title: 'Invoice',
        icon: InvoiceIcon,
        list: [
          { title: 'List', route: {} },
          { title: 'Edit', route: {} },
          { title: 'Add', route: {} },
        ],
      },
      {
        title: 'User',
        icon: UserIcon,
        list: [
          { title: 'User list', route: {} },
          { title: 'User view', route: {} },
          { title: 'Email', route: {} },
        ],
      },
    ],
  },
  {
    title: 'user interface',
    group: [
      {
        title: 'Cards',
        icon: CardsIcon,
        list: [
          { title: 'Basic', route: {} },
          { title: 'Statistics', route: {} },
          { title: 'Advance', route: {} },
          { title: 'Actions', route: {} },
          { title: 'Chart', route: {} },
        ],
      },
      {
        title: 'Components',
        icon: ComponentsIcon,
        list: [
          { title: 'Alert', route: {} },
          { title: 'Avatar', route: {} },
          { title: 'Badge', route: {} },
          { title: 'Button', route: {} },
          { title: 'Chip', route: {} },
          { title: 'Dialog', route: {} },
          { title: 'Expansion Panel  ', route: {} },
          { title: 'List', route: {} },
          { title: 'Menu', route: {} },
          { title: 'Pagination', route: {} },
          { title: 'Snackbar', route: {} },
          { title: 'Stepper', route: {} },
          { title: 'Tabs', route: {} },
          { title: 'Timeline', route: {} },
          { title: 'Tooltip', route: {} },
          { title: 'Treeview', route: {} },
        ],
      },
    ],
  },
];

const background = computed(() => (themeStore.theme ? theme.DARK_BG_SIDEBAR : theme.LIGHT_BG_SIDEBAR));
const colorTitle = computed(() => (themeStore.theme ? theme.DARK_TITLE : theme.LIGHT_TITLE));
</script>

<style module lang="scss">
  .root {
    --sidebar-bg: v-bind(background);
    --title-color: v-bind(colorTitle);

    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 55px;
    height: 100vh;
    padding: 0;
    overflow: hidden;
    background-color: var(--sidebar-bg);
    transition: width 0.3s cubic-bezier(.25,.8,.5,1),
      transform 0.3s cubic-bezier(.25,.8,.5,1),
      background-color 0.3s cubic-bezier(.25,.8,.5,1);
  }

  .open {
    width: 260px;
    padding-right: 3px;
  }

  .active {
    width: 260px;
    padding-right: 3px;
    box-shadow: 0 5px 6px -3px rgb(94 86 105 / 20%),
      0 3px 16px 2px rgb(94 86 105 / 12%),
      0 9px 12px 1px rgb(94 86 105 / 14%);
  }

  .header {
    position: relative;
    display: flex;
    margin: 22px 0 15px 18px;
  }

  .headerWrapper {
    position: relative;
    margin-left: 42px;
    opacity: 0;
  }

  .titleLogo {
    display: block;
    font-size: 20px;
    color: var(--title-color);
    text-transform: uppercase;
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  .headerButton {
    position: absolute;
    top: 50%;
    right: -85px;
    display: block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    background-color: transparent;
    border: 2px solid var(--title-color);
    border-radius: 50%;
    transition: right 0.3s cubic-bezier(.25,.8,.5,1),
      background-color 0.3s cubic-bezier(.25,.8,.5,1);
    transform: translateY(-50%);

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 5px;
      height: 5px;
      content: '';
      background-color: var(--title-color);
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.2s cubic-bezier(.25,.8,.5,1),
        background-color 0.3s cubic-bezier(.25,.8,.5,1);
      transform: translate3d(-50%, -50%, 0);
    }
  }

  .menu {
    fill: none;
  }

  .active .headerWrapper,
  .open .headerWrapper,
  .open .headerButton::after {
    opacity: 1;
  }

  .container {
    height: 90%;
    overflow-x: hidden;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(199 199 199);
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #999;
    }

    &::-webkit-scrollbar-track {
      background-color: #eee;
      border-radius: 5px;
    }
  }

  .open .container,
  .active .container {
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .content {
    height: 100%;
    padding-right: 10px;
    font-size: 16px;
    color: var(--title-color);

  }

  .titleWrapper {
    position: relative;
    margin: 15px 0 20px;
  }

  .title {
    position: relative;
    z-index: 11;
    display: inline-block;
    padding: 0 5px;
    margin-left: 20px;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    white-space: nowrap;
    background-color: var(--sidebar-bg);
    transition: background-color 0.3s cubic-bezier(.25,.8,.5,1);
  }

  .line {
    position: absolute;
    top: 55%;
    z-index: 10;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transform: translateY(-50%);
  }

  .titleWrapperHide .title {
    opacity: 0;
  }

  .titleWrapperHide .line {
    left: 15px;
    line-height: 12px;
  }

  .titleWrapperShow .title {
    opacity: 1;
  }

  .titleWrapperShow .line {
    left: 0;
  }

  @media screen and (max-width: 1270px) {
    .root {
      overflow: visible;
      transform: translateX(-300px);
    }

    .open {
      transform: translateX(0);
    }

    .headerWrapper {
      opacity: 1;
    }

    .headerButton {
      width: 28px;
      height: 28px;
      border: none;
      fill: var(--title-color);

      &::after {
        display: none;
      }
    }

    .menu {
      fill: var(--title-color);
    }
  }
</style>
