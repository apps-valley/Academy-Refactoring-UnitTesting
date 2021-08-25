import { mount } from '@vue/test-utils'
import Label from '@/components/admin/Label.vue'

describe('Label', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Label)
    expect(wrapper.vm).toBeTruthy()
  })
  test('loads icon when given url', () => {
        const wrapper = mount(Label, {
            propsData: {
                url: 'https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg'
            }
        })
        const image = wrapper.findAll('.icon')
        expect(image.length).toBe(1);
  })
  test('displays label text', () => {
    const wrapper = mount(Label, {
      propsData: {
        text: 'hi'
      }
    })
    expect(wrapper.text()).toContain('hi')
  })
//   test('manipulates state', async () => {
//     const wrapper = mount(Label)

//     await wrapper.setData({ isActive: true,
//         isOffline: false,
//         withIcon: false })
//   })
//   expect(Label.findAll('.active').length.toBe(1));  
})