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
import ChartStatistics from '@/components/ChartStatistics'
let wrapper

// NOTE: this is just a mock
// We need to use a chart child-component for this mission
// Feel free to use Chartjs 


describe('Test ChartStatistics component', () => {
  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(BootstrapVue)
    
    wrapper = mount(ChartStatistics, {
      localVue,
      stubs: ['ChartComponent'],
      propsData: {
        title: 'String',
        greenText: 'String',
        grayText: 'String',
        steps: 12,
        tSteps: 34
      }
    })

  })
  
  
  afterEach(() => {
    wrapper.destroy()
  })

  it('should mount', () => {
    expect(wrapper.vm).toBeTruthy()
  });


  it('should get a row with 2 cols', () => {
    const row = wrapper.find("[data-test='row']")
    const cols = row.findAll('.col')

    expect(row.exists()).toBeTruthy()
    expect(cols.length).toBe(2)
  });
  /**
   * NOTE: pending chartjs to be implemented
   */
})

describe('should be reusable', () => {
  beforeEach(() => {
    const ParentComponent = {
      template: '<ChartStatistics />',
      components: {
        ChartStatistics
      }
    }
    const localVue = createLocalVue()
    localVue.use(BootstrapVue)
    
    wrapper = mount(ParentComponent, {
      localVue,
    })

  })


  afterEach(() => {
    wrapper.destroy()
  })

  it('should mount', () => {
    expect(wrapper.vm).toBeTruthy()
  });
  
})
