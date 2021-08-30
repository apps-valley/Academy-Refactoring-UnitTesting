import { mount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import CustomButtonWrapper from '@/components/CustomButtonWrapper.vue'

let wrapper

// This test might be simple because Button test was tested already.
describe('CustomButtonWrapper', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)

		wrapper = mount(CustomButtonWrapper, {
			localVue,
			propsData: {
				classes:
          'button__element button btn-gradient-primary rounded_radius no_outline',
				to: '/login',
				icon: null,
				btnTitle: 'Hello',
				pullRight: true,
				circle: false
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
})
