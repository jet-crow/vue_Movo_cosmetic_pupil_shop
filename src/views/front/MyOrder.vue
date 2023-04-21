<template>
    <nav>
        <van-icon class="back" name="arrow-left" @click="$router.back()"/>
        <p class="title">我的订单</p>
    </nav>
    <van-tabs v-model:active="active" type="card" class="box">
        <van-tab title="全部">
            <OrderItem v-for="i in orderDate" :key="i.orderId" :state="i.productStatus" :orderItem="i"/>
        </van-tab>
        <van-tab title="待付款">
            <OrderItem v-for="i in getOrderState(0)" :key="i.orderId" :state="0" :orderItem="i"/>
        </van-tab>
        <van-tab title="待发货">
            <OrderItem v-for="i in getOrderState(1)" :key="i.orderId" :state="1" :orderItem="i"/>
        </van-tab>
        <van-tab title="待收货">
            <OrderItem v-for="i in getOrderState(2)" :key="i.orderId" :state="2" :orderItem="i"/>
        </van-tab>
        <van-tab title="待评价">
            <OrderItem v-for="i in getOrderState(3)" :key="i.orderId" :state="3" :orderItem="i"/>
        </van-tab>
    </van-tabs>
</template>

<script setup>
import Nav from '@/components/Nav.vue'
import OrderItem from '@/components/OrderItem.vue'
import {ref, getCurrentInstance} from 'vue';

const active = ref(0);
const {proxy} = getCurrentInstance();
const orderDate = ref();
//请求订单数据
proxy.$api.get("/order/user/queryOrder").then(r => {
    orderDate.value = r.data;
});
const getOrderState = (index) => {
    return orderDate.value.filter(item => item.productStatus === index);
}

</script>

<style scoped src="@/assets/css/view/front/myOrder.css"></style>
<style>
.box .van-tabs__nav--card {
    border-radius: 0.6rem !important;
    overflow: hidden;
}

.box .van-tabs__content {
    min-height: calc(100vh - 4.25rem);
    padding: 1rem 1rem 0 1rem;
}
</style>
