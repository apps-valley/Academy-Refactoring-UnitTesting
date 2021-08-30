<template>
  <div>
    <b-form-textarea id="textarea" v-model="text" :placeholder="placeHolder"
      style=" border-radius: 40px;height: 250px; width: 300px;"></b-form-textarea>
  </div>
</template>

<script>
  export default {
    name: 'InputTextArea',
    data() {
      return {
        text: ''
      }
    },
    props: {
      placeHolder: String
    }
  }

</script>
