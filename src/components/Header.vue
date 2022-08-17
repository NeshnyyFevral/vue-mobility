<template>
  <div
    :class="[
      $style.root,
      active && $style.active
    ]"
  >
    <button :class="$style.button">
      <SearchIcon :class="$style.search" />
    </button>
    <div :class="$style.right">
      <button :class="$style.languageButton">
        English
      </button>
      <button :class="$style.button">
        <ThemeDarkIcon :class="$style.theme" />
      </button>
      <button :class="$style.button">
        <NotifyIcon :class="$style.notify" />
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

<script setup>
import NotifyIcon from '@/assets/icons/notification.svg';
import SearchIcon from '@/assets/icons/search.svg';
import ThemeDarkIcon from '@/assets/icons/themeDark.svg';
import Avatar, { AvatarCorner, AvatarSize } from '@/components/Avatar.vue';
import GlobalColors from '@/styles/colors';

defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style module lang="scss">
  .root {
    --text-color: v-bind(GlobalColors.DEFAULT);

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .right {
    display: flex;
    gap: 15px;
    align-items: center;
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
    color: var(--text-color);
    cursor: pointer;
    background: transparent;
    border: none;

    &::before {
      position: absolute;
      top: 50%;
      left: -27px;
      width: 22px;
      height: 14px;
      content: '';
      background-image: url('@/assets/icons/flagUSA.png');
      background-size: cover;
      transform: translateY(-50%);
    }
  }

  .search,
  .theme,
  .notify {
    width: 23px;
    height: 23px;
  }

</style>
