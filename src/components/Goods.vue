<template>
    <div class="goods_box">
        <div class="good" v-for="i in 8">
            <img :src="$getImgUrl(goodsData[0].image)" />
            <p class="good_name">{{ goodsData[0].name }}</p>
            <p class="good_price">￥{{ goodsData[0].price }}</p>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue'

const goodsData = reactive([
    {
        id: 0,
        price: 100,
        name: "movo日抛经典movo日抛经典movo日抛经典movo日抛经典",
        image: "主图/日抛1_主图.png"
    }
])

</script>


<style scoped>
.goods_box {
    display: grid;
    grid-template-columns: auto auto;
}

.good {
    margin: 1rem 1rem 0 1rem;
    box-sizing: content-box;
}

.good:nth-child(2n) {
    margin-left: 0;
}

.good img {
    width: 100%;
    border-radius: .8rem;
}

.good_name {
    margin-top: .5rem;
    padding-left: .6rem;
    width: 11rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.good_price {
    margin-left: .6rem;
    color: var(--color-orange-400);
    border: 500;
}</style>