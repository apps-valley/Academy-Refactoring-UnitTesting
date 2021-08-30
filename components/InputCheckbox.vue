<template>
  <div class="d-flex">
    <b-form-checkbox :id="id" label-position="right" v-model="selected" data-test="checkbox"></b-form-checkbox>
    <!-- NOTE: bootstrap icons also need to be added here! -->
    <b-img :src="dynamicIcon" class="mr-2 mt-1" style="width: 16px; height: 16px" data-test="checkbox-image">
    </b-img>
    <label for="checkbox" class="mx-1" data-test="checkbox-label">{{text}}</label>
  </div>
</template>

<script>
export default {
	name: 'InputCheckbox',
	data() {
		return {
			selected: ''
		}
	},
	props: {
		icon: String,
		text: String,
		id: String
	},
	computed: {
		dynamicIcon() {
			if (this.icon) return require(`@/assets/images/icons/${this.icon}.svg`)
		}
	}
}

</script>
