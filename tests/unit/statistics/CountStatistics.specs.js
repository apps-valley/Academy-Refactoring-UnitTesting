import {
	mount,
	createLocalVue
} from '@vue/test-utils'
import {
  BootstrapVue,
  BIcon
} from 'bootstrap-vue'

// import Component from '@/components/Whatever.vue'
import CountStatistics from '@/components/CountStatistics'


let wrapper

describe('Count component', () => {
	beforeEach(() => {
		const localVue = createLocalVue()
		localVue.use(BootstrapVue)
		localVue.component('b-icon', BIcon)

		wrapper = mount(CountStatistics, {
			localVue,
      propsData: {
        title: 'String',
        count: 54235,
        icon: 'certification'
      }
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
    expect(card.attributes().class).toContain('card')
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

    expect(number.exists()).toBe(true)
    expect(number.attributes().class).toContain('primary')
  });
})

describe('Test Reusability for the count component', () => {
  const ParentComponent = {
    template: `
      <count-statistics />
    `,
    propsData: {
      title: 'String',
      count: 54235,
      icon: "certification"
    },
    components: {
      'count-statistics': CountStatistics,
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
