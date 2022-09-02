<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  column: {
    type: Boolean,
    default: false,
  },
});

const flexDirection = (props.column ? 'column' : 'row');
const alignItems = (props.column ? 'start' : 'center');
</script>

<style module lang="scss">
  .container {
    --radio-flex-direction: v-bind(flexDirection);
    --radio-align-items: v-bind(alignItems);

    position: relative;
    display: flex;
    flex-direction: var(--radio-flex-direction);
    align-items: var(--radio-align-items);
    cursor: pointer;
  }
</style>
