import {

	mount,

	createLocalVue

} from '@vue/test-utils'

import {

	BootstrapVue

} from 'bootstrap-vue'



import ListItem from '@/components/ListItem.vue'

// import UserImage from '@/components/UserImage.vue'

// import Label from '@/components/Label.vue'



let wrapper



describe('Label', () => {

	beforeEach(() => {

		const localVue = createLocalVue()

		localVue.use(BootstrapVue)



		wrapper = mount(ListItem, {

			localVue,

		})

	})



	// Unmount wrapper after each test to prevent memory leaks

	afterEach(() => {

		wrapper.destroy()

	})





	test('displays label text', () => {

		expect(wrapper.vm).toBeTruthy()

	})

})





describe('should test reusability', () => {

	const MockParent = {

		template: `

      <list-item

        label="meow 😺"

        imageUrl="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg"

      />

    `

	}



	beforeEach(() => {

		const localVue = createLocalVue()

		localVue.use(BootstrapVue)



		wrapper = mount(MockParent, {

			localVue

		})

	})



  

	afterEach(() => {

		wrapper.destroy()

	})



	it('should mount', () => {

		expect(wrapper.vm).toBeTruthy()

	})

})

