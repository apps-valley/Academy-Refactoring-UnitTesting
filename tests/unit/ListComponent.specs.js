import { mount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import ListComponent from '@/components/ListComponent.vue'
import ListItem from '@/components/ListItem.vue'
import listData from '@/components/json/data.json'
import { expect, test } from '@jest/globals'

let wrapper

// This test might be simple because Button test was tested already.
describe('ListComponent', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)

		wrapper = mount(ListComponent, {
			localVue,
			propsData: {
				type: 'Select',
				text: 'Sign up',
				icon: 'book',
				id: 'input_1',
				options: ['see', 'me']
			},
			components: {
				ListItem
			}
		})
	})

	// Unmount wrapper after each test to prevent memory leaks
	afterEach(() => {
		wrapper.destroy()
	})

	test('is a Vue instance', () => {
		expect(wrapper.vm).toBeTruthy()
	})

	test('render all elements', () => {
		const listItems = wrapper.findAll('[data-test=\'list-item\']')
		const listItemIndexs = wrapper.findAll('[data-test=\'list-item-index\']')
		const listItemContents = wrapper.findAll('[data-test=\'list-item-content\']')

		const expectLength = listData.data.length
    
		expect(listItems.length).toBe(expectLength)
		expect(listItemIndexs.length).toBe(expectLength)
		expect(listItemIndexs.at(0).text()).toBe('1')
		expect(listItemContents.length).toBe(expectLength)
	})
})
