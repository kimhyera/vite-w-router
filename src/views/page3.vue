
<script setup>

import { reactive, ref, computed } from 'vue';

import { useRouter } from 'vue-router';
import { useStore } from 'vuex'




const router = useRouter();

const store = useStore()


function onClick() {
    store.dispatch('modalOpen', {
        isShow: true,
        message: '메세지만 알럿'

    })
}




</script>
<template lang="">
    <div>
        <h1>page3</h1>

        
        <button @click="onClick"> 클릭3</button>

        <iframe width="100%" height="700" src="https://ant.design/docs/resources"  ></iframe>

    </div>
</template>

<style lang="">
    
</style>