import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
// import routes from '@/apps/user/router'
import ConstructorTable from '@/apps/user/components/constructor/ConstructorTable.vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.use(Vuetify)
localVue.use(Vuex)

describe('ConstructorTable ready', () => {
  let store
  let getters

  beforeEach(() => {
    getters = {
      clicks: () => 2,
      inputValue: () => 'input'
    }
    store = new Vuex.Store({
      getters
    })
  })
  it('Отображает "state.inputValue" в первом теге p', () => {
    const wrapper = shallowMount(ConstructorTable, { store, localVue })
    const p = wrapper.find('p')
    expect(p.text()).toBe(getters.inputValue())
  })

  it('Отображает "state.clicks" во втором теге p', () => {
    const wrapper = shallowMount(ConstructorTable, { store, localVue })
    const p = wrapper.findAll('p').at(1)
    expect(p.text()).toBe(getters.clicks().toString())
  })

  // it('matches snapshot', () => {
  //   const msg = 'message'
  //   const localVue = createLocalVue()
  //
  //   const wrapper = shallowMount(ConstructorTable, {
  //     localVue: localVue,
  //     propsData: { msg }
  //   })
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
})
