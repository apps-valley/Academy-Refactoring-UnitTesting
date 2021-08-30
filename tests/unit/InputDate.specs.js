import { mount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import InputDate from '@/components/InputDate.vue'

let wrapper

describe('InputDate', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)

		wrapper = mount(InputDate, {
			localVue,
			propsData: {
				placeHolder: 'Input date'
			}
		})
	})

	const newDate = new Date()

	// Unmount wrapper after each test to prevent memory leaks
	afterEach(() => {
		wrapper.destroy()
	})

	test('is a Vue instance', () => {
		expect(wrapper.vm).toBeTruthy()
	})

	test('render all props', () => {
		const datePickerLabel = wrapper
			.find('[data-test=\'datepicker\']')
			.find('label')
		expect(datePickerLabel.text()).toBe(
			wrapper.props().placeHolder
		)
	})

	// TODO: consider this url : https://github.com/buefy/buefy/issues/1846https://github.com/buefy/buefy/issues/1846
	test('check if the datepicker is returning correctly', async () => {
		const datePicker = wrapper.find(
			'[data-test=\'datepicker\']'
		)
		const datePickerTrigger = wrapper
			.find('[data-test=\'datepicker\']')
			.find('button')
		// await datePickerTrigger.trigger('click')

		console.log(
			datePicker,
			'---',
			datePickerTrigger
		)
	})
})