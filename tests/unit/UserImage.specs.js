import {
	mount,
	createLocalVue
} from '@vue/test-utils'
import UserImage from '@/components/UserImage'
import {
	BootstrapVue
} from 'bootstrap-vue'

let wrapper

describe('UserImage', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)

		wrapper = mount(UserImage, {
			localVue,
			propsData: {
				url: '1.jpg'
			}
		})
	})

	// Unmount wrapper after each test to prevent memory leaks
	afterEach(() => {
		wrapper.destroy()
	})


	
	it('should test image properties', async () => {
		const imageWrapper = wrapper.find("[data-test='user-image']")
		const images = imageWrapper.findAll('img')
		const targetImg = imageWrapper.find('img')

		expect(imageWrapper.exists()).toBe(true)
		expect(images.length).toBe(1)

		/**
		 * This tests if the default img src we provided loads
		 */
		expect(images.at(0).attributes().src).toBe('1.jpg')

		// NOTE: this should be fulfilled
		expect(targetImg.element.style.getPropertyValue('max-width')).toBe("100px");

		/**
		 * Now setting imgUrl to null
		 */
		await wrapper.setProps({
			url: null
		})

		expect(images.at(0).attributes().src).toBe('~/assets/images/icons/member-wight-full.svg')
	});
})
