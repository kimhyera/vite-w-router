<template lang="">
    <div>
        <h1>page2</h1>

        <button @click="onClick">다시 클릭</button>
        <input type="text" ref="input2">
        <iframe width="100%" height="700" src="https://www.kakaocorp.com/page/news"  ></iframe>


    </div>
</template>
<script>
import { reactive, ref, inject } from 'vue';

import { useRouter } from 'vue-router';
import { useStore } from 'vuex'



export default {
    setup(props) {
        const router = useRouter();

        const store = useStore()
        const input2 = ref(null)

        const showModal = inject("showModal")


        function onClick() {



            function callback() {
                input2.value.focus();
                router.push('/page3');
            }


            showModal('제목제목2', 'ㅇㅇㅇㅇ2', callback)

        }

        return {
            input2,
            onClick

        }

    }

}
</script>
<style lang="">
    
</style>