<template>
    <Nav />
    <main>
        <section class="my_info">
            <p class="name">Febird</p>
            <p class="tel">userID : 13410086110</p>
        </section>
        <section class="goods_state"  @click="$router.push('/myOrder')">
            <ul>
                <li>
                    <van-icon name="coupon" />
                    <span>待付款</span>
                </li>
                <li>
                    <van-icon name="send-gift" />
                    <span>待发货</span>
                </li>
                <li>
                    <van-icon name="cart" />
                    <span>待收货</span>
                </li>
                <li>
                    <van-icon name="comment" />
                    <span>待评价</span>
                </li>
            </ul>
        </section>
        <section class="address"  @click="$router.push('/addressList')">
            <span>地址管理</span>
            <van-icon name="arrow" />
        </section>
    </main>
    
</template>
<script setup>
import Nav from '@/components/Nav.vue'
</script>
<style scoped src="../../assets/css/view/after/home.css"></style>
<style scoped>

</style>
