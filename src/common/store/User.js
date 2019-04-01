import * as fb from 'firebase'
import User from '@common/models/UserModel'

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async registerUser ({ commit }, { email, password }) {
      try {
        const user = await fb.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid))
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
