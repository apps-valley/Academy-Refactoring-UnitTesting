<template>
<b-button
      :class="classes"
      :to="to"
      :style="{ 'background-color': bg }"
      @click="$emit('clickFn')"
      data-test="button"
  >
  <div v-if="circle" class="circle" align-v="center" data-test="button-container">
      <b-img v-if="icon" :src="require(`@/assets/images/icons/${icon}.svg`)"></b-img>
      <!--
        NOTE: Must add Bootstrap icons as well in case if we need an icon from there
        <b-icon :icon="bsIcon" />
      -->
  </div>
  <div v-else>
    <b-avatar v-if="icon && pullRight" >
      <b-img :src="require(`@/assets/images/icons/${icon}.svg`)"></b-img>
      <!--
          NOTE: Must add Bootstrap icons as well in case if we need an icon from there
          <b-icon :icon="bsIcon" />
        -->
    </b-avatar>
    <span style="font-size: 12px" data-test="button-text">{{ btnTitle }}</span>
    <b-avatar v-if="icon && !pullRight">
      <b-img :src="require(`@/assets/images/icons/${icon}.svg`)"></b-img>
      <!--
          NOTE: Must add Bootstrap icons as well in case if we need an icon from there
          <b-icon :icon="bsIcon" />
        -->
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
