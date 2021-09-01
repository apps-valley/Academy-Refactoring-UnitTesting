import { mount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import InputTextArea from '@/components/InputTextArea.vue'

let wrapper

describe('InputTextArea', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)

		wrapper = mount(InputTextArea, {
			text: '',
			localVue,
			propsData: {
				placeHolder: 'Input textarea',
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

	test('render all props', async () => {
		const inputWrapper = wrapper.find('[data-test=\'input\']')

		expect(inputWrapper.attributes()['placeholder']).toBe(
			wrapper.props().placeHolder
		)
	})

	test('could input value', async () => {
		const inputWrapper = wrapper.find('[data-test=\'input\']')

		inputWrapper.element.value = 'new value'
		inputWrapper.trigger('input')

		expect(wrapper.vm.text).toBe('new value')
	})
})
