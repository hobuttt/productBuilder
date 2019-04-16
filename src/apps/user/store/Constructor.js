export default {
  state: {
    layers: []
  },
  mutations: {
    addLayer (state, payload) {
      state.layers.push(payload)
    },
    deleteLayer (state, payload) {
      let deletedLayer = state.layers.find(layer => layer.id === payload.id)
      let index = state.layers.indexOf(deletedLayer)
      state.layers.splice(index, 1)
    }
  },
  getters: {
    getLayers (state) {
      return state.layers
    }
  }
}
