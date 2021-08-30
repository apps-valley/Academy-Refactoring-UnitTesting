<template>
  <div>
    <b-row style="border: 1px solid black; border-radius: 40px;height: 60px; width: 300px;" align-v="center">
      <b-col cols="10">
        <input v-model="text" :placeholder="placeHolder" style="border: none; background-color: transparent" type="text"
          class="p-3" tabindex="-1" data-test="input" />
      </b-col>
      <b-col cols="2">
        <b-img :src="dynamicImg" align-self="end" data-test="icon"></b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
	name: 'InputText',
	props: {
		placeHolder: String,
		icon: String
	},
	data() {
		return {
			text: ''
		}
	},
	computed: {
		dynamicImg() {
			if (this.icon) return require(`@/assets/images/icons/${this.icon}.svg`)
		}
	}
}

</script>
