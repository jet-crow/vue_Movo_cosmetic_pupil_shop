<template>
    <main>
        <ul>
            <li>
                <el-input v-model="search" size="small" placeholder="Type to search" />
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
                    <div class="box_bottom_left1">
                        <img :src="$getImgUrl(item.goodsImg)">
                    </div>
                    <div class="box_bottom_left2">
                        <p>{{ item.goodsTitle }}</p>
                        <span>X {{ item.goodsQty }}</span>
                    </div>
                    <div class="box_bottom_empty"></div>

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
    goodsTitle: "日抛1-胶片棕日抛1-胶片棕",
    goodsImg: "日抛1/日抛1-胶片棕-商品图.jpg",
    goodsQty: 2,

}, {
    orderUser: 13911111112,
    orderNo: 32001,
    orderRental: 200,
    orderState: 1, // 0 未发货，1 已发货，2 已签收
    goodsTitle: "伽罗粽",
    goodsImg: "日抛1/日抛1-伽罗棕-商品图.jpg",
    goodsQty: 2,

}, {
    orderUser: 13911111112,
    orderNo: 32001,
    orderRental: 200,
    orderState: 2, // 0 未发货，1 已发货，2 已签收
    goodsTitle: "胶片棕",
    goodsImg: "日抛1/日抛1-胶片棕-商品图.jpg",
    goodsQty: 2,

}, {
    orderUser: 13911111112,
    orderNo: 32001,
    orderRental: 200,
    orderState: 0, // 0 未发货，1 已发货，2 已签收
    goodsTitle: "胶片棕",
    goodsImg: "日抛1/日抛1-胶片棕-商品图.jpg",
    goodsQty: 2,

}, {
    orderUser: 13911111113,
    orderNo: 32001,
    orderRental: 200,
    orderState: 0, // 0 未发货，1 已发货，2 已签收
    goodsTitle: "胶片棕",
    goodsImg: "日抛1/日抛1-胶片棕-商品图.jpg",
    goodsQty: 2,

}, {
    orderUser: 13911111112,
    orderNo: 32001,
    orderRental: 200,
    orderState: 0, // 0 未发货，1 已发货，2 已签收
    goodsTitle: "胶片棕",
    goodsImg: "日抛1/日抛1-胶片棕-商品图.jpg",
    goodsQty: 2,

}];

const search = ref('');
const filterTableData = computed(() =>
    OrderData.filter((data) => !search.value ||
        (data.orderUser + "").includes(search.value) ||
        (data.goodsTitle + "").includes(search.value))
);
</script>

<style scoped src="@/assets/css/view/after/order_management.css"></style>
<style scoped></style>