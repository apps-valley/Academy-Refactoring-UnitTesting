<template>
  <label 
    :style="bgColor" 
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
  name: "Label",
  props: {
    text: String,
    url: String,
    icon: Boolean,
    active: Boolean,
    offline: Boolean,
    color: {
        type: String,
        default: '--color-primary'
    },
    border: String
  },
  computed: {
    bgColor() {
        return {
            '--bg-color': this.color
        };
    },
    borderColor() {
        return {
            '--bd-color': this.border
        };
    },
  }

}
</script>

<style scoped>
  label{
    background-color: var(--bg-color);
    border: 2px solid var(--bd-color);
    padding: 5px 15px;
    border-radius: 15px;
    color: white;
    display: inline-flex;
  }
  .icon{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin: 3px 2px;
  }
  .active{
    background-color: lightgreen;
    border: green 2px solid;
    color: green;
  }
  .offline{
    background-color: lightcoral;
    border: var(--color-red) 2px solid;
    color: var(--color-red);
  }
</style>