
<template>
  <router-view />
  <Modal v-if="isModal"></Modal>
  <ConFirm v-if="isConFirm"></ConFirm>
</template>

<script>

import { provide } from 'vue';
// import { useStore } from 'vuex'


import { useModal } from './compositions/modal.js'
import Modal from './components/common/Modal.vue';
import ConFirm from './components/common/ConFirm.vue';
export default {
  components: {
    //컴포넌트 태그명: 컴포넌트 내용
    Modal: Modal,
    ConFirm: ConFirm
  },
  setup() {



    const {
      title,
      message,
      isConFirm,
      showConfirm,
      isModal,
      confirm,
      showModal,
      closeModal,

    } = useModal()

    provide("isModal", isModal)
    provide("isConFirm", isConFirm)
    provide("showModal", showModal)
    provide("closeModal", closeModal)
    provide("showConfirm", showConfirm)
    provide("title", title)
    provide("message", message)
    provide("confirm", confirm)




    return { isModal, isConFirm }



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
