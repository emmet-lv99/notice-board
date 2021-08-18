import { createStore } from 'vuex'

export default createStore({
  state: {
    stateValue: 0
  },
  mutations: {
    upState (state, payloadd){
      state.stateValue = payloadd
      console.log('mutations')
    }
  },
  actions: {
    stateAction({commit}, payload) {
      commit("upState", payload)
    }
  },
  modules: {
  }
})
