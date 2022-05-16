
<template>
  <router-view />

  <Alert v-if="isShow"></Alert>
</template>

<script>

import { reactive, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
// import { useStore } from 'vuex'


import { useModal } from './compositions/modal.js'
import Alert from './components/common/Alert.vue';
export default {
  components: {
    //컴포넌트 태그명: 컴포넌트 내용
    Alert: Alert,
  },
  setup() {


    // const store = useStore()
    // const modal = computed(() => store.state.modal);

    const {
      isShow
    } = useModal()


    return { isShow }

  }

}


</script>
<style>
#app {
  max-width: 720px;
  width: 100%;
  margin: 0 auto;

}

header {
  height: 40px;

}
</style>
