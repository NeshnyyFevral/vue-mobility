<template>
  <div>
    <button :class="$style.button">
      <slot />
    </button>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';

import { ButtonVariant } from '@/enums/Button';
import GlobalColors from '@/styles/colors';

const props = defineProps({
	variant: {
		type: String,
		default: ButtonVariant.DEFAULT,
		validator: (value) => Object.values(ButtonVariant).includes(value),
	},
});

const map = {
	[ButtonVariant.ERROR]: GlobalColors.error,
	[ButtonVariant.PRIMARY]: GlobalColors.primary,
	[ButtonVariant.WARNING]: GlobalColors.warning,
	[ButtonVariant.DEFAULT]: GlobalColors.default,
	[ButtonVariant.SUCCESS]: GlobalColors.success,
};

const color = computed(() => map[props.variant]);
</script>

<style module lang="scss">
.button{
  --button-color: v-bind(color);
  background-color: var(--button-color);
  cursor: pointer;
  border-radius: 5px;
}
</style>
