import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
// import routes from '@/apps/user/router'
import App from '@/apps/user/App.vue'
import Vuetify from 'vuetify'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('title', () => {
  it('matches snapshot', () => {
    const msg = 'message'
    const localVue = createLocalVue()
    localVue.use(Vuetify)

    const wrapper = shallowMount(App, {
      localVue: localVue,
      propsData: { msg }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
