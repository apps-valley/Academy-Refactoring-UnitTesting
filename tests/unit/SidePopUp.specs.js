import { mount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import ListComponent from '@/components/ListComponent.vue'
import InputSelect from '@/components/InputSelect.vue'
import SidePopUp from '@/components/SidePopUp.vue'
import { expect, test } from '@jest/globals'

let wrapper

// This test might be simple because Button test was tested already.
describe('SidePopUp', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)

		wrapper = mount(SidePopUp, {
			localVue,
			propsData: {
				title: 'title',
				title_2: 'title_2',
				text: 'text',
			},
			components: {
				InputSelect,
				ListComponent
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

	// TODO: should have toggle button to show/hide sidebar
	test('render all elements', () => {
		const sidebar = wrapper.find('[data-test=\'sidebar\']')
		// const title = wrapper.find('h5')
		// const title2 = wrapper.find('h4')
		// const text = wrapper.find('p')

		expect(sidebar.exists()).toBe(true)
		// expect(title.text()).toBe(wrapper.props().title)
	// 	expect(title2.text()).toBe(wrapper.props().title_2)
	// 	expect(text.text()).toBe(wrapper.props().text)
	})
})
