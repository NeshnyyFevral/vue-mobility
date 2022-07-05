<template>
  <div>
    <UserButton
      :variant="ButtonVariant.PRIMARY"
      :size="ButtonSize.LARGE"
    >
      Button
    </UserButton>
  </div>
</template>

<script setup>
import UserButton from '@/components/UI/Button.vue';
import { ButtonSize, ButtonVariant } from '@/enums/Button';

</script>
<style module lang="scss">

</style>
