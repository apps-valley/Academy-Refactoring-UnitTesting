import { mount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import InputWrapper from '@/components/InputWrapper.vue'

let wrapper

// This test might be simple because Button test was tested already.
describe('InputWrapper', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)

		wrapper = mount(InputWrapper, {
			localVue,
			propsData: {
				type: 'Select',
				text: 'Sign up',
				icon: 'book',
				id: 'input_1',
				options: ['see', 'me']
			},
			stubs: ['InputSelect', 'InputCheckbox']
		})
	})

	// Unmount wrapper after each test to prevent memory leaks
	afterEach(() => {
		wrapper.destroy()
	})

	test('is a Vue instance', () => {
		expect(wrapper.vm).toBeTruthy()
	})
})
