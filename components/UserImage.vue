<template>
  <div data-test="user-image">
    <b-img style="max-width: 100px" v-if="url" data-test="dynamic-image" :src="dynamicImage"></b-img>
    <b-img
      style="max-width: 100px"
      v-else
      data-test="mock-image"
      :src="staticImage">
    </b-img>
  </div>
</template>

<script>
export default {
	name: 'UserImage',
	props: {
		url: {
      type: String
          }
	},
	data() {
		return {
      staticImage: require('@/assets/images/icons/member-wight-full.svg')
    }
	},
  computed: {
    dynamicImage() {
      return require(`@/assets/images/${this.url}`)
    }
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
