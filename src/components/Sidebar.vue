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
    <div :class="$style.content">
      <ItemsGroup :title="'Dashboards'">
        <template #prepend>
          <DashboardsIcon />
        </template>
        <SidebarItem default-icon>
          CRM
        </SidebarItem>
        <SidebarItem default-icon>
          Analytics
        </SidebarItem>
        <SidebarItem default-icon>
          eCommerce
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
      <ItemsGroup :title="'Invoice'">
        <template #prepend>
          <InvoiceIcon />
        </template>
        <SidebarItem default-icon>
          List
        </SidebarItem>
        <SidebarItem default-icon>
          Preview
        </SidebarItem>
        <SidebarItem default-icon>
          Edit
        </SidebarItem>
        <SidebarItem default-icon>
          Add
        </SidebarItem>
      </ItemsGroup>
      <ItemsGroup :title="'User'">
        <template #prepend>
          <UserIcon />
        </template>
        <SidebarItem default-icon>
          User list
        </SidebarItem>
        <SidebarItem default-icon>
          User view
        </SidebarItem>
      </ItemsGroup>
      <ItemsGroup :title="'Pages'">
        <template #prepend>
          <PagesIcon />
        </template>
        <SidebarItem default-icon>
          User view
        </SidebarItem>
      </ItemsGroup>
    </div>
  </div>
</template>

<script setup>
import CalendarIcon from '@/assets/icons/Sidebar/calendar.svg';
import ChatIcon from '@/assets/icons/Sidebar/chat.svg';
import DashboardsIcon from '@/assets/icons/Sidebar/dashboards.svg';
import EmailIcon from '@/assets/icons/Sidebar/email.svg';
import InvoiceIcon from '@/assets/icons/Sidebar/invoice.svg';
import LogoIcon from '@/assets/icons/Sidebar/logo.svg';
import PagesIcon from '@/assets/icons/Sidebar/pages.svg';
import UserIcon from '@/assets/icons/Sidebar/user.svg';
import ItemsGroup from '@/components/Basic/ItemsGroup.vue';
import SidebarItem from '@/components/SidebarItem.vue';

defineProps({
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

const switchSidebar = () => {
  emits('switchSidebar');
};
</script>

<style module lang="scss">

  .root {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 55px;
    height: 100vh;
    padding-right: 20px;
    overflow-x: hidden;
    background-color: #F5F5F5;
    transition: width 0.3s cubic-bezier(.25,.8,.5,1);
  }

  .open {
    width: 260px;
  }

  .active {
    width: 260px;
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

  .active .headerWrapper {
    opacity: 1;
  }

  .open .headerButton::after {
    opacity: 1;
  }

  .open .headerWrapper {
    opacity: 1;
  }

  .content {
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
