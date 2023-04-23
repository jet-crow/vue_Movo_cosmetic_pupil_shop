<template>
    <Logo />
    
    <main>
        
        <section class="login_box">
            <el-text class="title" type="warning">Movo美瞳选购平台管理端</el-text>
            <el-input class="font_size-2xl" v-model="user" placeholder="Please input" clearable />
            <el-input class="font_size-2xl" v-model="password" type="password" placeholder="Please input password" show-password />
            <el-button class="font_size-2xl btn" type="warning" @click="jump" round> 登录 </el-button>
        </section>
    </main>
</template>

<script setup>
import Logo from '@/components/Logo.vue'
// 引入js
import {showSuccessToast, showFailToast} from 'vant';
import {ref, reactive, getCurrentInstance} from 'vue';
import router from "@/router";
const {proxy} = getCurrentInstance();


const user = ref('');
const password = ref('')

function jump(){
    proxy.$api.post('/account/login', proxy.$qs.stringify({
            'user': user.value,
            'password': password.value
        })).then(res => {
            console.log(res.data.data.isAdmin);
            if (res.data.status === 500 || !res.data.data.isAdmin) {
                showFailToast('登錄失敗');
                return;
            }
            showSuccessToast('登錄成功');
            // 前面的为设置cookies
            localStorage.setItem("adminToken", res.data.data.token);
            localStorage.setItem("name", res.data.data.user);
            localStorage.setItem("uid", res.data.data.uid);
            //跳转管理员页
            router.push('/admin/userManagement');
        });
}
</script>

<style scoped src="@/assets/css/view/after/login.css"></style>