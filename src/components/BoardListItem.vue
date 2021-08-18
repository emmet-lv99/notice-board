<template>
  <ul class="content-header">
    <li class="content-header__id">순서</li>
    <li class="content-header__title">제목</li>
    <li class="content-header__user">작성자</li>
    <li class="content-header__date">날짜</li>
  </ul>
</template>

<script>
export default {
  name: "BoardListItem.vue"
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
}

  .content-header {
    display: flex;
    justify-content: flex-start;
    margin: 0;
    padding: 15px 10px;
    border-bottom: 1px solid #000;
  }
  li {
    min-width: 40px;
  }
  .content-header__id {}
  .content-header__title {flex: 1 1 auto;}
  .content-header__user {width: 100px}
  .content-header__date {width: 50px}
</style>