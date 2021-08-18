<template>
<!--  <hello-world></hello-world>-->
  <board-list/>
</template>

<script>
// @ is an alias to /src
import BoardList from '@/components/BoardList.vue'
import { ref, computed } from 'vue';

export default {
  name: 'Home',
  components: {
    BoardList
  },
  setup() {
    const useCount = () => {
      const initNum = ref(0)
      const doubleNum = computed(()=>initNum.value * 2)
      const increase = () => ++initNum.value
    
      return {
        doubleNum,
        increase
      }
    }
    const {doubleNum, increase} = useCount()
    return {
      doubleNum,
      increase
    }
  }
}
</script>
