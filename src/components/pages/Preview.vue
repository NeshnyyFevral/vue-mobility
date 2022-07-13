<template>
  <UserButton
    :variant="ButtonVariant.PRIMARY"
    :size="ButtonSize.LARGE"
  >
    Button
  </UserButton>
</template>

<script setup>
import UserButton, { ButtonSize, ButtonVariant } from '@/components/UI/Button.vue';
</script>
