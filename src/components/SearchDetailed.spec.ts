import { shallowMount } from '@vue/test-utils'
import SearchDetailed from './SearchDetailed.vue'

const props = { accountStart: '', results: [] }

describe('SearchDetailed inAccountNumberRange', () => {
  it('returns true as no accountStart', () => {
    let wrapper = shallowMount(SearchDetailed, { props })
    expect(wrapper.vm.inAccountNumberRange('452')).toBe(true)
  })
})
