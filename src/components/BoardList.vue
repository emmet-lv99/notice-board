<template>
  <article class="table">
    <section class="table-create">
      <button @click="writeText">글쓰기</button>
    </section>
    <ul class="table-header">
      <li class="table-header__id">순서</li>
      <li class="table-header__title">제목</li>
      <li class="table-header__user">작성자</li>
      <li class="table-header__date">날짜</li>
    </ul>
    <section class="table-body">
      <section v-if="!isContentItem" class="table-body__content--empty">
        게시글이 없습니다. 정신차리세요
      </section>
      <section v-if="isContentItem" class="table-body__content">
        <board-list-item/>
      </section>
    </section>
  </article>
</template>

<script>
import {ref} from 'vue'
import { useRouter } from 'vue-router'
import BoardListItem from '@/components/BoardListItem.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    BoardListItem,
  },
  setup() {
    const router = useRouter()
    
    const isContentItem = ref(true)
    const writeText = ()=> router.push('/create')
    
    return {
      isContentItem,
      writeText
    }
  }
}
</script>

<!-- Add "scoped" Kattribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
.table {
  width: 800px;
  max-width: 800px;
  .table-create {
    text-align: right;
  }
  .table-header {
    display: flex;
    justify-content: flex-start;
    margin: 0;
    margin-top: 20px;
    padding: 10px;
    background-color: lightgrey;
  }
  li {
    min-width: 40px;
  }
  .table-header__id {}
  .table-header__title {flex: 1 1 auto;}
  .table-header__user {width: 100px}
  .table-header__date {width: 50px}
}

</style>
