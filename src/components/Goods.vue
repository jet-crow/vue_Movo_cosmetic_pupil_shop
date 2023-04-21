<template>
    <div class="goods_box">
        <div class="good" v-for="(item, index) in goodsData" @click="jump(item.goodId)">
            <img :src="$getImgUrl(item.mainImg)" />
            <p class="good_name">{{ item.gname }}</p>
            <p class="good_price">￥{{ item.price }}</p>
        </div>
    </div>
</template>
<script setup>
import router from '@/router';
import { ref,getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

let goodsData = ref([
    {
        id: 0,
        price: 100,
        name: "movo日抛经典movo日抛经典movo日抛经典movo日抛经典",
        image: "主图/日抛1_主图.png"
    }
])

proxy.$api.get('/goods/AllGoods').then(res => {
    console.log(res.data);
    goodsData.value = res.data
});


// 跳转
const jump = (goodIdValue)=>{
    router.push({
        path:'/goodsdetails',
        query:{
            goodId: goodIdValue
        }
    })
}

</script>


<style scoped>
.goods_box {
    margin-top: 1rem;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
}

.good {
    /* margin: 1rem 1rem 0 1rem; */
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
    width: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.good_price {
    margin-left: .6rem;
    color: var(--color-orange-400);
    border: 500;
}
</style>