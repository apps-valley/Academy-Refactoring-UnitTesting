<template>
  <div class="form-group custom-input">
    <b-form-group :invalid-feedback="invalidFeedback">
      <b-form-input
        :required="required"
        class="form-control"
        :type="type"
        :state="state"
        :class="{
          rounded_radius: rounded_radius,
        }"
        :value="value"
        @input="$emit('input', $event)"
        v-on:keypress="textOnly ? isLetter($event) : ''"
      ></b-form-input>
      <label class="form__label" :class="value === '' ? '' : 'has-data'">
        <slot></slot>
      </label>
    </b-form-group>
  </div>
</template>

<script>
export default {
	data() {
		return {
			// value: this.title ? this.title : "",
		}
	},
	props: {
		rounded_radius: Boolean,
		type: { type: String, default: 'text' },
		title: { type: [String , Number] },
		state: { state: String },
		invalidFeedback: { state: String },
		value: { type: [String , Number], default: '' },
		required: { type: Boolean, default: true },
		textOnly: { type: Boolean, default: false },
	},
	computed: {
		formValidation() {
			return this.value.trim().length !== 0
		},
	},
	methods: {
		isLetter(e) {
			let char = String.fromCharCode(e.keyCode) // Get the character
			if (/^[a-zA-Z ]/.test(char)) return true
			// Match with regex
			else e.preventDefault() // If not match, don't add to input text
		},
	},
}
</script>
