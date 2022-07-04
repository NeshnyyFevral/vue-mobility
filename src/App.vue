<template>
  <div>
    <UserButton :variant="ButtonVariant.PRIMARY">
      кнопка
    </UserButton>
  </div>
</template>

<script setup>
import UserButton from '@/components/UI/Button.vue';
import { ButtonVariant } from '@/enums/Button';

</script>

<style module lang="scss">

</style>
