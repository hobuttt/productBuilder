import HttpClient from '@common/infrastructure/HttpClient'

export default {
  state: {
    loading: false,
    loadingState: 0,
    snackbar: false,
    dialog: false,
    error: null,
    releasesInfo: []
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = (payload.response !== undefined) ? payload.response.data.message : payload.message
    },
    setSnackbar (state, payload) {
      if (payload.active === undefined) payload.active = true
      if (payload.timeout === undefined) payload.timeout = 6000
      state.snackbar = payload
    },
    clearError (state) {
      state.error = null
    },
    setDialog (state, payload) {
      state.dialog = payload
    },
    addLoadingState (state, payload) {
      state.loadingState += payload
    },
    cleanLoadingState (state) {
      state.loadingState = 0
    },
    setReleasesInfo (state, payload) {
      state.releasesInfo = payload
    }
  },
  actions: {
    async checkNewFrontendVersion () {
      const versionRequest = await new HttpClient().get(`${location.origin}/static/version.json`, {
        headers: {
          'Pragma': 'no-cache',
          'Cache-Control': 'no-cache'
        }
      })
      const actualVersion = versionRequest.data.version
      const currentVersion = localStorage.getItem('version')
      if (actualVersion !== currentVersion) {
        location.reload(true)
      }
    }
    // async checkNewReleasesInfo ({ commit }) {
    //   const resultReleases = []
    //   try {
    //     const releaseRequest = await new HttpClient().get(`${location.origin}/static/releases.json`)
    //     releaseRequest.data.releases.forEach(release => resultReleases.push(release))
    //     commit('setReleasesInfo', resultReleases)
    //   } catch (error) {
    //     throw error
    //   }
    // }
  },
  getters: {
    getLoading (state) {
      return state.loading
    },
    getDialog (state) {
      return state.dialog
    },
    getError (state) {
      return state.error
    },
    getSnackbar (state) {
      return state.snackbar
    },
    getLoadingState (state) {
      return state.loadingState
    },
    getReleasesInfo (state) {
      return state.releasesInfo
    }
  }
}
