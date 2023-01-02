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
            @switchSidebar="openSidebar = !openSidebar"
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
import {
  computed,
  onMounted, onUnmounted, ref,
} from 'vue';

import Footer from '@/components/Layout/Units/Footer.vue';
import Header, { LanguageVariant } from '@/components/Layout/Units/Header.vue';
import Sidebar from '@/components/Layout/Units/Sidebar/Sidebar.vue';
import { useThemeStore } from '@/stores/theme';
import theme from '@/styles/theme';

const themeStore = useThemeStore();
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

const colorText = computed(() => (themeStore.theme ? theme.DARK_TEXT : theme.LIGHT_TEXT));
</script>

<style module lang="scss">
  .root {
    --color-text: v-bind(colorText);

    display: flex;
    max-width: 1400px;
    padding: 0 15px;
    margin: 0 auto;
    color: var(--color-text);
  }

  .content {
    margin-left: 55px;
    transition: margin 0.2s cubic-bezier(.25,.8,.5,1);
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
  @media screen and (max-width: 1800px) {
    .openSidebar {
      margin-left: 100px;
    }
  }

  @media screen and (max-width: 1720px) {
    .openSidebar {
      margin-left: 150px;
    }
  }

  @media screen and (max-width: 1650px) {
    .openSidebar {
      margin-left: 200px;
    }
  }

  @media screen and (max-width: 1500px) {
    .openSidebar {
      margin-left: 250px;
    }
  }

  @media screen and (max-width: 1270px) {
    .content {
      margin-left: 0;
    }

    .openSidebar {
      margin-left: 0;
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
