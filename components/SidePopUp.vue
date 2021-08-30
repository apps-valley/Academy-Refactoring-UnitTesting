<template>
    <div >

    <b-sidebar
      id="sidebar-backdrop"
      backdrop-variant="dark"
      backdrop
      no-header-close
      lazy
      right
      width="35rem"
      data-test="sidebar"
    >
      <div class="text-center">
       <h5>{{title}}</h5>
       <h4 class="text-secondary">{{title_2}}</h4> 
      </div>
      <br>
      <div class="text-center">
        <InputSelect align-self="center" placeHolder="enter name..." :options="['Small', 'Medium', 'Large', 'Extra Large']" />
        <p>{{text}}</p>
      </div>
      <br>
      <ListComponent />

    </b-sidebar>
  </div>
</template>

<script>
import ListComponent from './ListComponent.vue'
import InputSelect from './InputSelect.vue'
export default {
	name: 'SidePopUp',
	components: {ListComponent, InputSelect},
	props: {
		title: String,
		title_2: String,
		text: String,
		listType: String
	}, 
}
</script>

