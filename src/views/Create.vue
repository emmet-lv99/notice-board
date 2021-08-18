<template>
  <h2>게시글 작성</h2>
  <form>
    <ul class="create__sections">
      <li>
        <label for="create__title">제목</label>
        <input id="create__title" type="text">
      </li>
      <li>
        <label for="create__user">작성자</label>
        <input id="create__user" type="text">
      </li>
      <li>
        <label for="create__content">글 내용</label>
        <textarea id="create__content"></textarea>
      </li>
    </ul>
  </form>
  <div class="create__buttons">
    <button>작성</button>
  </div>
</template>

<script>
export default {
  name: "BoardCreate"
}
</script>

<style lang="scss" scoped>
.create__sections {
  width: 800px;
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