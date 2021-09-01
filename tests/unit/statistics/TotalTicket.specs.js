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

import TotalTicket from '@/components/TotalTicket'

describe('Test TotalTicket component', () => {
  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(BootstrapVue)
    localVue.component('b-icon', BIcon)
    
    wrapper = mount(TotalTicket, {
      localVue,
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
})

describe('should be reusable', () => {
  beforeEach(() => {
    const ParentComponent = {
      template: '<total-ticket />',
      components: {
        TotalTicket
      }
    }
    const localVue = createLocalVue()
    localVue.use(BootstrapVue)
    localVue.component('b-icon', BIcon)
    
    wrapper = mount(ParentComponent, {
      localVue,
      propsData: {
        title: 'String',
        count: 54235,
        icon: 'certification'
      }
    })

  })


  afterEach(() => {
    wrapper.destroy()
  })

  it('should mount', () => {
    expect(wrapper.vm).toBeTruthy()
  });
  
})
