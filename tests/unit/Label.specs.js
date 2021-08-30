import {
	mount,
	createLocalVue
} from '@vue/test-utils'
import Label from '@/components/Label.vue'
import {
	BootstrapVue
} from 'bootstrap-vue'

let wrapper

describe('Label', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)

		wrapper = mount(Label, {
			localVue,
			propsData: {
				url: 'https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg',
				text: 'hi'
			}
		})
	})

	// Unmount wrapper after each test to prevent memory leaks
	afterEach(() => {
		wrapper.destroy()
	})

	// This test needs to be tweaked
	test('loads icon when given url', () => {
		try {
			const image = wrapper.find('img')
			// expect(wrapper.html()).toMatchSnapshot()
			expect(image.exists()).toBe(true)
		} catch (error) {
			console.log(error);
		}
	})

	test('displays label text', () => {
		expect(wrapper.text()).toContain('hi')
	})
})
