<template>
    <Nav/>
    <aside>
        <div class="introduce">
            <video webkit-playsinline="true" @click="play" :poster="$getImgUrl('introduce.jpg')"
                   src="../../assets/video/introduce.mp4" autoplay muted></video>
        </div>
        <!-- 分类 -->
        <Classification/>
    </aside>
    <main>
        <div class="banner" @click="hotJump">
            <span>当日推荐</span>
            <CommodityWindows :commodityData="commodityData"/>
        </div>
        <!-- 全部商品 -->
        <div class="goods">
            <p>全部商品</p>
            <Goods :goodsData="goodsData"/>
        </div>
    </main>
</template>

<script setup>
import Nav from '@/components/Nav.vue';
import Classification from '@/components/Classification.vue';
import CommodityWindows from '@/components/CommodityWindows.vue';
import Goods from '@/components/Goods.vue';
import {ref, getCurrentInstance} from 'vue';
import router from "@/router";

const {proxy} = getCurrentInstance();
//热门商品
let commodityData = ref({
    topImg: "日抛1/日抛1_0000_顶图.png",
    bottomImg: "日抛1/日抛1_0005_底图.png",
    shufflingFigure: ["日抛1/日抛1_0001_伽罗棕.png",
        "日抛1/日抛1_0002_胶片棕.png", "日抛1/日抛1_0003_丝绒棕.png", "日抛1/日抛1_0004_柔咖棕.png"]
});
let goodsData = ref([{
    id: 0,
    price: 100,
    gname: "movo日抛经典movo日抛经典movo日抛经典movo日抛经典",
    mainImg: "主图/日抛1_主图.png"
}]);
//热门商品
proxy.$api.get('/goods/hot').then(res => {
    commodityData.value = res.data
});
//全部商品
proxy.$api.get('/goods/AllGoods').then(res => {
    console.log(res.data);
    goodsData.value = res.data
});

//点击播放
const play = (e) => {
    e.target.play();
};
const hotJump = () => {
    console.log(commodityData.value)
    router.push({
        path: '/goodsdetails',
        query: {goodId: commodityData.value.goodId}
    })
}
</script>


<style scoped src="@/assets/css/view/front/index.css"></style>