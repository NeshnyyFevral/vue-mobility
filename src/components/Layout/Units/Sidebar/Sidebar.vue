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
          <CrossIcon v-if="open" />
          <MenuIcon v-else />
        </button>
      </div>
    </div>
    <div :class="$style.container">
      <div :class="$style.content">
        <SidebarGroup
          :closed-items-group="closedItemsGroup"
          :title="'Dashboards'"
          :count="dashboards.length"
          :active-list="activeList"
          @openList="toggleList"
          @closeList="toggleList"
        >
          <template #prepend>
            <DashboardsIcon />
          </template>
          <SidebarItem
            v-for="item in dashboards"
            :key="item.title"
            :to="item.route"
            :title="item.title"
            :active-link="activeLink"
            default-icon
            @choiceLink="choiceLink"
          />
        </SidebarGroup>
        <div
          :class="[
            $style.titleWrapper,
            !open && $style.titleWrapperHide,
            active && $style.titleWrapperShow
          ]"
        >
          <span :class="$style.line" />
          <h3 :class="$style.title">
            Apps and pages
          </h3>
        </div>
        <SidebarItem
          :title="'Preview'"
          :active-link="activeLink"
          :to="{ name: Routes.PREVIEW }"
          @choiceLink="choiceLink"
        >
          <template #prepend>
            <CalendarIcon />
          </template>
        </SidebarItem>
        <SidebarItem
          :title="'Chat'"
          :to="{}"
          :active-link="activeLink"
          @choiceLink="choiceLink"
        >
          <template #prepend>
            <ChatIcon />
          </template>
        </SidebarItem>
        <SidebarItem
          :title="'Email'"
          :to="{}"
          :active-link="activeLink"
          @choiceLink="choiceLink"
        >
          <template #prepend>
            <EmailIcon />
          </template>
        </SidebarItem>
        <SidebarGroup
          :closed-items-group="closedItemsGroup"
          :title="'Invoice'"
          :count="invoice.length"
          :active-list="activeList"
          @openList="toggleList"
          @closeList="toggleList"
        >
          <template #prepend>
            <InvoiceIcon />
          </template>
          <SidebarItem
            v-for="item in invoice"
            :key="item.title"
            :to="{}"
            :title="item.title"
            :active-link="activeLink"
            default-icon
            @choiceLink="choiceLink"
          />
        </SidebarGroup>
        <SidebarGroup
          :closed-items-group="closedItemsGroup"
          :title="'User'"
          :count="user.length"
          :active-list="activeList"
          @openList="toggleList"
          @closeList="toggleList"
        >
          <template #prepend>
            <UserIcon />
          </template>
          <SidebarItem
            v-for="item in user"
            :key="item.title"
            :to="{}"
            :title="item.title"
            :active-link="activeLink"
            default-icon
            @choiceLink="choiceLink"
          />
        </SidebarGroup>
        <SidebarGroup
          :closed-items-group="closedItemsGroup"
          :title="'Pages'"
          :count="pages.length"
          :active-list="activeList"
          @openList="toggleList"
          @closeList="toggleList"
        >
          <template #prepend>
            <PagesIcon />
          </template>
          <SidebarItem
            v-for="item in pages"
            :key="item.title"
            :to="{}"
            :title="item.title"
            :active-link="activeLink"
            default-icon
            @choiceLink="choiceLink"
          />
        </SidebarGroup>
        <div
          :class="[
            $style.titleWrapper,
            !open && $style.titleWrapperHide,
            active && $style.titleWrapperShow
          ]"
        >
          <span :class="$style.line" />
          <h3 :class="$style.title">
            User interface
          </h3>
        </div>
        <SidebarItem
          :title="'Typography'"
          :to="{}"
          :active-link="activeLink"
          @choiceLink="choiceLink"
        >
          <template #prepend>
            <TypographyIcon />
          </template>
          Typography
        </SidebarItem>
        <SidebarItem
          :title="'Icons'"
          :to="{}"
          :active-link="activeLink"
          @choiceLink="choiceLink"
        >
          <template #prepend>
            <IconsIcon />
          </template>
        </SidebarItem>
        <SidebarItem
          :title="'Gamification'"
          :to="{}"
          :active-link="activeLink"
          @choiceLink="choiceLink"
        >
          <template #prepend>
            <GamificationIcon />
          </template>
        </SidebarItem>
        <SidebarGroup
          :closed-items-group="closedItemsGroup"
          :title="'Cards'"
          :count="cards.length"
          :active-list="activeList"
          @openList="toggleList"
          @closeList="toggleList"
        >
          <template #prepend>
            <CardsIcon />
          </template>
          <SidebarItem
            v-for="item in cards"
            :key="item.title"
            :title="item.title"
            :to="{}"
            :active-link="activeLink"
            default-icon
            @choiceLink="choiceLink"
          />
        </SidebarGroup>
        <SidebarGroup
          :closed-items-group="closedItemsGroup"
          :title="'Components'"
          :count="components.length"
          :active-list="activeList"
          @openList="toggleList"
          @closeList="toggleList"
        >
          <template #prepend>
            <ComponentsIcon />
          </template>
          <SidebarItem
            v-for="item in components"
            :key="item.title"
            :title="item.title"
            :to="{}"
            :active-link="activeLink"
            default-icon
            @choiceLink="choiceLink"
          />
        </SidebarGroup>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

import CrossIcon from '@/assets/icons/cross.svg';
import CalendarIcon from '@/assets/icons/Sidebar/calendar.svg';
import CardsIcon from '@/assets/icons/Sidebar/cards.svg';
import ChatIcon from '@/assets/icons/Sidebar/chat.svg';
import ComponentsIcon from '@/assets/icons/Sidebar/components.svg';
import DashboardsIcon from '@/assets/icons/Sidebar/dashboards.svg';
import EmailIcon from '@/assets/icons/Sidebar/email.svg';
import GamificationIcon from '@/assets/icons/Sidebar/gamification.svg';
import IconsIcon from '@/assets/icons/Sidebar/icons.svg';
import InvoiceIcon from '@/assets/icons/Sidebar/invoice.svg';
import LogoIcon from '@/assets/icons/Sidebar/logo.svg';
import MenuIcon from '@/assets/icons/Sidebar/menu.svg';
import PagesIcon from '@/assets/icons/Sidebar/pages.svg';
import TypographyIcon from '@/assets/icons/Sidebar/typography.svg';
import UserIcon from '@/assets/icons/Sidebar/user.svg';
import SidebarGroup from '@/components/Layout/Units/Sidebar/SidebarGroup.vue';
import SidebarItem from '@/components/Layout/Units/Sidebar/SidebarItem.vue';
import { Routes } from '@/router';

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

const dashboards = [
  { title: 'CRM', route: { name: Routes.CRM } },
  { title: 'Analytics', route: { name: Routes.PREVIEW } },
  { title: 'eCommerce', route: { name: Routes.PREVIEW } },
];

const invoice = [
  { title: 'List', route: {} },
  { title: 'Edit', route: {} },
  { title: 'Add', route: {} },
];

const user = [
  { title: 'User list', route: {} },
  { title: 'User view', route: {} },
];

const pages = [
  { title: 'Knowledge Base', route: {} },
  { title: 'Account Setting', route: {} },
  { title: 'Pricing', route: {} },
  { title: 'FAQ', route: {} },
];

const cards = [
  { title: 'Basic', route: {} },
  { title: 'Statistics', route: {} },
  { title: 'Advance', route: {} },
  { title: 'Actions', route: {} },
  { title: 'Chart', route: {} },
];

const components = [
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
];
</script>

<style module lang="scss">
  .root {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 55px;
    height: 100vh;
    padding: 0;
    overflow: hidden;
    background-color: #F5F5F5;
    transition: width 0.3s cubic-bezier(.25,.8,.5,1),
      transform 0.3s cubic-bezier(.25,.8,.5,1);
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
    margin: 15px 0 15px 18px;
  }

  .headerWrapper {
    position: relative;
    margin-left: 42px;
    opacity: 0;
  }

  .titleLogo {
    display: block;
    font-size: 20px;
    color: rgb(94 86 105 / 87%);
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
    border: 2px solid rgb(94 86 105 / 87%);
    border-radius: 50%;
    transition: right 0.3s cubic-bezier(.25,.8,.5,1);
    transform: translateY(-50%);

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
    color: rgb(94 86 105 / 87%);

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
    background-color: #F5F5F5;
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
      right: -200px;
      width: 30px;
      height: 30px;
      border: none;
      fill: rgb(94 86 105 / 87%);

      &::after {
        display: none;
      }
    }

    .open .headerButton {
      right: -85px;
    }

    .menu {
      fill: rgb(94 86 105 / 87%);
    }
  }
</style>
