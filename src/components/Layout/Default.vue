<template>
  <div :class="$style.root">
    <div :class="$style.sidebar">
      <Sidebar
        :active="activeSidebar"
        :open="openSidebar"
        @switchSidebar="openSidebar = !openSidebar"
        @mouseenter="activeSidebar = true"
        @mouseleave="activeSidebar = false"
      />
    </div>
    <div
      v-if="openSidebar"
      :class="$style.modal"
      @click="openSidebar = false"
    />
    <div
      :class="[
        $style.content,
        openSidebar && $style.openSidebar
      ]"
      @transitionend="scroll"
    >
      <div
        ref="wrapper"
        :class="[
          $style.wrapper,
          active && $style.active
        ]"
      >
        <header :class="$style.header">
          <Header
            :width="headerWidth + 'px'"
            :active="active"
            :language="LanguageVariant.FRENCH"
          />
        </header>
        <main :class="$style.main">
          <router-view />
        </main>
      </div>
      <footer :class="$style.footer">
        <Footer />
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

import Footer from '@/components/Layout/Units/Footer.vue';
import Header, { LanguageVariant } from '@/components/Layout/Units/Header.vue';
import Sidebar from '@/components/Layout/Units/Sidebar/Sidebar.vue';

const active = ref(false);
const openSidebar = ref(false);
const activeSidebar = ref(false);
const wrapper = ref(null);
const headerWidth = ref(0);

const scroll = () => {
  headerWidth.value = wrapper.value?.clientWidth || 0;
  active.value = !!window.scrollY;
};

onMounted(() => { window.addEventListener('scroll', scroll); });
onUnmounted(() => { window.removeEventListener('scroll', scroll); });
</script>

<style module lang="scss">
  .root {
    display: flex;
    gap: 15px;
    max-width: 1400px;
    padding: 0 10px;
    margin: 0 auto;
  }

  .content {
    margin-left: 20px;
    transition: margin 0.2s cubic-bezier(.25,.8,.5,1);
  }

  .openSidebar {
    margin-left: 180px;
  }

  .wrapper {
    min-height: calc(100vh - 40px);
  }

  .header {
    position: relative;
    width: 100%;
  }

  .footer {
    margin-top: 40px;
  }

  .active .main {
    margin-top: 110px;
  }

  @media screen and (max-width: 1270px) {
    .root {
      gap: 30px;
    }

    .openSidebar {
      margin-left: 20px;
    }

    .modal {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 9998;
      overflow-y: hidden;
      content: '';
      background-color: rgb(0 0 0 / 30%);
    }
  }
</style>
