
// Utilities
import { shallowMount } from '@vue/test-utils'
import Map from '@/components/tsl-map/Tsl-Map.vue'

describe('Component Test: Tsl-Map.vue ', () => {

  test('Renders `Leaflet Map`', () => {
      const wrapper = shallowMount(Map)
  
      expect(wrapper.find('[data-testid="map-test"]').exists()).toBe(true)
  })
})
