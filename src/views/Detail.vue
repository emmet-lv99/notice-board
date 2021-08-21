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
      <button class="detail__buttons--edit">수정</button>
      <button class="detail__buttons--del">삭제</button>
    </section>
  </article>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Detail",
  computed: {
    ...mapState(['noticeItems'])
  },
  data: () => ({
    noticeItemContent: null
  }),
  created() {
    if (this.noticeItems.length > 0 && this.noticeItems !== null) {
      const itemId = this.$route.params.boardPath - 1
      this.noticeItemContent = this.noticeItems[itemId]
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
