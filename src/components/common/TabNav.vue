<template lang="">
    <div>

         <ul class="tab-nav d-flex" > 
            <li v-for="(tab,i) in tabs" :key="i" @click="onSelect(i)" >
               <a class="nav-link" :class="{on : i === selected}" >{{tab}}</a>
            </li>
         
        </ul>

       <slot></slot>

    </div>
</template>


<style>
.on {

    background: yellow;
}
</style>

<script>
import { provide, ref } from 'vue';

export default {


    props: {
        tabs: [],
        selected: Number
    },

    emits: ["onSelect"],
    setup(props, { emit }) {

        const selected = ref(0)




        function onSelect(i) {
            selected.value = i
            emit("onSelect", i);
        }


        return { onSelect, selected }

    }

}
</script>