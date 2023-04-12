<template>
    <nav>
        <van-icon class="back" name="arrow-left" />
        <p class="title">我的订单</p>
    </nav>
    <van-tabs v-model:active="active" type="card" class="box">
        <van-tab title="全部">
            <OrderItem :state="0" />
            <OrderItem :state="1" />
            <OrderItem :state="2" />
            <OrderItem :state="3" />
        </van-tab>
        <van-tab title="待付款"><OrderItem :state="0" /></van-tab>
        <van-tab title="待发货"><OrderItem :state="1" /></van-tab>
        <van-tab title="待收货"><OrderItem :state="2" /></van-tab>
        <van-tab title="待评价"><OrderItem :state="3" /></van-tab>
    </van-tabs>
</template>

<script setup>
import Nav from '@/components/Nav.vue'
import OrderItem from '@/components/OrderItem.vue'
import { ref } from 'vue';
const active = ref(0);
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
