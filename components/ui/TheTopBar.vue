<template>
  <b-row class="mt-0 mr-0 mr-sm-5 top_search">
    <b-col md="4" lg="3" class="mb-2 mb-sm-0">
      <b-button
        pill
        size="sm"
        class="bg_blue d-block"
        style="width:100%"
        @click="$emit('click', $event)"
        :disabled="disabled"
      >
        <b-img src="~/assets/images/icons/plus.svg" class="ml-2"></b-img>
        {{ btnTitle }}
      </b-button>
    </b-col>
    <b-col md="4" lg="4">
      <b-form-group>
        <b-form-input
          type="text"
          :placeholder="$t('search-with-name-label')"
          v-model="searchInput"
          @input="search($event)"
        ></b-form-input>
        <i class="fa fa-search"></i>
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
import freeTrail from '@/mixins/freeTrail'

export default {
	name: 'TheTopBar',
	props: {
		btnTitle: {
			type: String,
			required: true,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	mixins: [freeTrail],
	data() {
		return {
			searchInput: '',
		}
	},
	methods: {
		search(e) {
			this.$emit('search', e)
		},
	},
}
</script>

<style>
</style>
