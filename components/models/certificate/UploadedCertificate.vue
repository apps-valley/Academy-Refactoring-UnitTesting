<template>
  <b-modal id="uploaded-certificate" centered hide-header hide-footer size="xl">
    <iframe :src="`http://docs.google.com/viewer?url=${uploadedFile}&embedded=true`" style="width:100%; height:630px;" frameborder="0"></iframe>
  </b-modal>
</template>

<script>
export default {
	props: {
		uploadedFile: String
	}
}
</script>
