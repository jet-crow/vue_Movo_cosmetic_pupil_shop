<template>
    <div class="order_item">
        <van-card
                v-for="i in orderItem.orderItem"
                :num="i.num" :price="i.price.toFixed(2)" :desc="i.name" :title="i.gname"
                :thumb="$getImgUrl(i.img)"/>
        <p style="text-align: right; line-height: 3rem;margin-right: .5rem;">
            <span style="color:#999;">含运费险服务</span>
            {{state == 0?"需付款":"金额"}}￥{{priceSum}}
        </p>
        <!-- 不同的状态对应不同的按钮 -->
        <!-- 
            0：待付款
            1：代发货
            2：待收货
            3：待评价
         -->
        <div v-show="state == 0" class="bottom_column">
            <van-button class="van_button" type="default" round size="small">修改地址</van-button>
            <van-button class="van_button" type="default" round size="small">找朋友付</van-button>
            <van-button class="van_button" color="#FA5E1F" round plain size="small" @click="showContinueToPay=true">
                继续付款
            </van-button>
        </div>
        <div v-show="state == 1 || state == 2" class="bottom_column">
            <van-button class="van_button" type="default" round size="small">延长收货</van-button>
            <van-button class="van_button" type="default" round size="small">查看物流</van-button>
            <van-button class="van_button" color="#FA5E1F" round plain size="small" @click="showConfirmTheGoods=true">
                确认收货
            </van-button>
        </div>
        <div v-show="state == 3" class="bottom_column">
            <van-button class="van_button" type="default" round size="small">加入购物车</van-button>
            <van-button class="van_button" type="default" round size="small">查看物流</van-button>
            <van-button class="van_button" color="#FA5E1F" round plain size="small">评价</van-button>
        </div>
        <van-dialog v-model:show="showContinueToPay" @confirm="continueToPay" confirm-button-color="#FA5E1F"
                    title="是否继续付款"
                    show-cancel-button>
        </van-dialog>
        <van-dialog v-model:show="showConfirmTheGoods" @confirm="confirmTheGoods" confirm-button-color="#FA5E1F"
                    title="是否确认收货"
                    show-cancel-button>
        </van-dialog>
    </div>
</template>

<script setup>
import {defineProps, ref, getCurrentInstance, computed} from 'vue';

const {proxy} = getCurrentInstance();
const props = defineProps(['state', 'orderItem']);
const showContinueToPay = ref(false);
const showConfirmTheGoods = ref(false);
const priceSum = computed(() => {
    let priceSum = 0;
    for (const goods of props.orderItem.orderItem) {
        priceSum += goods.price * goods.num;
    }
    return priceSum;
});

//付款
const continueToPay = () => {
    proxy.$api.get("/order/user/deliverGoods?orderId=" + props.orderItem.oderId).then(r => {
        proxy.$showSuccessToast("付款成功");
        location.reload();
    });
};
//确认收货
const confirmTheGoods = () => {
    console.log(props.orderItem.oderId)
    proxy.$api.get("/order/user/evaluate?orderId=" + props.orderItem.oderId).then(r => {
        proxy.$showSuccessToast("确认收货成功");
        location.reload();
    });
};
</script>
<style scoped>
.order_item {
    width: 100%;
    height: fit-content;
    background-color: white;
    border-radius: .8rem;
    margin-bottom: .5rem;
    overflow: hidden;
}

.van_button {
    padding: 0 1rem;
    margin-right: .5rem;
    margin-bottom: .5rem;
}

.bottom_column {
    display: flex;
    justify-content: flex-end;
}
</style>