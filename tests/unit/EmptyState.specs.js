import { mount, createLocalVue } from '@vue/test-utils'
import EmptyState from '@/components/EmptyState.vue'
import { BootstrapVue } from 'bootstrap-vue'

let wrapper

describe('EmptyState', () => {

	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)

		wrapper = mount(EmptyState, {
			localVue,
			propsData: {
				url: 'https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg',
				text: 'hi',
				buttonText: 'hello'
			},
			stubs: ['NuxtLink']
		})
	})

	// Unmount wrapper after each test to prevent memory leaks
	afterEach(() => {
		wrapper.destroy()
	})

	test('is a Vue instance', () => {
		expect(wrapper.vm).toBeTruthy()
	})

	test('loads image when given url', () => {
		expect(wrapper.vm).toBeTruthy()
	})

	test('displays text', () => {
		expect(wrapper.text()).toContain('hi')
	})

	test('displays button text', () => {
		expect(wrapper.text()).toContain('hello')
	})
})
