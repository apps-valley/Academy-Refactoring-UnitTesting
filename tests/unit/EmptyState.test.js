import { mount } from '@vue/test-utils'
import EmptyState from '@/components/admin/EmptyState.vue'

describe('EmptyState', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(EmptyState)
    expect(wrapper.vm).toBeTruthy()
  })
  test('loads image when given url', () => {
    const wrapper = mount(EmptyState, {
        propsData: {
            url: 'https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg'
        }
    })
    expect(wrapper.isEmpty()).toBe(false)
  })
  test('displays text', () => {
    const wrapper = mount(EmptyState, {
      propsData: {
        text: 'hi'
      }
    })
    expect(wrapper.text()).toContain('hi')
  })
  test('displays button text', () => {
    const wrapper = mount(EmptyState, {
      propsData: {
        buttonText: 'hello'
      }
    })
    expect(wrapper.text()).toContain('hello')
  })
})