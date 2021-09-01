<template>
  <InputSelect v-if="type==='Select'" :placeHolder='text' :options='options' />
  <!-- NOTE: Excellent use of vue dynamic component -->
  <component v-else-if="type!='Checkbox'" :is="inputComponent" :placeHolder='text' />
  <InputCheckbox v-else :text='text' :icon='icon' :id="id" />
</template>

<script>
  export default {
    name: 'InputWrapper',
    props: ['type', 'text', 'icon', 'id', 'options'],
    computed: {
      inputComponent() {
        // TODO: Let's capitalize the first letter of this.type in the next update
        // Good work!
        return "Input" + this.type
      }
    }
  }

</script>

<style scoped>

</style>
