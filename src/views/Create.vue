<template>
  <h2>게시글 작성</h2>
  <form>
    <ul class="create__sections">
      <li>
        <label for="create__title">제목</label>
        <input v-model="noticeDataSet.noticeTitle" id="create__title" type="text">
      </li>
      <li>
        <label for="create__user">작성자</label>
        <input v-model="noticeDataSet.noticeUser" id="create__user" type="text">
      </li>
      <li>
        <label for="create__content">글 내용</label>
        <textarea v-model="noticeDataSet.noticeContent" id="create__content"></textarea>
      </li>
    </ul>
  </form>
  <div class="create__buttons">
    <button v-if="!editDataStorage" @click="enrollData({data: noticeDataSet, moveTo: '/'})">작성</button>
    <button v-if="editDataStorage" @click="editComplete({data: noticeDataSet, moveTo: noticeDataSet.noticeId})">수정완료</button>
    <button v-if="editDataStorage" @click="editCancel">취소</button>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "BoardCreate",
  data: () => ({
    noticeDataSet: {
      noticeId: 0,
      noticeTitle: '',
      noticeUser: '',
      noticeContent: ''
    }
  }),
  computed: {
    ...mapState(['noticeItems', 'countItem', 'editDataStorage']),
  },
  created() {
    if (this.editDataStorage !== null) {
      this.noticeDataSet = this.editDataStorage
    } else if (this.editDataStorage === null) {
      this.countNotice()
    }
  },
  methods:{
    ...mapActions(['enrollData', 'clearEditDataStorage', 'editComplete']),
    countNotice() {
      this.noticeDataSet.noticeId = this.countItem + 1
    },
    editCancel() {
      this.$router.go(-1)
      this.clearEditDataStorage()
    }
  }
}
</script>

<style lang="scss" scoped>
form {width: 100%}
.create__sections {
  max-width: 800px;
  width: 100%;
  padding: 0;
  li {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 30px;
    input, textarea {
      min-height: 30px;
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
