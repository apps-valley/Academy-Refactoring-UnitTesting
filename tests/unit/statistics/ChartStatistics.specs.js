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
// We need to use a chart child-component for this mission
// Feel free to use Chartjs 
const MockComponent = {
  template: `
    <b-card variant="primary">
      <b-container>
        <b-row data-test="row">
          <b-col cols="12" data-test="title">
            <h3>
              {{ title }}
            </h3>
          </b-col>

          <b-col cols="12" data-test="progress-col">
            <ChartComponent :color="primary" data-test="prog" />
          </b-col>
        </b-row>
      </b-container>
    </b-card>
  `,
  props: {
    text: {
      type: String,
      default: 'Meow 😺'
    },
    count: {
      type: String,
      default: '123456'
    }
  }
}

describe('Test TotalTicket component', () => {
  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(BootstrapVue)
    
    wrapper = mount(MockComponent, {
      localVue,
      stubs: ['ChartComponent']
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
      template: '<MockComponent />',
      components: {
        MockComponent
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
