<template>
    <div class="goods_box">
        <div class="good" v-for="i in 8">
            <img :src="$getImgUrl(goodsData[0].image)" />
            <p>{{ goodsData[0].name }}</p>
            <p>￥{{ goodsData[0].price }}</p>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue'

const goodsData = reactive([
    {
        id: 0,
        price: 100,
        name: "movo日抛经典",
        image: "主图/日抛1_主图.png"
    }
])

</script>


<style scoped>
.goods_box {
    border: 1px solid;
    display: grid;
    grid-template-columns: auto auto;
}

.good {}
</style>