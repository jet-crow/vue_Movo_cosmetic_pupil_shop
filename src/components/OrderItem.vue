<template>
    <div class="order_item">
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题"
            :thumb="$getImgUrl('主图/日抛1_主图.png')" />
        <p style="text-align: right; line-height: 3rem;margin-right: .5rem;">
            <span style="color:#999;">含运费险服务</span>
            需付款￥6.40
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
            <van-button class="van_button" color="#FA5E1F" round plain size="small">继续付款</van-button>
        </div>
        <div v-show="state == 1 || state == 2" class="bottom_column">
            <van-button class="van_button" type="default" round size="small">延长收货</van-button>
            <van-button class="van_button" type="default" round size="small">查看物流</van-button>
            <van-button class="van_button" color="#FA5E1F" round plain size="small">确认收货</van-button>
        </div>
        <div v-show="state == 3" class="bottom_column">
            <van-button class="van_button" type="default" round size="small">加入购物车</van-button>
            <van-button class="van_button" type="default" round size="small">查看物流</van-button>
            <van-button class="van_button" color="#FA5E1F" round plain size="small">评价</van-button>
        </div>
    </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue';
const props = defineProps(['state'])
</script>
<style scoped>
.order_item {
    width: 100%;
    height: fit-content;
    background-color: white;
    border-radius: .8rem;
    margin-bottom: .5rem;
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