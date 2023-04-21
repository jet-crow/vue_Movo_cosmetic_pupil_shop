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
            <li v-for="(item, index) in filterOrderData">
                <div class="box_top">
                    <div class="box_top_left">
                        下单用户: <span>{{ item.orderItem[0].consignee }}</span>
                    </div>
                    <div class="box_top_right">
                        订单号: <span>{{ item.oderId }}</span>
                    </div>
                </div>
                <div class="box_bottom">
                    <div class="box_bottom_left" v-for="(items, index) in item.orderItem">
                        <div class="box_bottom_left1">
                            <img :src="$getImgUrl(items.img)">
                        </div>
                        <div class="box_bottom_left2">
                            <p>{{ items.name }}</p>
                            <span>X {{ items.num }}</span>
                        </div>
                        <div class="box_bottom_empty"></div>
                        <div class="box_bottom_right2">
                            <p>单价 ¥{{ items.price }}</p>
                        </div>
                    </div>
                    <div class="box_bottom_address">
                        <p>收件人：{{ item.orderItem[0].consignee }} ｜ 手机号：{{ item.orderItem[0].tel }} ｜ 地址：{{ item.orderItem[0].address + item.orderItem[0].detailedAddress }}</p>
                    </div>
                    <div class="box_bottom_right">
                        <p>实付 ¥<span>{{ item.orderItem[0].priceSum }}</span></p>
                        <div class="btn">{{ item.orderItem[0].productStatus == 0 ? "待付款" : item.orderItem[0].productStatus == 1 ? "待发货" : item.orderItem[0].productStatus == 2 ? "待收货" :"待评价" }}</div>
                    </div>
                </div>
            </li>
        </ul>
    </main>
</template>
<script setup>
import { computed, ref, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();
let orderData = ref([]);
// 获取网页数据
proxy.$api.get('/order/admin/queryOrder').then(res => {
    console.log(res.data);
    orderData.value = res.data;
    console.log(orderData.value);
});

const search = ref('');
const filterOrderData = computed(() => {
    
    return orderData.value.filter((data) => !search.value ||
        (data.orderId + "").includes(search.value));
});
</script>

<style scoped src="@/assets/css/view/after/order_management.css"></style>