import Vue from 'vue'
import App from '@/apps/user/App.vue'

describe('title', () => {
  let Cmp, vm
  beforeEach(() => {
    Cmp = Vue.extend(App)
    vm = new Cmp({
      data: {
        messages: ['Cat']
      }
    }).$mount()
  })
  it('identic ["Cat"]', () => {
    expect(vm.messages).toEqual(['Cat'])
  })
})
