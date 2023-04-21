<template>
    <Nav/>
    <div class="cart_box">
        <van-swipe-cell class="cart_item" v-for="(i,index) in goodsData" :key="i.cartId">
            <van-checkbox v-model="i.isChoose" class="cart_item_checkbox" checked-color="#FF7E33d6"
                          @click="checkIsAll"
            ></van-checkbox>
            <van-card :price="i.price" :desc="i.name" :title="i.gname" class="goods-card"
                      :thumb="$getImgUrl(i.img)"/>
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" @click="delItem(index,i)"/>
            </template>
            <van-stepper v-model="i.num" class="cart_item_stepper" input-width="20px" button-size="18px"/>
        </van-swipe-cell>
    </div>
    <!-- 支付订单 -->
    <van-submit-bar
            class="submit_bar"
            :price="priceSum" button-text="结算" @submit="onSubmit">
        <van-checkbox v-model="checked" checked-color="#FF7E33d6" @click="allChoose">全选</van-checkbox>
    </van-submit-bar>
</template>

<script setup>
import Nav from '@/components/Nav.vue';
import {ref, getCurrentInstance, computed} from 'vue';
import router from "@/router";
import {showFailToast} from "vant";

const {proxy} = getCurrentInstance();
let goodsData = ref();
const checked = ref(false);
const value = ref(1);

//获取所有的购物车商品
proxy.$api.get("/shoppingCart/user/myShoppingCart").then(r => {
    goodsData.value = r.data.map(i => {
        return {
            cartId: i.cartId,
            gname: i.gname,
            goodId: i.goodId,
            gtypeId: i.gtypeId,
            img: i.img,
            mainImg: i.mainImg,
            name: i.name,
            num: i.num,
            price: i.price.toFixed(2),
            isChoose: false,
        }
    });
    console.log(goodsData.value)
});


const priceSum = computed(() => {
    if (goodsData.value === undefined) {
        return 0;
    }
    let filterGoodsData = goodsData.value.filter((data) => data.isChoose === true);
    let priceSum = 0;
    for (const goods of filterGoodsData) {
        console.log(goods.price)
        priceSum += goods.price * goods.num;
    }
    return priceSum * 100;
});
//全选
const allChoose = () => {
    for (const goods of goodsData.value) {
        goods.isChoose = checked.value;
    }
}
//检查是否全部选选择
const checkIsAll = () => {
    for (const goods of goodsData.value) {
        if (goods.isChoose === false) {
            return checked.value = false;
        }
    }
    checked.value = true;
}
//删除
const delItem = (index, item) => {
    goodsData.value.splice(index, 1);
    proxy.$api.get("/shoppingCart/user/delGood?cartId=" + item.cartId);
};

function onSubmit() {

    let filterGoodsData = goodsData.value.filter((data) => data.isChoose === true);
    if (filterGoodsData.length === 0) {
        proxy.$showFailToast("请选择商品");
        return;
    }
    router.push({
        path: '/confirmOrder',
        query: {
            goodsData: proxy.$qs.stringify(filterGoodsData),
            priceSum: priceSum.value,
        }
    });
}
</script>


<style scoped src="@/assets/css/view/front/shoppingCart.css"></style>