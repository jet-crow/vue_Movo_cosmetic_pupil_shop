<template>
    <el-page-header @back="goBack">
        <template #content>
            <span class="text-large font-600 mr-3"> 商品管理 </span>
        </template>
    </el-page-header>
    <main>
        <ul>
            <li>
                <el-input v-model="search" size="big" placeholder="Type to search" />
            </li>
            <li v-for="(item, index) in filterTableData">
                <div class="box_top">
                    <div class="box_top_left">
                        下单用户: <span>{{ item.orderUser }}</span>
                    </div>
                    <div class="box_top_right">
                        订单号: <span>{{ 32001 }}</span>
                    </div>
                </div>
                <div class="box_bottom">
                    <div class="box_bottom_left" v-for="(items, index) in item.orderItem">
                        <div class="box_bottom_left1">
                            <img :src="$getImgUrl(items.goodsImg)">
                        </div>
                        <div class="box_bottom_left2">
                            <p>{{ items.goodsTitle }}</p>
                            <span>X {{ items.goodsQty }}</span>
                        </div>
                        <div class="box_bottom_empty"></div>
                        <div class="box_bottom_right2">
                            <p>单价 ¥{{ items.goodsPrice }}</p>
                        </div>
                    </div>

                    <div class="box_bottom_right">
                        <p>实付 ¥<span>{{ item.orderRental }}</span></p>
                        <div class="btn">{{ item.orderState == 0 ? "未发货" : item.orderState == 1 ? "已发货" : "已签收" }}</div>
                    </div>
                </div>
            </li>
        </ul>
    </main>
</template>
<script setup>
import { ref, computed } from 'vue';

const OrderData = [{
    orderUser: 13911111112,
    orderNo: 32001,
    orderRental: 200,
    orderState: 0, // 0 未发货，1 已发货，2 已签收
    orderItem: [{
        goodsTitle: "日抛1-胶片棕日抛1-胶片棕",
        goodsImg: "日抛1/日抛1-胶片棕-商品图.jpg",
        goodsQty: 2,
        goodsPrice:50

    }, {
        goodsTitle: "日抛1-伽罗棕日抛1-伽罗棕",
        goodsImg: "日抛1/日抛1-伽罗棕-商品图.jpg",
        goodsQty: 3,
        goodsPrice:40
    }, {
        goodsTitle: "日抛1-伽罗棕日抛1-伽罗棕",
        goodsImg: "日抛1/日抛1-伽罗棕-商品图.jpg",
        goodsQty: 3,
        goodsPrice:30
    }]

}, {
    orderUser: 13911111112,
    orderNo: 32001,
    orderRental: 100,
    orderState: 1, // 0 未发货，1 已发货，2 已签收
    orderItem: [{
        goodsTitle: "日抛1-胶片棕日抛1-胶片棕",
        goodsImg: "日抛1/日抛1-胶片棕-商品图.jpg",
        goodsQty: 2,
        goodsPrice:50
    }]

}];

const search = ref('');
const filterTableData = computed(() =>
    OrderData.filter((data) => !search.value ||
        (data.orderUser + "").includes(search.value) ||
        (data.goodsTitle + "").includes(search.value))
);
</script>

<style scoped src="@/assets/css/view/after/order_management.css"></style>