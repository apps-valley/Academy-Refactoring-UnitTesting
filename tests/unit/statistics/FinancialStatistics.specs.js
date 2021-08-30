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

let wrapper

// NOTE: this is just a mock
// The real component should use scoped slots or props
const mockComponent = {
  template: `
    <b-row data-test="row" tag="b-card">
      <b-col data-test="icon-col">
        <b-avatar>
          <b-icon icon="arrow-up" data-test="icon" />
        </b-avatar>
      </b-col>
      <b-col data-test="text-col-wrapper">
        <b-row data-test="top-text">
          <p>
            {{ topText }}
          </p>
        </b-row>
        <b-row data-test="middle-text">
          <p data-test="middle-paragraph">
            {{ middleText }}
          </p>
          <h5 data-test="middle-title">
            {{ middleTitle }}
          </h5>
        </b-row>
        <b-row data-test="bottom-text">
          {{ bottomText }}
        </b-row>
      </b-col>
    </b-row>
  `,
  props: {
      topText: {
        type: String,
        default: 'meow 😺'
      },
      middleText: {
        type: String,
        default: 'this is a cat that'
      },
      middleTitle: {
        type: String,
        default: 'Meowwwws 😺😺😺'
      },
      bottomText: {
        type: String,
        default: 'Cats also purrrr 😺😺😺'
      }
    }
  }

describe('Type#1 => Financial cards', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)
    localVue.component('b-icon', BIcon)
		wrapper = mount(mockComponent, {
			localVue,
      
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



    it('should test icon properties', () => {
      const icon = wrapper.find("[data-test='icon']")
      
      /**
       * This following line should test image fixed hight limitation
       * or max height..
       * it shouldn't be exact 2rem, but I think it is better to use rem
       * instead of pixels
       */
      expect(icon.attributes().width).toBe('1em') // change the 1em
      
  });


  it('should test top-text properties', () => {
    const topText = wrapper.find("[data-test='top-text']").find('p')
    
    expect(topText.text()).toBe('meow 😺')
    expect(topText.attributes().fontSize).toBe('0.9em') // shouldn't be 0.9 rem
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
  const targetComponent = {
    template: `
      <mock-component />
    `,
    components: {
      'mock-component': mockComponent
    }
  }
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)
    localVue.component('b-icon', BIcon)
		wrapper = mount(targetComponent, {
			localVue,
      
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
