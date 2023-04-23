<template>
    <nav>
        <van-icon class="back" name="arrow-left" @click="$router.back()"/>
        <p class="title">提交订单</p>
    </nav>
    <!-- 联系人 -->
    <Contact :isDefault="isDefault" :addressData="addressData"/>
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
    <van-dialog v-model:show="showContinueToPay"
                @cancel="$router.back();"
                @confirm="continueToPay" confirm-button-color="#FA5E1F"
                title="是否继续付款"
                show-cancel-button>
    </van-dialog>
</template>

<script setup>
import Contact from '@/components/Contact.vue';
import router from "@/router";
import {getCurrentInstance, ref} from 'vue';

const {proxy} = getCurrentInstance();
//获取传过来的参数
const query = router.currentRoute.value.query;
const goodsData = proxy.$qs.parse(query.goodsData);
const isBuy = query.isBuy;

const priceSum = +query.priceSum;
const isDefault = ref(false);
const addressData = ref();
const showContinueToPay = ref(false);

//获取默认地址，若为空则提示请选择地址
proxy.$api.get("/address/user/defaultContactAddress").then(r => {
    //没有默认联系人
    if (r.data[0] === undefined) {
        isDefault.value = false;
        return;
    }
    isDefault.value = true;
    addressData.value = r.data[0];
});

const orderId = ref();
console.log(isBuy)

//点击就添加订单，弹窗是否付款
function onSubmit() {
    //判断一下是否有地址
    if (!isDefault.value) {
        proxy.$showFailToast("请添加收货地址");
        return false;
    }
    let orderDetails = [];
    console.log(goodsData)
    for (const goods in goodsData) {
        orderDetails.push({
            "goodId": +goodsData[goods].goodId,
            "gTypeId": +goodsData[goods].gtypeId,
            "price": (+goodsData[goods].price).toFixed(2),
            "num": +goodsData[goods].num
        })
    }
    console.log(orderDetails)
    //调用提交订单接口
    proxy.$api.post("/order/user/submit", {
        "priceSum": priceSum / 100,
        "addressId": addressData.value.addressId,
        "orderDetails": orderDetails
    }).then(r => {
        orderId.value = r.data.orderId;
        showContinueToPay.value = true;
        //循环掉一下删除商品的接口
        //如果上一个页面是商品详情页就不删除
        if (isBuy) {
            return;
        }
        for (let orderDetail of orderDetails) {
            //传goodId和gTypeId删除
            proxy.$api.get(`/shoppingCart/user/delGoodsByGoodsItem?goodId=${orderDetail.goodId}&gTypeId=${orderDetail.gTypeId}`);
        }
    });
}

const continueToPay = () => {
    proxy.$api.get("/order/user/deliverGoods?orderId=" + orderId.value).then(r => {
        proxy.$showSuccessToast("付款成功");
        router.back();
    });
}
</script>

<style scoped src="@/assets/css/view/front/confirmOrder.css"></style>