<template>
  <div v-if="loading" class="spinner-loading">
    <half-circle-spinner
      :animation-duration="1000"
      :size="50"
      :color="'var(--gradient-bg)'"
    />
  </div>
</template>

<script>
import { HalfCircleSpinner  } from 'epic-spinners'
export default {
	components: {
		HalfCircleSpinner ,
	},
	data() {
		return {
			loading: false,
		}
	},
	props: {
		parentLoading: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		start() {
			this.loading = true
		},
		finish() {
			this.loading = false
		},
	},
	watch: {
		parentLoading(val) {
			this.loading = val
		},
	},
}
</script>
<style scoped>
.spinner-loading {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);
}
</style>
