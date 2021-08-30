<template>
  <div z-index="600">
    <div v-for="item, index in myJson.data" :key="item.id" class=" align-items-center" data-test="list-item">
      <b-row align-h="center">
        <b-col cols="1" align-self="center" data-test="list-item-index">{{1+index++}} </b-col>
        <b-col cols="10" align-self="center">
          <ListItem :title="item.title" :imageUrl="item.image" :label="item.label" data-test="list-item-content"/>
        </b-col>
      </b-row>
      <br>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
import json from './json/data.json'
export default {
	name: 'ListComponent',
	components: {
		ListItem
	},
	data() {
		return {
			count: 0,
			myJson: json
		}
	},


}

</script>

<style scoped>

</style>
