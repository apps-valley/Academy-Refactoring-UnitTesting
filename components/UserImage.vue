<template>
  <div data-test="user-image">
    <b-img v-if="url" data-test="dynamic-image" :src="imgUrl"></b-img>
    <b-img
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
		url: String,
    default: null
	},
	data() {
		return {
      // imgUrl: require(`@/assets/images/${this.url}`),
      staticImage: require('@/assets/images/icons/member-wight-full.svg')
    }
	},
  computed: {
    imgUrl() {
      if (this.url) return require(`@/assets/images/${this.url}`)
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
