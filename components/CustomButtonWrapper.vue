<template>
  <div>
  <Button
      classes="button__element button btn-gradient-primary rounded_radius no_outline"
      :to="to"
      :icon="icon"
      :btnTitle="btnTitle"
      :pullRight="pullRight"
      :circle="circle"
  >
  </Button>
  <Button
      classes="button__element button transparent_gray rounded_radius"
      :to="to"
      :icon="icon"
      :btnTitle="btnTitle"
      :pullRight="pullRight"
      :circle="circle"
  >
  </Button>
  <Button
      classes="button__element button bg-light-gray title__gray no_outline rounded_radius"
      :to="to"
      :icon="icon"
      :btnTitle="btnTitle"
      :pullRight="pullRight"
      :circle="circle"
  >
  </Button>
  <Button
        classes="button__element button bg_red rounded_radius"
        :to="to"
      :icon="icon"
      :btnTitle="btnTitle"
      :pullRight="pullRight"
      :circle="circle"
  >
  </Button>
  <Button
    classes="button__element button light_red  rounded_radius no_outline"
      :to="to"
      :icon="icon"
      :btnTitle="btnTitle"
      :pullRight="pullRight"
      :circle="circle"
  >
  </Button>
  <Button
    classes="button__element button transparent_red rounded_radius "
      :to="to"
      :backgroundColor="bg"
      :color="color"
      :icon="icon"
      :btnTitle="btnTitle"
      :pullRight="pullRight"
      :circle="circle"
  >
  </Button>
  <Button
    classes="button__element button rounded_radius no_outline"
      :to="to"
      :bg="bg"
      :color="color"
      :icon="icon"
      :btnTitle="btnTitle"
      :pullRight="pullRight"
      :circle="circle"
      :class="customClass"
  >
  </Button>
  </div>
</template>

<script>
import Button from '@/components/Button'
export default {
	name: 'CustomBtnWrapper',
	components: {
		Button,
	},
	props: {
		btnType: {
			type: String,
			default: null
		},
		btnTitle: {
			type: String,
			default: 'Sign up!'
		},
		icon: {
			type: String,
			default: null
		},
		to: String,
		bg: String,
		customClass: String,
		color: String,
		pullRight: Boolean,
		circle: Boolean
	}
}
</script>
