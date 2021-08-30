import { mount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import Button from '@/components/Button.vue'

let wrapper, button

describe('Button', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)

		wrapper = mount(Button, {
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

		button = wrapper.find('[data-test=\'button\']')
	})

	// Unmount wrapper after each test to prevent memory leaks
	afterEach(() => {
		wrapper.destroy()
	})

	test('is a Vue instance', () => {
		expect(wrapper.vm).toBeTruthy()
	})

	test('render all given classes', () => {
		const btnClassesString = button.classes().join(' ')
		expect(btnClassesString).toContain(wrapper.props().classes)
	})

	// Consider https://stackoverflow.com/questions/59055263/unit-testing-vue-routing-with-b-button-to
	test('redirect page when clicking button', () => {
		expect(button.props('to')).toBe('/login')
	})

	test('render title correctly', () => {
		const btnText = wrapper.find('[data-test=\'button-text\']')
		expect(btnText.text()).toBe(wrapper.props().btnTitle)
	})

	// TODO: this test should be modified regarding svg or b-icon.
	test('change text direction by pullRight', async () => {
		// TODO: check if elements were rendered correctly in pullRight: true
		await wrapper.setProps({
			pullRight: false
		})
		// TODO: check if elements were rendered correctly in pullRight: false
	})

	test('render circle button', async () => {
		await wrapper.setProps({
			circle: true
		})
		const btnContainer = wrapper.find('[data-test=\'button-container\']')
		expect(btnContainer.classes()).toContain('circle')
	})
})
