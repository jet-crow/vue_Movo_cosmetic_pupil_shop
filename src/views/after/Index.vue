<template>
    <Nav />
    <aside>
        <div class="introduce">
            <video webkit-playsinline="true" poster="../../assets/images/introduce.jpg"
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


<style scoped>
.introduce video {
    width: 100%;
    height: 100%;
    object-fit: fill;
    margin-top: .3rem;
    margin-bottom: .8rem;
    border-radius: .8rem;
}

main {
    margin-top: .8rem;
}

/* 当日推荐 CommodityWindows start*/
.box {
    border-radius: 1.8rem;
}

.banner {
    position: relative;
}

.banner span {
    position: absolute;
    z-index: 20;
    width: fit-content;
    height: fit-content;
    top: 0rem;
    left: 0rem;
    font-size: var(--text-2xl);
    font-weight: 500;
    color: var(--color-white);
    border: 2px solid;
    border-top: none;
    border-left: none;
    border-radius: 1.8rem 0 1.8rem 0;
    padding: .5rem 1rem;
}

/* 当日推荐 CommodityWindows end*/
/* goods start */
.goods {
    min-height: 20rem;
    /* border: 1px solid; */
}

.goods>p {
    margin-left: .3rem;
    line-height: 2.8rem;
    font-weight: 500;
    font-size: var(--text-xl);
    color: var(--color-green-dark);
}
</style>