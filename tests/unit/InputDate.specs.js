import { mount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import InputDate from '@/components/InputDate.vue'

let wrapper

describe('InputDate', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)

		wrapper = mount(InputDate, {
			date: '',
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

	test('check if the datepicker is returning correctly', async () => {
		await wrapper.setData({ date: newDate })
		const datePickerLabel = wrapper
			.find('[data-test=\'datepicker\']')
			.find('label')

		const expectedDate = formatDate(wrapper.vm.date)
		// to remove week day
		const labelAry = datePickerLabel.text().split(',')
		const result = formatDate(`${labelAry[1]}, ${labelAry[2]}`)

		expect(result).toBe(expectedDate)	
	})

	const formatDate = (date) => {
		const d = new Date(date)
		// will return date without time string.
		return d.toString().slice(0, 15)
	}
})