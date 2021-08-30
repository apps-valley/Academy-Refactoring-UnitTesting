<template>
<b-button 
      :class="classes"
      :to="to"
      :style="{ 'background-color': bg }"
      @click="$emit('clickFn')"
  >
  <div v-if="circle" class="circle" align-v="center">
      <b-img v-if="icon" :src="require(`@/assets/images/icons/${icon}.svg`)"></b-img>
  </div>
  <div v-else>
    <b-avatar v-if="icon && pullRight" >
    <b-img :src="require(`@/assets/images/icons/${icon}.svg`)"></b-img>
    </b-avatar>
    <span v-if="!circle" style="font-size: 12px">{{ btnTitle }}</span>
    <b-avatar v-if="icon && !pullRight">
    <b-img :src="require(`@/assets/images/icons/${icon}.svg`)"></b-img>
    </b-avatar>
  </div>
  </b-button>
</template>

<script>
export default {
	name: 'Button.vue',
	props: {
		classes: String,
		pullRight: Boolean,
		btnTitle: String,
		icon: String,
		bg: String,
		color: {
			type: String,
			default: null
		},
		to: String,
		circle: Boolean
	}
}
</script>
