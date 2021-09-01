import { mount } from '@vue/test-utils'
import UserImage from '@/components/UserImage.vue'

describe('UserImage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(UserImage)
    expect(wrapper.vm).toBeTruthy()
  })
  test('loads image when given url', () => {
    const wrapper = mount(UserImage, {
        propsData: {
            url: 'https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg'
        }
    })
    expect(wrapper.isEmpty()).toBe(false)
  })
})
