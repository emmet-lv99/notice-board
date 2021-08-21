import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    noticeItems: [],
    countItem: 0,
    editDataStorage: null
  },
  mutations: {
    addNoticeItem(state, newNoticeData) {
      state.noticeItems.unshift(newNoticeData)
      state.countItem++
    },
    delNoticeItem(state, itemIndex) {
      state.noticeItems.splice(itemIndex, 1)
    },
    clearEditStorage(state) {
      state.editDataStorage = null
    },
    editItemSet(state, editItemInfo) {
      state.noticeItems.splice(editItemInfo.itemIndex, 1, editItemInfo.itemNewContent)
    }
  },
  actions: {
    enrollData({commit}, newNotice) {
      commit("addNoticeItem", newNotice.data)
      router.push(newNotice.moveTo)
    },
    delData({state, commit, dispatch}, item) {
      const itemIndex = state.noticeItems.indexOf(item.data, 0)
      commit('delNoticeItem', itemIndex)
      dispatch('delCheck', item.data, item.moveTo)
      router.push(item.moveTo)
    },
    delCheck({state}, deletedItem) {
      const delState = state.noticeItems.filter(item => item === deletedItem)
      if (delState.length <= 0 ) {
        alert('삭제완료')
      }
    },
    editData({state}, item){
      state.editDataStorage = item.data
      router.push(item.moveTo)
    },
    clearEditDataStorage ({commit}) {
      commit('clearEditStorage')
    },
    editComplete({state ,commit},item) {
      let isNoticeItem
      state.noticeItems.forEach(isItem => {
        if(isItem.noticeId === item.data.noticeId) {
          isNoticeItem = isItem
        }
      })

      const editItemInfo = {
        itemIndex: state.noticeItems.indexOf(isNoticeItem, 0),
        itemNewContent: item.data
      }
      commit('editItemSet', editItemInfo)
      router.push('/'+item.moveTo)
    }
  },
  modules: {
  }
})
