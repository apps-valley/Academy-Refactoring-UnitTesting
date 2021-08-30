import { mount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import InputNumber from '@/components/InputNumber.vue'

let wrapper

describe('InputNumber', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)

		wrapper = mount(InputNumber, {
			localVue,
			propsData: {
				placeHolder: 'Input number'
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

	test('render all props', () => {
		const inputWrapper = wrapper
			.find('[data-test=\'input\']')
			.find('input')
		expect(inputWrapper.attributes()['placeholder']).toBe(wrapper.props().placeHolder)
	})

	test('check if user can input number correctly', async () => {
		const inputWrapper = wrapper
			.find('[data-test=\'input\']')
			.find('input')
		await inputWrapper.setValue(50)

		expect(inputWrapper.element.value).toBe('50')
	})
})
