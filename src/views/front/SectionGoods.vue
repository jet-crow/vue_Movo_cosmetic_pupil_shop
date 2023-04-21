<template>
    <Nav style="margin-bottom: .8rem;"/>
    <Classification :chose="chose" @updateChose="updateChose"/>
    <div style="min-height: calc(100vh -  11.3rem)">
        <Goods :goodsData="goodsData"/>
    </div>
</template>
<script setup>
import Nav from '@/components/Nav.vue';
import Classification from '@/components/Classification.vue';
import Goods from '@/components/Goods.vue';
import {ref, onMounted, getCurrentInstance} from 'vue';
import router from "@/router";

const {proxy} = getCurrentInstance();
const chose = ref(0);
let goodsData = ref([{
    id: 0,
    price: 100,
    gname: "movo日抛经典movo日抛经典movo日抛经典movo日抛经典",
    mainImg: "主图/日抛1_主图.png"
}]);

onMounted(() => {
    let queryChose = router.currentRoute.value.query.chose
    if (queryChose === undefined) return;
    chose.value = queryChose;
    classRequest(chose.value);
})

function updateChose(data) {
    // console.log("来自父组件的事件" + data);
    chose.value = data;
    classRequest(chose.value);
}

function classRequest(id) {
    if (id == 0) {
        proxy.$api.get('/goods/AllGoods').then(res => {
            // console.log(res.data);
            goodsData.value = res.data
        });
        return;
    }
    proxy.$api.get('/goods/TypeGoods?classId=' + id).then(res => {
        // console.log(res.data);
        goodsData.value = res.data
    });

}
</script>
<style scoped src="@/assets/css/view/front/sectionGoods.css"></style>