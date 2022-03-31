
// Utilities
import { shallowMount, mount } from '@vue/test-utils'
//import {VImg} from 'vuetify/components'
import TslToolbar from '@/components/Tsl-Toolbar.vue'

describe('Component Test: Tsl-Toolbar.vue ', () => {

  test('Renders Toolbar', () => {
      const wrapper = shallowMount(TslToolbar)

      expect(wrapper.find('[data-testid="toolbar-test"]').exists()).toBe(true)
  })
})
