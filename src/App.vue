<template>
  <header>
    <global-header/>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <span>
      이것은 푸터입니다<br/>
      display: flex;<br/>
      justify-content: center;<br/>
      align-items: center;<br/>
    </span>
  </footer>
</template>

<script>
import GlobalHeader from '@/components/common/GlobalHeader'
// import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    GlobalHeader
  },
  setup() {
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 233px);
  overflow: scroll;
  /*padding-bottom: 140px;*/
  flex-direction: column;
  box-sizing: border-box;
}
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  background-color: #2c3e50;
  color: white;
}
</style>
