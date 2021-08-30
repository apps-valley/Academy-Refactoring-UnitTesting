<template>
  <div>
    <!-- NOTE: add handling cases for pop-right and pop-left -->
    <b-form-datepicker v-model="date" :placeholder="placeHolder"
      style="border-radius: 40px;height: 60px; width: 300px;"
      data-test="datepicker">
    </b-form-datepicker>
  </div>
</template>

<script>
export default {
	name: 'InputDate',
	data() {
		return {
			date: ''
		}
	},
	props: {
		placeHolder: String
	}
}

</script>
