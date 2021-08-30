import { mount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import InputSelect from '@/components/InputSelect.vue'

let wrapper

describe('InputSelect', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)

		wrapper = mount(InputSelect, {
			localVue,
			propsData: {
				selection: 'Input select',
				options: ['see', 'me']
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
		const inputWrapper = wrapper.find('[data-test=\'input\']').find('input')
		const options = wrapper
			.find('[data-test=\'options-list\']')
			.findAll('option')
		expect(inputWrapper.attributes()['placeholder']).toBe(
			wrapper.props().placeHolder
		)
		expect(options.length).toBe(2)
	})

	test('could select other options', async () => {
		const optionWrapper = wrapper.find('[data-test=\'options-list\']')
		const options = optionWrapper.findAll('option')
		await options.at(1).setSelected()

		expect(optionWrapper.find('option:checked').element.value).toBe('me')
	})
})
