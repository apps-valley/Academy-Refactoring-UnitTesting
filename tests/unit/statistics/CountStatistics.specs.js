import {
	mount,
	createLocalVue
} from '@vue/test-utils'
import {
  BootstrapVue,
  BIcon
} from 'bootstrap-vue'

// import Component from '@/components/Whatever.vue'

const MockComponent = {
  template: `
    <b-card class="rounded">
      <b-container>
        <b-row>
          <b-col>
            <b-avatar>
              <b-icon class="primary" data-test="count-icon" />
            <b-avatar>
          </b-col>

          <b-col>
            <p data-test="count-number" class="text-primary"></p>
            <p data-test="desc"></p>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
  `
}
let wrapper

describe('Count component', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)
		localVue.component('b-icon', BIcon)

		wrapper = mount(MockComponent, {
			localVue,
		})
	})

	// Unmount wrapper after each test to prevent memory leaks
	afterEach(() => {
		wrapper.destroy()
	})

	it('mounts', () => {
		expect(wrapper.vm).toBeTruthy()
	})

  it('should render component', () => {
    const card = wrapper.find('.card')
    const row = card.find('.row')
    const cols = row.findAll('.col')

    expect(card.exists()).toBe(true)
    expect(card.attributes().class).toContain('rounded')
    expect(row.exists()).toBe(true)
    expect(cols.length).toBe(2)
  });
  
  /**
   * Important!
   */
  it('should test colors', () => {
    const icon = wrapper.find("[data-test='count-icon']")
    const number = wrapper.find("[data-test='count-number']")

    expect(icon.exists()).toBe(true)
    expect(icon.attributes().class).toContain('primary')

    expect(number.exists()).toBe(true)
    expect(number.attributes().class).toContain('primary')
  });
})

describe('Test Reusability for the StudentFinancial component', () => {
  const ParentComponent = {
    template: `
      <MockComponent />
    `,
    components: {
      'MockComponent': MockComponent,
    }
  }
  beforeEach(() => {
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
