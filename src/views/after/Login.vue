<template>
    <!-- <Nav /> -->
    <main>
        <!-- <label>
            <input v-model="user" />
            <span>账号输入有误</span>
        </label>
        <label>
            <input v-model="password" />
            <span>密码输入有误</span>
        </label> -->
        <div style="border:1px solid; width: inherit; height: inherit;">
            <van-swipe :autoplay="3000" :show-indicators="false">
                <van-swipe-item style=" background-color: #39a9ed;">
                    <div class="box" style="background-color: red;;">

                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div style="background-color: yellow; height: 7rem;width: 20rem;"></div>
                </van-swipe-item>
                <van-swipe-item>
                    <div style="background-color: blue; height: 7rem;width: 20rem;"></div>
                </van-swipe-item>
                <van-swipe-item>
                    <div style="background-color: black; height: 7rem;width: 20rem;"></div>
                </van-swipe-item>
            </van-swipe>
        </div>
    </main>
</template>
<script setup>
import Nav from '../../components/Nav.vue'
import { ref } from 'vue'
const user = ref()
const password = ref()

</script>
<style scoped>
main {
    /* margin-top: 5rem; */
    width: 100vw;
    height: 34.5rem;
    background-image: url(../../assets/image/日抛1/日抛1-顶图.png);
    background-size: 100%;
    display: flex;
    flex-direction: column;
}
</style>
