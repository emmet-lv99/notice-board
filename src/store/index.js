import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    noticeItems: []
  },
  mutations: {
    addNoticeItem(state, newNoticeData) {
      state.noticeItems.push(newNoticeData)
    }
  },
  actions: {
    enrollData({commit}, newNotice) {
      commit("addNoticeItem", newNotice.data)
      router.push(newNotice.moveTo)
    }
  },
  modules: {
  }
})
