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
      <section v-if="boardData.length <= 0" class="table-body__content--empty">
        게시글이 없습니다. 정신차리세요
      </section>
      <section v-if="boardData.length > 0" class="table-body__content">
        <board-list-item
            v-for=" item in boardData" :key="item.noticeId"
            :noticeId = "item.noticeId"
            :noticeTitle = "item.noticeTitle"
            :noticeUser = "item.noticeUser"
            @moveDetail = "moveToPage"
        />
      </section>
    </section>
  </article>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import BoardListItem from '@/components/BoardListItem.vue';
import {useStore} from 'vuex'

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
    const store = useStore()

    const writeText = ()=> router.push('/create')


    const orgBoardData = computed(()=> store.state.noticeItems)
    const boardData = orgBoardData.value
    // const boardDataSort = () => {
    //   if (boardData.length > 0 === boardData !== null) {
    //     boardData.reverse()
    //     console.log(boardData)
    //   } else {
    //     console.log('err')
    //   }
    // }

    // onMounted(() => boardDataSort())

    const moveToPage = (path) => router.push({ name: 'Detail', params: {boardPath: path}})


    return {
      writeText,
      boardData,
      moveToPage,
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
  width: 100%;
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
