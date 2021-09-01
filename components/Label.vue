<template>
  <label
    :style="{ 'background-color': this.color }"
    :class="{
      'active' : active,
      'offline': offline
      }"
      class="text-center" align-v>
    <!-- NOTE: Using require in the markup breaks SSR (We could move it to computed) -->
    <b-img
      align-self-center
      v-if="icon"
      class="icon my-1"
      :src="require(`@/assets/images/icons/${icon}.svg`)"
      alt="icon">
    </b-img>
    <span class="my-1">{{text}}</span>
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
		icon: String,
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
    padding: 3px 15px;
    border-radius: 25px;
    color: white;
    display: inline-flex;
    font-size: 12px;
  }
  .icon{
      width: 16px;
      height: 16px;
      margin: 3px 4px;
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
