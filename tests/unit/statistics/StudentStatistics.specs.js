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
    <b-card data-test="stat-card">
      <b-row data-test="stat-top-row">
        <b-col>

        </b-col>
        <b-col>

        </b-col>
      </b-row>

      <b-row data-test="stat-bottom-row">
        <b-col>

        </b-col>
        <b-col>

        </b-col>
      </b-row>
    </b-card>
  `
}

describe('Test StudentFinancial component', () => {
  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(BootstrapVue)
    
    wrapper = mount(MockComponent, {
      localVue,
    })

  })
  
  
  afterEach(() => {
    wrapper.destroy()
  })

  it('should define component', () => {
    const cardWrapper = wrapper.find("[data-test='stat-card']")
    const topRow = wrapper.find("[data-test='stat-top-row']")
    const bottomRow = wrapper.find("[data-test='stat-bottom-row']")
    const topRowCols = topRow.findAll(".col") // gradient title with tabs
    const bottomRowCols = bottomRow.findAll(".col")

    expect(cardWrapper.exists()).toBe(true)
    expect(topRow.exists()).toBe(true)
    expect(bottomRow.exists()).toBe(true)
    expect(topRowCols.length).toBe(2)
    expect(bottomRowCols.length).toBe(2)
    expect(cardWrapper.attributes().border).toBe('3em 1em 1em 1em') // doesn't have to be like this
  });


  // SECTION: Top row
  describe('should test top row content', () => {
    it('title col', () => {
      const topRow = wrapper.find("[data-test='stat-top-row']")
      const topRowCols = topRow.findAll(".col") // gradient title with tabs
      const topRowTitleCol = topRowCols.at(0)
      const TopRowTitleColIcon= topRowTitleCol.find("[data-test='stat-icon']")
      const TopRowTitleColText = topRowTitleCol.find("[data-test='stat-title']")
      
      expect(topRowTitleCol.exists()).toBe(true)
      expect(TopRowTitleColText.exists()).toBe(true)
      expect(TopRowTitleColText.text()).toBe('😸')
      expect(TopRowTitleColIcon.exists()).toBe(true)
    });
    
    it('tabs col', () => {
      const topRowTabsCol = topRowCols.at(1)
      const tabs = wrapper.find("[data-test='stat-tabs']")
      const tabElements = tabs.findAll(".tab")

      expect(topRowTabsCol.exists()).toBe(true)
      expect(tabs.exists()).toBe(true)
      expect(tabElements.length).toBe(3)
    });
  });
  // SECTION: ./Top row

  /**
   * 
   * Pending till we decide what's the best/fastest way
   * to build and render tabs
   */
});


describe('Test Reusability for the StudentFinancial component', () => {
  const ParentComponent = {
    template: `
      <MockComponent />
    `
  }
  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(BootstrapVue)

    wrapper = mount(ParentComponent, {
      localVue,
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })
})
