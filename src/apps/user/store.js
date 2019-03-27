import Vue from 'vue'
import Vuex from 'vuex'
import Layers from '@user/store/Layers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Layers
  }
})
