<template>
  <div data-test="user-image">
    <b-img v-if="url" data-test="dynamic-image" :src="require(`@/assets/images/${url}`)"></b-img> 
    <b-img
      v-else
      data-test="mock-image"
      :src="require('@/assets/images/icons/member-wight-full.svg')">
    </b-img>
  </div>
</template>

<script>
export default {
	name: 'UserImage',
	props: {
		url: String,
    default: null
	},
	data() {
		return {}
	}
}
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
