import Vue from 'vue'
import Vuex from 'vuex'
import Shared from '@common/store/Shared'

import Constructor from '@user/store/Constructor'
import User from '@common/store/User'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Shared,
    User,
    Constructor
  }
})
