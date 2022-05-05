<template lang="">
    <div>
        <h1>page2</h1>

        <button @click="onClick">다시 클릭</button>
        <iframe width="100%" height="700" src="https://www.kakaocorp.com/page/news"  ></iframe>


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


        function onClick() {
            store.dispatch('modalOpen', {
                isShow: true,
                title: '타이틀',
                message: '다시 눌러주세요',
                gotoLink: '/page3'

            })
        }

        return {
            onClick

        }

    }

}
</script>
<style lang="">
    
</style>