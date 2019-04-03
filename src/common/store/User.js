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
      commit('clearError')
      commit('setLoading', true)
      try {
        const USER = await fb.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(USER.uid))
        commit('setLoading', false)
        commit('setSnackbar', {
          text: 'Успешная регистрация',
          type: 'success',
          active: true
        })
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message) // Устанавливаем ошибку в ответ на запрос
        commit('setSnackbar', {
          text: 'Ошибка регистрации',
          type: 'error',
          active: true
        })
        throw error
      }
    },
    async loginUser ({ commit }, { email, password }) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const USER = await fb.auth().signInWithEmailAndPassword(email, password)
        commit('setUser', new User(USER.uid))
        commit('setLoading', false)
        commit('setSnackbar', {
          text: 'Успешный вход',
          type: 'success',
          active: true
        })
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        commit('setSnackbar', {
          text: 'Неправильно введены данные',
          type: 'error',
          active: true
        })
        throw error
      }
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
