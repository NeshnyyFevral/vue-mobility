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
          :class="$style.headerButton"
          @click="switchSidebar"
        />
      </div>
    </div>
    <div :class="$style.container">
      <div :class="$style.content">
        <ItemsGroup
          :sidebar-closed="closedItemsGroup"
          :title="'Dashboards'"
        >
          <template #prepend>
            <DashboardsIcon />
          </template>
          <SidebarItem
            v-for="item in dashboards"
            :key="item.title"
            default-icon
          >
            {{ item.title }}
          </SidebarItem>
        </ItemsGroup>
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
        <SidebarItem>
          <template #prepend>
            <CalendarIcon />
          </template>
          Calendar
        </SidebarItem>
        <SidebarItem>
          <template #prepend>
            <ChatIcon />
          </template>
          Chat
        </SidebarItem>
        <SidebarItem>
          <template #prepend>
            <EmailIcon />
          </template>
          Email
        </SidebarItem>
        <ItemsGroup
          :sidebar-closed="closedItemsGroup"
          :title="'Invoice'"
        >
          <template #prepend>
            <InvoiceIcon />
          </template>
          <SidebarItem
            v-for="item in invoice"
            :key="item.title"
            default-icon
          >
            {{ item.title }}
          </SidebarItem>
        </ItemsGroup>
        <ItemsGroup
          :sidebar-closed="closedItemsGroup"
          :title="'User'"
        >
          <template #prepend>
            <UserIcon />
          </template>
          <SidebarItem
            v-for="item in user"
            :key="item.title"
            default-icon
          >
            {{ item.title }}
          </SidebarItem>
        </ItemsGroup>
        <ItemsGroup
          :sidebar-closed="closedItemsGroup"
          :title="'Pages'"
        >
          <template #prepend>
            <PagesIcon />
          </template>
          <SidebarItem
            v-for="item in pages"
            :key="item.title"
            default-icon
          >
            {{ item.title }}
          </SidebarItem>
        </ItemsGroup>
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
        <SidebarItem>
          <template #prepend>
            <TypographyIcon />
          </template>
          Typography
        </SidebarItem>
        <SidebarItem>
          IconsIcon
          <template #prepend>
            <IconsIcon />
          </template>
          Icons
        </SidebarItem>
        <SidebarItem>
          <template #prepend>
            <GamificationIcon />
          </template>
          Gamification
        </SidebarItem>
        <ItemsGroup
          :sidebar-closed="closedItemsGroup"
          :title="'Cards'"
        >
          <template #prepend>
            <CardsIcon />
          </template>
          <SidebarItem
            v-for="item in cards"
            :key="item.title"
            default-icon
          >
            {{ item.title }}
          </SidebarItem>
        </ItemsGroup>
        <ItemsGroup
          :sidebar-closed="closedItemsGroup"
          :title="'Components'"
        >
          <template #prepend>
            <ComponentsIcon />
          </template>
          <SidebarItem
            v-for="item in components"
            :key="item.title"
            default-icon
          >
            {{ item.title }}
          </SidebarItem>
        </ItemsGroup>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

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
import PagesIcon from '@/assets/icons/Sidebar/pages.svg';
import TypographyIcon from '@/assets/icons/Sidebar/typography.svg';
import UserIcon from '@/assets/icons/Sidebar/user.svg';
import ItemsGroup from '@/components/Basic/ItemsGroup.vue';
import SidebarItem from '@/components/SidebarItem.vue';

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

const emits = defineEmits(['switchSidebar']);

const switchSidebar = () => { emits('switchSidebar'); };

const closedItemsGroup = computed(() => !props.open && !props.active);

const dashboards = [
  { title: 'CRM', url: '' },
  { title: 'Analytics', url: '' },
  { title: 'eCommerce', url: '' },
];

const invoice = [
  { title: 'List', url: '' },
  { title: 'Preview', url: '' },
  { title: 'Edit', url: '' },
  { title: 'Add', url: '' },
];

const user = [
  { title: 'User list', url: '' },
  { title: 'User view', url: '' },
];

const pages = [
  { title: 'Knowledge Base', url: '' },
  { title: 'Account Setting', url: '' },
  { title: 'Pricing', url: '' },
  { title: 'FAQ', url: '' },
];

const cards = [
  { title: 'Basic', url: '' },
  { title: 'Statistics', url: '' },
  { title: 'Advance', url: '' },
  { title: 'Actions', url: '' },
  { title: 'Chart', url: '' },
];

const components = [
  { title: 'Alert', url: '' },
  { title: 'Avatar', url: '' },
  { title: 'Badge', url: '' },
  { title: 'Button', url: '' },
  { title: 'Chip', url: '' },
  { title: 'Dialog', url: '' },
  { title: 'Expansion Panel  ', url: '' },
  { title: 'List', url: '' },
  { title: 'Menu', url: '' },
  { title: 'Pagination', url: '' },
  { title: 'Snackbar', url: '' },
  { title: 'Stepper', url: '' },
  { title: 'Tabs', url: '' },
  { title: 'Timeline', url: '' },
  { title: 'Tooltip', url: '' },
  { title: 'Treeview', url: '' },
];
</script>

<style module lang="scss">

  .root {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 55px;
    height: 100%;
    padding: 0;
    overflow: hidden;
    background-color: #F5F5F5;
    transition: width 0.3s cubic-bezier(.25,.8,.5,1);
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
</style>
