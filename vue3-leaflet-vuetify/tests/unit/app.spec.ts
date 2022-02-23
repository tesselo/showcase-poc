import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App: Greeting exected', () => {
  it('Renders `Hello Tesseras`', () => {
      const wrapper = shallowMount(App)

      expect(wrapper.html()).toContain('Hello Tesseras')
  })
})