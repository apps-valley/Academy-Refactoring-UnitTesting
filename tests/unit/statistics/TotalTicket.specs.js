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
const MockComponent = {
  template: `
    <b-card variant="primary" style="border-radius: 50% 50% 5% 5%">
      <b-container>
        <b-row data-test="row">
          <b-col data-test="icon-col">
            <b-avatar>
              <b-icon :icon="user" data-test="icon" />
            </b-avatar>
          </b-col>
          
          <b-col>
            <p>
              {{ text }}
            </p>

            <h5>
              {{ count }}
            </h5>
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
    localVue.component('b-icon', BIcon)
    
    wrapper = mount(MockComponent, {
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


  it('should test icon properties', () => {
    const icon = wrapper.find("[data-test='icon']")

    expect(icon.attributes().width).toBe('1em') // change the 1em
});
  
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
    localVue.component('b-icon', BIcon)
    
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
