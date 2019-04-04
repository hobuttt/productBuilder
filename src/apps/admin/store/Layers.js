export default {
  state: {
    layers: []
  },
  mutations: {
    addLayer (state, payload) {
      state.layers.push(payload)
    }
  },
  getters: {
    getLayers (state) {
      return state.layers
    }
  }
}
