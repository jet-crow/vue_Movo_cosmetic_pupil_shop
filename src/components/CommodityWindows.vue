<template>
    <div class="box">
        <van-swipe :autoplay="3000" :show-indicators="false" class="outer_layer"
            :style="` background-image: url(${$getImgUrl(commodityData.bottomImg)});`">
            <van-swipe-item v-for="(item, index) in commodityData.shufflingFigure">
                <img class="item" :src="$getImgUrl(item)" />
            </van-swipe-item>
        </van-swipe>
        <div class="outer_layer_after" :style="` background-image: url(${$getImgUrl(commodityData.topImg)});`"></div>
    </div>
</template>

<script setup>
/* 
传参
const commodityData = {
    topImg: "日抛1/日抛1_0000_顶图.png",
    bottomImg: "日抛1/日抛1_0005_底图.png",
    shufflingFigure: ["日抛1/日抛1_0001_伽罗棕.png",
        "日抛1/日抛1_0002_胶片棕.png", "日抛1/日抛1_0003_丝绒棕.png", "日抛1/日抛1_0004_柔咖棕.png"]
}
 */

const props = defineProps(["commodityData"])
</script>
<style scoped>
.box {
    width: 100vw;
    position: relative;
    border-bottom-left-radius: 1.8rem;
    border-bottom-right-radius: 1.8rem;
    overflow: hidden;
}

.outer_layer {
    width: inherit;
    /* background-image: url(日抛1/日抛1_0005_底图.png); */
    background-repeat: no-repeat;
    background-size: 100%;
}


.outer_layer .item {
    width: inherit;
    /* 滤镜 */
    /* mix-blend-mode: multiply; */
}


.outer_layer_after {
    position: absolute;
    z-index: 10;
    top: 0;
    width: 100vw;
    height: 100%;
    /* background-image: url(日抛1/日抛1_0000_顶图.png); */
    background-size: 100%;
    background-repeat: no-repeat;
    pointer-events: none;
    border-radius: 20px;

}
</style>