<template>
  <div>
    <b-form-input list="my-list-id" class="mx-4" style="width: 300px; height: 60px; border-radius: 50px"
      :placeholder="placeHolder" v-model="selection"
      data-test="input"
    ></b-form-input>

    <!-- NOTE: data list needs to be styled -->
    <datalist id="my-list-id" data-test="options-list">
      <option :key="selection" v-for="selection in options">{{ selection }}</option>
      <!-- this is just a dummy attribute. replace the options
          array values with the actual sorting choices. -->
    </datalist>
  </div>
</template>

<script>
export default {
	name: 'InputSelect',
	data() {
		return {
			selection: ''
		}
	},
	props: ['options', 'placeHolder']
}

</script>

<style scoped>

</style>
