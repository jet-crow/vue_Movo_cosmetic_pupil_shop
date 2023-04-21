<template>
    <nav>
        <van-icon class="back" name="arrow-left"/>
        <p class="title">提交订单</p>
    </nav>
    <!-- 联系人==>后续编辑可以考虑弹出一个弹出层 -->
    <Contact/>
    <!-- 具体订单信息 -->
    <main>
        <div class="info_box">
            <p>movo美瞳店铺</p>
            <van-card v-for="i in goodsData" :num="i.num" :price="i.pirce" :desc="i.name" :title="i.gname"
                      :thumb="$getImgUrl(i.img)"/>
            <div class="order_info">
                <div class="order_info_item">
                    <p>配送服务</p>
                    <p style="text-align: right;">快递免邮 送运费险<br/>24:00前下单，预计明天送达</p>
                </div>
                <p class="order_info_item">
                    <span>开具发票</span>
                    <span>本次不开具发票</span>
                    <van-icon name="arrow" class="arrow"/>
                </p>
                <p class="order_info_item">
                    <span>订单备注</span>
                    <span>无备注</span>
                    <van-icon name="arrow" class="arrow"/>
                </p>
            </div>
        </div>
        <van-submit-bar :price="priceSum" button-text="提交订单" @submit="onSubmit"/>
    </main>
</template>

<script setup>
import Contact from '@/components/Contact.vue';
import router from "@/router";
import {getCurrentInstance} from 'vue';

const {proxy} = getCurrentInstance();
//获取传过来的参数
const query = router.currentRoute.value.query;
const goodsData = proxy.$qs.parse(query.goodsData);
const priceSum = +query.priceSum;
console.log(goodsData, priceSum);

function onSubmit() {

}
</script>

<style scoped src="@/assets/css/view/front/confirmOrder.css"></style>