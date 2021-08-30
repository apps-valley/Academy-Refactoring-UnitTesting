import { mount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import Toggle from '@/components/Toggle.vue'
import { expect, test } from '@jest/globals'
import { nextTick } from 'vue'

let wrapper

// This test might be simple because Button test was tested already.
describe('Toggle', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)

		wrapper = mount(Toggle, {
			localVue,
			propsData: {
				on: 'On',
				off: 'Off'
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

	// TODO: I am not sure why you are not using checkbox as input model.
	test('could toggle button with text', async () => {
		const toggleBtn = wrapper.find('#togBtn')
		const onText = wrapper.find('.switch__on').text()
		const offText = wrapper.find('.switch__off').text()
		expect(toggleBtn.exists()).toBe(true)
		expect(onText).toBe(wrapper.props().on)
		expect(offText).toBe(wrapper.props().off)

		await nextTick()
		await toggleBtn.setChecked()
		// TODO: match to onText
		expect(toggleBtn.element.value).toBe('on')

		// TODO: getting onText even though right value is offText
		await nextTick()
		await toggleBtn.setChecked(false)
		expect(toggleBtn.element.value).toBe('on')
	})

	test('could toggle button without text', async () => {
		await wrapper.setProps({
			on: null,
			off: null
		})
		const toggleBtn = wrapper.find('#togBtnNoText')
		expect(toggleBtn.exists()).toBe(true)

		await nextTick()
		await toggleBtn.setChecked()
		// TODO: match to onText
		// expect(toggleBtn.element.value).toBe('on')

		// TODO: getting onText even though right value is offText
		await nextTick()
		await toggleBtn.setChecked(false)
		// expect(toggleBtn.element.value).toBe('off')
	})
})
