<template>
  <label
    :style="{ 'background-color': this.color }"
    :class="{
      'active' : active,
      'offline': offline
      }">
    <b-img
      v-if="icon"
      class="icon"
      :src="url"
      alt="icon">
    </b-img>
    {{text}}
  </label>
</template>

<script>
export default {
	name: 'Label',
	props: {
		text: String,
    color: {
			type: String,
			default: 'var(--color-primary)'
		},
		url: String,
		icon: Boolean,
		active: Boolean,
		offline: Boolean,
		
		border: String
	},
	data() {
		return {}
	},

}
</script>

<style scoped>
  label{
    background-color: var(--bg-color);
    border: 1px solid var(--bd-color);
    padding: 2px 15px;
    border-radius: 25px;
    color: white;
    display: inline-flex;
    font-size: 12px;
  }
  .icon{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin: 3px 2px;
  }
  .active{
    background-color: #24e8a73a;
    border: var(--color-secondry) 2px solid;
    color: var(--color-secondry);
  }
  .offline{
    background-color: #ff00443a;
    border: var(--color-red) 2px solid;
    color: var(--color-red);
  }
</style>
