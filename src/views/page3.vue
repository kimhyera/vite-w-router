
<script setup>

import { reactive, inject, ref, onMounted } from 'vue';

import { useRouter } from 'vue-router';
import { useStore } from 'vuex'




const router = useRouter();
const route = useRouter();


onMounted(() => {
    const id = route.params.id
    console.log(id);
})



const showConfirm = inject("showConfirm")


function onClick() {





    showConfirm('', '메세지만 알럿!!!')
}




</script>
<template lang="">
    <div>
        <h1>page3</h1>

        {{id}}
        <button @click="onClick"> 클릭3</button>

        <iframe width="100%" height="700" src="https://ant.design/docs/resources"  ></iframe>

    </div>
</template>

<style lang="">
    
</style>