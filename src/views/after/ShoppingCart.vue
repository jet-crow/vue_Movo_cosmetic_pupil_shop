<template>
    <Nav />
    <div class="cart_box">
        <van-swipe-cell class="cart_item" v-for="i in 5">
            <van-checkbox v-model="checked" class="cart_item_checkbox" checked-color="#FF7E33d6"></van-checkbox>
            <van-card price="2.00" desc="描述信息" title="商品标题" class="goods-card"
                thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
            </template>
            <van-stepper v-model="value" class="cart_item_stepper" input-width="20px" button-size="18px" />
        </van-swipe-cell>
    </div>
    <!-- 支付订单 -->
    <van-submit-bar 
    class="submit_bar"
    :price="3050" button-text="结算" @submit="onSubmit">
        <van-checkbox v-model="checked" checked-color="#FF7E33d6">全选</van-checkbox>
    </van-submit-bar>
</template>

<script setup>
import Nav from '@/components/Nav.vue';
import { ref } from 'vue';
const checked = ref(false)
const value = ref(1)

function onSubmit() {

}
</script>


<style scoped src="@/assets/css/view/after/shoppingCart.css"></style>