<template>
    <Nav />
    <aside>
        <div class="introduce">
            <video webkit-playsinline="true" :poster="$getImgUrl('introduce.jpg')"
                src="../../assets/video/introduce.mp4" autoplay muted></video>
        </div>
        <!-- 分类 -->
        <Classification />
    </aside>
    <main>
        <div class="banner">
            <span>当日推荐</span>
            <CommodityWindows :commodityData="commodityData" />
        </div>
        <!-- 全部商品 -->
        <div class="goods">
            <p>全部商品</p>
            <Goods />
        </div>
    </main>
</template>

<script setup>
import Nav from '@/components/Nav.vue'
import Classification from '@/components/Classification.vue'
import CommodityWindows from '@/components/CommodityWindows.vue'
import Goods from '@/components/Goods.vue'

const commodityData = {
    topImg: "日抛1/日抛1_0000_顶图.png",
    bottomImg: "日抛1/日抛1_0005_底图.png",
    itemImg: ["日抛1/日抛1_0001_伽罗棕.png",
        "日抛1/日抛1_0002_胶片棕.png", "日抛1/日抛1_0003_丝绒棕.png", "日抛1/日抛1_0004_柔咖棕.png"]
}
</script>


<style scoped src="@/assets/css/view/after/index.css"></style>