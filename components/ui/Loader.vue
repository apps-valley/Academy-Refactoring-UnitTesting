<template>
  <div class="spinner" v-if="loading">
    <div class="parent">
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      <Title medium>جاري التحميل برجاء الانتظار</Title>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			loading: false
		}
	},
	methods: {
		start() {
			this.loading = true
		},
		finish() {
			this.loading = false
		}
	}
}
</script>
<style scoped>
.spinner {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 9999;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d7e1ef;
}
.spinner i {
  font-size: 110px;
  color: #05a4d1;
}
</style>
