<template>
    <main>
        <Nav />
        <div class="banner">
            <img src="../../assets/images/loginBg.jpg" alt="" srcset="">
        </div>
        <div class="login_box">
            <label class="login_item_input no_border">
                <input v-model="user" placeholder="usernames"/>
                <!-- <span>&nbsp</span> -->
                <span>账号输入有误</span>
            </label>
            <label class="login_item_input no_border">
                <input v-model="password" placeholder="password" />
                <!-- <span>&nbsp</span> -->
                <span>密码输入有误</span>
            </label>

            <div class="login_box_button">
                <label class="login_item_button">
                    <button class="login_btn">注册</button>
                </label>
                <label class="login_item_button">
                    <button class="login_btn">登录</button>
                </label>
            </div>
        </div>
    </main>
</template>
<script setup>
import Nav from '@/components/Nav.vue';
import { ref } from 'vue';

//账号和密码
const user = ref();
const password = ref()


</script>
<style scoped>
@import url(../../assets/css/view/after/login.css);
</style>