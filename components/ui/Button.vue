<template>
  <b-button
    class="button__element button"
    :to="to"
    :disabled="disabled"
    :type="type"
    :size="size"
    :class="{
      rounded_radius: rounded_radius,
      block: block,
      small_radius: small_radius,
      transparent_purple: transparent_purple,
      transparent_gray: transparent_gray,
      bg_blue: bg_blue,
      bg_red: bg_red,
      upper__case: upper_case
    }"
    @click="$emit('clickFn')"
  >
    <slot></slot>
  </b-button>
</template>

<script>
export default {
	name: 'Button',

	props: {
		to: String,
		type: String,
		size: String,
		block: Boolean,
		disabled: Boolean,
		bg_blue: Boolean,
		bg_red: Boolean,
		transparent_purple: Boolean,
		transparent_gray: Boolean,
		upper_case: Boolean,
		small_radius: Boolean,
		rounded_radius: Boolean
	}
}
</script>
