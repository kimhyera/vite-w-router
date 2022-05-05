<template lang="">

    <div>


        <h1>main</h1>

        <button>

            <i class="btn-modal-close fas fa-times" @click="onClick">모달 </i>
        </button>

        

             <br>

             <input type="text" class="input-form" ref="input1">

    </div>
</template>

<script>
import { reactive, ref, computed } from 'vue';

import { useRouter } from 'vue-router';
import { useStore } from 'vuex'



export default {
    setup(props) {
        const router = useRouter();

        const store = useStore()




        const input1 = ref(null)






        // function onCloseMoal() {

        //     modal.isShow = !modal.isShow;

        // }


        function onClick() {


            if (store.dispatch('modalOpen', {
                isShow: true,
                type: 'confirm',
                title: '제목',
                message: '상세',
                focus: '.input-form',
                gotoLink: ''

            })) {
                alert('y')
            } else {
                alert('no')
            }


        }

        return {
            input1, onClick

        }

    }

}
</script>
<style lang="">
    
</style>