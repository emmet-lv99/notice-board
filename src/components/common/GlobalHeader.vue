<template>
  <div class="header-wrapper">
    <h1 class="header-wrapper__title">vue.js 게시판 헤더입니다.</h1>
    <ul class="header-wrapper__sub-menu">
      <li>
        <router-link to="/">
          게시판 목록
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          about
        </router-link>
      </li>
      <li>
        <router-link to="/detail">
          detail
        </router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
  .header-wrapper {
    padding: 20px;
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: cornflowerblue;
    .header-wrapper__title {
      padding: 0;
      margin: 0;
      font: {
        size: 20px;
      }
    }
    .header-wrapper__sub-menu {
      display: flex;
      li {
        list-style: none;
        padding: 0 10px;
      }
    }
  }
</style>