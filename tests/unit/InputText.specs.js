import { mount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import InputText from '@/components/InputText.vue'

let wrapper

describe('InputText', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)

		wrapper = mount(InputText, {
			text: '',
			localVue,
			propsData: {
				placeHolder: 'Input text',
				icon: 'book'
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
		expect(wrapper.props('icon')).toBe('book')
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
