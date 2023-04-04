<template>
    <Nav />
    <main>
        <div class="login_box">
            <label class="login_item no_border">
                <input v-model="user" /><br />
                <span>账号输入有误</span>
            </label>
            <label class="login_item no_border">
                <input v-model="password" /><br />
                <span>密码输入有误</span>
            </label>
            <label class="login_item">
                <button class="login_btn">登录</button>
            </label>
            <label class="login_item">
                <button class="login_btn">注册</button>
            </label>
        </div>
    </main>
</template>
<script setup>
import Nav from '@/components/Nav.vue'
import { ref } from 'vue'

//账号和密码
const user = ref()
const password = ref()


</script>
<style scoped>
@import url(../../assets/css/view/after/login.css);
</style>