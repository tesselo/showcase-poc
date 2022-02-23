import { shallowMount } from '@vue/test-utils'
import HelloTessera from '@/components/HelloTessera.vue'

describe('Component Props: HelloTessera', () => {

  it('Renders `msg` prop', () => {
    const msg = 'Message property test'
    const wrapper = shallowMount(HelloTessera, {
      props: { 
        msg
      }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it('Renders `subMsg` props in hello tessera component', () => {
    const subMsg = 'Sub message property test'
    const wrapper = shallowMount(HelloTessera, {
      props: { 
        subMsg
      }
    })
    expect(wrapper.text()).toMatch(subMsg)
  })
})