<template>
  <div>
    <button :class="$style.button">
      <slot />
    </button>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';

import { ButtonSize, ButtonVariant } from '@/enums/Button';
import GlobalSizes from '@/styles/buttonSizes';
import GlobalColors from '@/styles/colors';

const props = defineProps({
	variant: {
		type: String,
		default: ButtonVariant.DEFAULT,
		validator: (value) => Object.values(ButtonVariant).includes(value),
	},
	size: {
		type: String,
		default: ButtonSize.NORMAL,
		validator: (value) => Object.values(ButtonSize).includes(value),
	},
});

const MapButtonVariant = {
	[ButtonVariant.ERROR]: GlobalColors.ERROR,
	[ButtonVariant.PRIMARY]: GlobalColors.PRIMARY,
	[ButtonVariant.WARNING]: GlobalColors.WARNING,
	[ButtonVariant.DEFAULT]: GlobalColors.DEFAULT,
	[ButtonVariant.SUCCESS]: GlobalColors.SUCCESS,
};

const MapButtonSizes = {
	[ButtonSize.SMALL]: GlobalSizes.SMALL,
	[ButtonSize.NORMAL]: GlobalSizes.NORMAL,
	[ButtonSize.LARGE]: GlobalSizes.LARGE,
};

const color = computed(() => MapButtonVariant[props.variant]);
const size = computed(() => MapButtonSizes[props.size]);
</script>

<style module lang="scss">
.button{
  --button-color: v-bind(color);
	--button-size: v-bind(size);
  background-color: var(--button-color);
	padding: var(--button-size);
	color: #fff;
	box-shadow: 0 4px 8px -4px var(--button-color);
	text-transform: uppercase;
	font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
	border: none;
	transition: box-shadow 0.25s linear, opacity 0.25s linear;
}

.button:hover{
	box-shadow: 0 6px 20px -8px  var(--button-color);
	opacity: 0.9;
}
</style>
