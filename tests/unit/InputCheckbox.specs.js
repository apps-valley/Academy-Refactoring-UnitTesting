import { mount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import InputCheckbox from '@/components/InputCheckbox.vue'

let wrapper

describe('InputCheckbox', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)

		wrapper = mount(InputCheckbox, {
			localVue,
			propsData: {
				id: 'checbox_1',
				icon: 'book',
				text: 'checkbox',
			},
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
		const checkbox = wrapper.find('[data-test=\'checkbox\']')
		const checboxLabel = wrapper.find(
			'[data-test=\'checkbox-label\']'
		)
		expect(checkbox.attributes()['id']).toBe(wrapper.props().id)
		expect(checboxLabel.text()).toBe(wrapper.props().text)
		expect(wrapper.props('icon')).toBe('book')
		// This way doesn't work since all assets will have another names in production.
		// expect(checkboxImage.attr().src).toBe(wrapper.props().icon)
	})

	test('can change checkbox value', async () => {
		const checkbox = wrapper.find('[data-test=\'checkbox\']').find('input')
		await checkbox.setChecked()
		expect(checkbox.element.checked).toBeTruthy()
		await checkbox.setChecked(false)
		expect(checkbox.element.checked).toBeFalsy()
	})
})
