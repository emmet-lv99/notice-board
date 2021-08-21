<!--
todo: 수정버튼이 있는 페이지의 id 값을 store에 넘긴다.
todo: store에서  id 값과 일치하는 데이터를 찾는다.
todo: 찾은 값을 수정페이지에 전달한다.
-----
todo: 수정완료버튼을 누르면 기존 데이터에 덮어씌우기
todo: 취소 버튼을 누르면 초기화 및 원래 글 페이지로 이동
-->
<template>
  <article class="detail__wrapper">
    <section class="detail__title">
      <p class="detail__label">타이틀</p>
      <p class="detail__content-content">{{noticeItemContent.noticeTitle}}</p>
    </section>
    <section class="detail__user">
      <p class="detail__label">글쓴이</p>
      <p class="detail__content-content">{{noticeItemContent.noticeUser}}</p>
    </section>
    <section class="detail__content">
      <p class="detail__label">내용</p>
      <p class="detail__content-content">{{noticeItemContent.noticeContent}}</p>
    </section>
    <section class="detail__buttons">
      <button @click="editData({data: noticeItemContent, moveTo: '/create'})" class="detail__buttons--edit">수정</button>
      <button @click="delData({data: noticeItemContent, moveTo: '/'})" class="detail__buttons--del">삭제</button>
      <button @click="$router.push('/')" class="detail__buttons--del">목록보기</button>
    </section>
  </article>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "Detail",
  computed: {
    ...mapState(['noticeItems'])
  },
  data: () => ({
    noticeItemContent: null
  }),
  methods: {
    ...mapActions(['delData', 'editData'])
  },
  created() {
    if (this.noticeItems.length > 0 && this.noticeItems !== null) {
      const itemId = this.$route.params.boardPath
      this.noticeItems.forEach(item => {
        if(item.noticeId == itemId) {
          this.noticeItemContent = item
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  padding: 0;
  margin: 0;
}
.detail__wrapper {
  text-align: left;
  width: 100%;
  max-width: 800px;
  section {
    margin: 40px 0;
    .detail__label {
      font: {
        weight: bold;
      }
    }
    .detail__content-content {
      margin-top: 10px;
    }
  }
}
</style>
