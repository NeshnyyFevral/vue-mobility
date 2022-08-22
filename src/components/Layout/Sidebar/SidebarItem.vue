<template>
  <div
    :class="[
      $style.root,
      defaultIcon && $style.defaultIcon
    ]"
  >
    <span :class="$style.prependIcon">
      <slot name="prepend" />
    </span>
    <h3 :class="$style.title">
      <slot />
    </h3>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  defaultIcon: {
    type: Boolean,
    default: false,
  },
});
</script>

<style module lang="scss">
  .root {
    --text-color: rgb(94 86 105 / 87%);

    position: relative;
    z-index: 99;
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 230px;
    padding: 10px 18px 10px 22px;
    margin-bottom: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
    transition: background-color 0.3s cubic-bezier(.25,.8,.5,1);

    &:hover {
      background-color: rgb(94 86 105 / 8%);
    }
  }

  .title {
    position: relative;
    margin-left: 0;
    font-size: 16px;
    font-weight: 400;
    color: var(--text-color);
  }

  .defaultIcon .title {
    margin-left: 7px;
  }

  .defaultIcon .title::before {
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

  .prependIcon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    fill: var(--text-color);
  }
</style>
