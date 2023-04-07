<template>
    <nav>
        <div class="back">
            <van-icon name="arrow-left" />
        </div>
        <div class="options">
            <van-icon name="cart-o" />
            <span>name</span>
            <van-icon name="upgrade" />
        </div>
    </nav>
    <main>
        <section class="goods_map">
            <CommodityWindows :commodityData="commodityData" />
            <div class="goods_lable">
                <span class="goods_money">¥89</span>
                <span class="goods_title">【花色上新】moody经典日抛美瞳大小直径彩色隐形眼镜女官方</span>
            </div>
        </section>

        <section class="goods_option">
            <div class="goods_chose_top">
                <ul>
                    <li v-for="(item, index) in shoppingCarData.itemData" @click="choseGoods($event)">
                        <img class="item" :src="$getImgUrl(item.itemImg)" />
                        <span>{{ item.itemTitle }}</span>
                    </li>
                </ul>
            </div>
            <div class="goods_chose_buttom">
                <div class="goods_type">
                    夏日限定 #新花色｜日抛
                </div>
                <div class="goods_count">
                    <div class="reduce"><van-icon name="minus" /></div>
                    <div class="count">{{ count }}</div>
                    <div class="add"><van-icon name="plus" /></div>
                </div>
            </div>
        </section>

        <section class="goods_comment">
            <div class="goods_comment_title">
                <div class="left">
                    宝贝评价（20+）
                </div>
                <div class="right">
                    查看全部<van-icon name="arrow" />
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
            <img v-for="(item, index) in GoodsDetailsData.itemImg" :src="$getImgUrl(item)" />
            <img :src="$getImgUrl('注意事项1.jpg')" alt="">
            <img :src="$getImgUrl('注意事项2.jpg')" alt="">
        </section>
    </main>
    <!-- 提交订单按钮 -->
    <footer>
        <div class="add_cart">加入购物车</div>
        <div class="buy"  @click="$router.push('/confirmOrder')">购买</div>
    </footer>
</template>
<script setup>
import CommodityWindows from '@/components/CommodityWindows.vue';
const count = 1;
const commodityData = {
    topImg: "日抛1/日抛1_0000_顶图.png",
    bottomImg: "日抛1/日抛1_0005_底图.png",
    itemImg: ["日抛1/日抛1_0001_伽罗棕.png",
        "日抛1/日抛1_0002_胶片棕.png", "日抛1/日抛1_0003_丝绒棕.png", "日抛1/日抛1_0004_柔咖棕.png"]
};

const shoppingCarData = {
    itemData: [{
        itemTitle: "胶片棕",
        itemImg: "日抛1/日抛1-胶片棕-商品图.jpg"
    }, {
        itemTitle: "伽罗粽",
        itemImg: "日抛1/日抛1-伽罗棕-商品图.jpg"
    }, {
        itemTitle: "柔咖棕",
        itemImg: "日抛1/日抛1-柔咖棕-商品图.jpg"
    }, {
        itemTitle: "丝绒棕",
        itemImg: "日抛1/日抛1-丝绒棕-商品图.jpg"
    }]
};

const GoodsDetailsData = {
    itemImg: ["日抛1/日抛1-详情页1.jpg",
        "日抛1/日抛1-详情页2.jpg",
        "日抛1/日抛1-详情页3.jpg",
        "日抛1/日抛1-详情页4.jpg",
        "日抛1/日抛1-详情页5.jpg",
        "日抛1/日抛1-详情页6.jpg",
        "日抛1/日抛1-详情页7.jpg",
        "日抛1/日抛1-详情页8.jpg",
        "日抛1/日抛1-详情页9.jpg",
        "日抛1/日抛1-胶片棕-商品图.jpg"]
};

function choseGoods(e) {
    var chose_li = document.querySelectorAll(".goods_chose_top li");
    for (let i = 0; i < chose_li.length; i++) {
        chose_li[i].className = " ";
    }
    e.currentTarget.className = "checked";

}



</script>

<script>

</script>


<style scoped src="../../assets/css/view/after/goods_details.css"></style>
<style scoped></style>
