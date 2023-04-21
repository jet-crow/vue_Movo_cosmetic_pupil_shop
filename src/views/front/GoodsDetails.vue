<template>
    <nav>
        <div class="back">
            <van-icon name="arrow-left" @click="$router.back()"/>
        </div>
        <div class="options">
            <van-icon name="cart-o"  @click="$router.push('/shoppingCart')"/>
            <span @click="$router.push('/home')">{{ name }}</span>
            <van-icon name="upgrade" @click="quit"/>
        </div>
    </nav>
    <main>
        <section class="goods_map">
            <CommodityWindows :commodityData="commodityData"/>
            <div class="goods_lable">
                <span class="goods_money">¥{{ commodityData.price }}</span>
                <span class="goods_title">{{ commodityData.gname }}</span>
            </div>
        </section>

        <section class="goods_option">
            <div class="goods_chose_top">
                <ul>
                    <li v-for="(item, index) in commodityData.goodTypes" @click="choseGoods($event,item.gtypeId)">
                        <img class="item" :src="$getImgUrl(item.img)"/>
                        <span>{{ item.name }}</span>
                    </li>
                </ul>
            </div>
            <div class="goods_chose_buttom">
                <div class="goods_type">
                    {{ commodityData.introduce }}
                </div>
                <div class="goods_count">
                    <div class="reduce" @click="count > 0 ? count-- : null">
                        <van-icon name="minus"/>
                    </div>
                    <div class="count">{{ count }}</div>
                    <div class="add" @click="count++">
                        <van-icon name="plus"/>
                    </div>
                </div>
            </div>
        </section>

        <section class="goods_comment">
            <div class="goods_comment_title">
                <div class="left">
                    宝贝评价（20+）
                </div>
                <div class="right">
                    查看全部
                    <van-icon name="arrow"/>
                </div>
            </div>

            <div class="goods_comment_content">
                <ul>
                    <li>
                        <div class="name">Febird:</div>
                        <div class="comment">效果挺好的，戴上以后老公愣是找不到我在哪？</div>
                    </li>
                    <li>
                        <div class="name">jesong:</div>
                        <div class="comment">给舍友买的，舍友说有点辣～看样子蛮不错的👍</div>
                    </li>

                </ul>
            </div>
        </section>
        <section class="goods_details">
            <img v-for="(item, index) in commodityData.detailsFigure" :src="$getImgUrl(item)"/>
            <img :src="$getImgUrl('注意事项1.jpg')" alt="">
            <img :src="$getImgUrl('注意事项2.jpg')" alt="">
        </section>
    </main>
    <!-- 提交订单按钮 -->
    <footer>
        <div class="add_cart" @click="addToShoppingCart()">加入购物车</div>
        <div class="buy" @click="$router.push('/confirmOrder')">购买</div>
    </footer>
</template>
<script setup>

import CommodityWindows from '@/components/CommodityWindows.vue';
import router from '@/router';
import {ref, getCurrentInstance} from 'vue';

const {proxy} = getCurrentInstance();

// 获取过来的goodId
const goodId = router.currentRoute.value.query.goodId;
// 商品款式id gtypeId
let gtypeId = 0;
// 商品数量
let count = ref(1);
// 网页数据
let commodityData = ref({});

//nav的数据
const sName = localStorage.getItem("name");
const name = ref(sName == null ? "name" : sName);
const quit = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    name.value = "name";
    proxy.$showSuccessToast("退出成功");
}
// 获取网页数据
proxy.$api.get('/goods/goodInfo?goodId=' + goodId).then(res => {
    console.log(res.data);
    commodityData.value = res.data;
});

// 选择款式
function choseGoods(e, gtypeIdValue) {
    var chose_li = document.querySelectorAll(".goods_chose_top li");
    for (let i = 0; i < chose_li.length; i++) {
        chose_li[i].className = " ";
    }
    e.currentTarget.className = "checked";

    // 款式id赋值
    gtypeId = gtypeIdValue;
}

// 加入购物车
function addToShoppingCart() {

    proxy.$api.post('/shoppingCart/user/addGood', proxy.$qs.stringify({
        'goodId': goodId,
        'gTypeId': gtypeId,
        'num': count.value
    })).then(res => {
        proxy.$showSuccessToast('添加成功');
        console.log(res.data);
    }).catch(_ => {
        proxy.$showFailToast('请选择商品款式');
    });
}

// 设置cookies
// proxy.$api.post('/account/login', proxy.$qs.stringify({
//             'user': user.value,
//             'password': password.value
//         })).then(res => {
//             console.log(res.data);
//             if (res.data.status == 500) {
//                 alert('账号密码错误，请检查');
//                 return;
//             }
//             // 删除之前的cookies
//             if ($cookies.isKey("token")) {
//                 $cookies.remove("token");
//             }
//             $cookies.set("token", res.data.data.token); // 前面的为设置cookies的名字，后面为内容

//         });

</script>

<style scoped src="../../assets/css/view/front/goods_details.css"></style>
<style scoped></style>
