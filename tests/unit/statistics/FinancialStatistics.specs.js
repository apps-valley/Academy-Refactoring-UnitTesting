import {
	mount,
	createLocalVue
} from '@vue/test-utils'

import {
  BootstrapVue,
  BIcon
} from 'bootstrap-vue'

// import component here
// import Statistics from '@/components/WhateverComponent'
import FinancialStatistics from '@/components/FinancialStatistics'
let wrapper

// NOTE: this is just a mock
// The real component should use scoped slots or props


describe('Type#1 => Financial cards', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)
    localVue.component('b-icon', BIcon)
		wrapper = mount(FinancialStatistics, {
			localVue,
      propsData: {
        bg: '#000',
        icon: 'certification',
        topText: 'meow 😺',
        middleText: 'this is a cat that', 
        middleTitle: 'Meowwwws 😺😺😺',
        bottomText: 'Cats also purrrr 😺😺😺', 
      }
		})
	})

	// Unmount wrapper after each test to prevent memory leaks
	afterEach(() => {
		wrapper.destroy()
	})



  it('should render component', () => {
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })



  /**
   * Case 1 => financial format
   * This could be imagined based on grid system and box design
   * one card contents:
   * -- one wrapper row
   * -- two cols
   * ----- right col => for icons
   * ----- left col => contains 3 rows or paragraphs for other elements
   */
  it('should render cards with all elements', () => {
      const wrapperRow = wrapper.find("[data-test='row']")
      const cols = wrapper.findAll('.col')

      const icon = wrapper.find("[data-test='icon']")
      const textColWrapper = wrapper.find("[data-test='text-col-wrapper']")

      expect(wrapperRow.exists()).toBe(true)
      expect(cols.length).toBe(2)
      expect(icon.exists()).toBe(true)
      expect(textColWrapper.findAll('.row')).toHaveLength(3)
    });



  it('should test top-text properties', () => {
    const topText = wrapper.find("[data-test='top-text']").find('div')
    
    expect(topText.text()).toBe('meow 😺')
  });
  
  it('should test middle-text properties', () => {
    const middleParagraph = wrapper.find("[data-test='middle-paragraph']")
    const middleTitle = wrapper.find("[data-test='middle-title']")
    
    expect(middleParagraph.exists()).toBeTruthy()
    expect(middleParagraph.text()).toBe('this is a cat that')

    expect(middleTitle.exists()).toBeTruthy()
    expect(middleTitle.text()).toBe('Meowwwws 😺😺😺')
  });


  it('should test bottom-text properties', () => {
    const bottomText = wrapper.find("[data-test='bottom-text']")

    expect(bottomText.exists()).toBeTruthy()
    expect(bottomText.text()).toBe('Cats also purrrr 😺😺😺')
  });
});


/**
 * 
 */
describe('Type#1 => Test reusability for Financial cards ', () => {
  beforeEach(() => {
		

  const targetComponent = {
    template: `
      <financial-statistics />
    `,    
    components: {
      FinancialStatistics
    }
  }
  const localVue = createLocalVue()
		localVue.use(BootstrapVue)
    localVue.component('b-icon', BIcon)
		wrapper = mount(targetComponent, {
			localVue,
      propsData: {
        bg: '#000',
        topText: 'meow 😺😺',
        middleText: 'this is a cat that', 
        middleTitle: 'Meowwwws 😺😺😺',
        bottomText: 'Cats also purrrr 😺😺😺',
        icon: 'certification'
      },
		})

	})

	// Unmount wrapper after each test to prevent memory leaks
	afterEach(() => {
		wrapper.destroy()
	})

  it('should mount properly', () => {
    expect(wrapper.vm).toBeTruthy()
  });
  
})
