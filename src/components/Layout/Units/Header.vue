<template>
  <div
    :class="[
      $style.root,
      active && $style.active
    ]"
  >
    <div :class="$style.left">
      <button
        :class="[$style.button, $style.mobileSidebar]"
        @click="$emit('switchSidebar')"
      >
        <MenuIcon />
      </button>
      <button :class="[$style.button, $style.search]">
        <SearchIcon />
      </button>
    </div>
    <div :class="$style.right">
      <Checkbox
        :class="$style.checkbox"
        :label="'switchTheme'"
        :value="themeValue"
        :variant="CheckboxVariant.DARK"
        toggle
        @changeValue="themeValue = !themeValue"
      >
        {{ displayedThemeValue }}
      </Checkbox>
      <button :class="$style.languageButton">
        <img
          :src="languageIcon"
          :alt="language"
          :class="$style.languageIcon"
        >
        {{ language }}
      </button>
      <button :class="[$style.button, $style.notify]">
        <NotifyIcon />
      </button>
      <button :class="$style.button">
        <Avatar
          :corner="AvatarCorner.DEFAULT"
          :class="$style.avatar"
          :size="AvatarSize.LARGE"
        >
          <img
            src="@/assets/avatars/1.png"
            alt="avatar"
          >
        </Avatar>
      </button>
    </div>
  </div>
</template>

<script>
import {
  computed, onMounted,
  ref, watch,
} from 'vue';

import appStorage from '@/appStorage';
import NotifyIcon from '@/assets/icons/Header/notification.svg';
import SearchIcon from '@/assets/icons/Header/search.svg';
import MenuIcon from '@/assets/icons/Sidebar/menu.svg';
import Avatar, { AvatarCorner, AvatarSize } from '@/components/Avatar.vue';
import Checkbox, { CheckboxVariant } from '@/components/Basic/Checkbox.vue';
import { useThemeStore } from '@/stores/theme';
import theme from '@/styles/theme';

export const LanguageVariant = {
  ENGLISH: 'English',
  FRENCH: 'French',
  ARABIC: 'Arabic',
};
</script>

<script setup>

const themeStore = useThemeStore();
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },

  language: {
    type: String,
    default: LanguageVariant.ENGLISH,
    validator: (value) => Object.values(LanguageVariant).includes(value),
  },

  width: {
    type: String,
    required: true,
  },
});

const themeValue = ref(false);
const displayedThemeValue = computed(() => (themeValue.value ? 'Dark' : 'Light'));

watch(themeValue, () => {
  appStorage.set('themeColor', themeValue.value ? 1 : 0);
  themeStore.changeTheme();
});

const languageIcon = computed(() => new URL(`../../../assets/icons/Header/${props.language}.png`, import.meta.url));

onMounted(() => {
  themeValue.value = !!appStorage.get('themeColor');
  themeStore.changeTheme();
});

const background = computed(() => (themeStore.theme ? theme.DARK_BG_HEADER : theme.LIGHT_BG_HEADER));
const color = computed(() => (themeStore.theme ? theme.DARK_TEXT : theme.LIGHT_TEXT));
</script>

<style module lang="scss">
  .root {
    --text-color: v-bind(color);

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    margin-bottom: 40px;
    transition: padding 0.2s cubic-bezier(.25,.8,.5,1),
      background-color 0.3s cubic-bezier(.25,.8,.5,1),
      width 0.2s cubic-bezier(.25,.8,.5,1);
  }

  .left {
    display: flex;
    align-items: center;
  }

  .right {
    display: flex;
    align-items: center;
  }

  .search {
    margin-left: 10px;
  }

  .languageButton,
  .theme,
  .notify {
    margin-right: 15px;
  }

  .button {
    position: relative;
    color: var(--text-color);
    cursor: pointer;
    background: transparent;
    border: none;
    fill: var(--text-color);

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 30px;
      height: 30px;
      content: '';
      background-color: var(--text-color);
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.2s linear;
      transform: translate3d(-50%, -50%, 0);
    }

    &:hover::after {
      opacity: 0.1;
    }
  }

  .languageButton {
    position: relative;
    margin-left: 40px;
    color: var(--text-color);
    cursor: pointer;
    background: transparent;
    border: none;
  }

  .languageIcon {
    position: absolute;
    top: 50%;
    left: -27px;
    width: 22px;
    height: 14px;
    transform: translateY(-50%);
  }

  .search,
  .theme,
  .notify {
    width: 25px;
    height: 25px;
  }

  .active {
    --header-width: v-bind(props.width);
    --header-bg: v-bind(background);

    position: fixed;
    top: 0;
    z-index: 8888;
    width: var(--header-width);
    padding: 10px 20px;
    background-color: var(--header-bg);
    border-radius: 0 0 10px 10px;
    box-shadow: 0 4px 8px -4px rgb(94 86 105 / 42%);
  }

  @media screen and (max-width: 1270px) {
    .mobileSidebar {
      width: 23px;
      height: 23px;
      fill: var(--text-color);
    }
  }

</style>
