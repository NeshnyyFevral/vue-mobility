<template>
  <UserButton
    :variant="ButtonVariant.PRIMARY"
    :size="ButtonSize.LARGE"
  >
    Button
  </UserButton>
  <div :class="$style.hello">
    hello fwefwefwe
  </div>
</template>

<script setup>
import UserButton, { ButtonSize, ButtonVariant } from '@/components/UI/Button.vue';

</script>

<style module lang="scss">
.hello{
  font-weight: 500;
}
</style>
