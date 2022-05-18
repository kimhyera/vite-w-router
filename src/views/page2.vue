<template lang="">
    <div>
        <h1>page2</h1>

        <button @click="onClick">클릭</button>
        <input type="text" ref="input2"><br>

     

      <div>
          유저 id  route.params.id:   {{route.params.id}}<br>
         주문 타입 route.query.orderType:   {{route.query.orderType}}<br>
         상세 query iStGoodsNo=23266517 
   

      </div>

        

    <router-link to="/page2/222">id 22 로 이동</router-link>

   
        <TabNav :tabs="tabs" :selected="selected" @onSelect="onSelect">
        
           <Tab v-if="selected === 0"> 
              1
          </Tab>
            <Tab v-if="selected === 1">tab2</Tab>
           <Tab v-if="selected === 2">tab3</Tab>
        </TabNav>

            <div v-if="selected === 0"> 
              2
          </div>
            <div v-if="selected === 1">tab2</div>
           <div v-if="selected === 2">tab3</div>
     

    


    </div>
</template>
<script>
import { reactive, ref, inject, onMounted } from 'vue';

import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex'
import TabNav from '../components/common/TabNav.vue';
import Tab from '../components/common/Tab.vue';


export default {
    components: { TabNav, Tab },

    setup(props) {

        const tabs = ['메뉴', '가게', '기타']


        const selected = ref(0);

        function onSelect(idx) {

            selected.value = idx


        }






        const router = useRouter();

        const store = useStore()
        const input2 = ref(null)

        const route = useRoute();


        onMounted(() => {
            const id = route.params.id
            console.log(id);
        })


        const showModal = inject("showModal")


        function onClick() {



            function callback() {
                input2.value.focus();
                router.push('/page3');
            }


            showModal('제목제목2', 'ㅇㅇㅇㅇ2', callback)

        }

        return {
            tabs,
            selected,
            input2,
            onClick,
            onSelect,
            route

        }

    }

}
</script>
<style lang="">
    
</style>