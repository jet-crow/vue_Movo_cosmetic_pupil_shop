<template>
    <main>
        <Nav :isNotLogin="true"/>
        <div class="banner">
            <img :src="$getImgUrl('loginBg.jpg')" alt="" srcset="">
        </div>
        <div class="form_box">
            <label class="form_item no_border">
                <input v-model="user" placeholder="usernames"/>
                <!-- <span>&nbsp</span> -->
                <span>账号有误</span>
            </label>
            <label class="form_item no_border">
                <input v-model="password" placeholder="password"/>
                <!-- <span>&nbsp</span> -->
                <span>密码有误</span>
            </label>
            <!-- 注册part -->
            <label class="form_item no_border" v-show="!isLogin">
                <input v-model="againPassword" placeholder="again password"/>
                <!-- <span>&nbsp</span> -->
                <span>密码不一致</span>
            </label>

            <div class="form_box_button">
                <label class="from_item_button">
                    <!-- 这个按钮就跳转的页面 -->
                    <button class="form_btn" @click="switchForm">{{ isLogin ? '注册' : '登录' }}</button>
                </label>
                <label class="from_item_button">
                    <!-- 这个按钮是处理逻辑的 -->
                    <button class="form_btn" @click="jump">{{ isLogin ? '登录' : '注册' }}</button>
                </label>
            </div>
        </div>
    </main>
</template>
<script setup>
import Nav from '@/components/Nav.vue';
import {ref, getCurrentInstance} from 'vue';
import {useRouter} from 'vue-router';
import VueCookies from "vue-cookies";

const {proxy} = getCurrentInstance();

//data
const user = ref();
const password = ref();
const againPassword = ref();
const isLogin = ref(true);//是否为登录页面
//路由
const route = useRouter();

function switchForm() {
    isLogin.value = !isLogin.value;
}

//跳转
function jump() {
    // 测试 获取地址
    proxy.$api.get('/address/user/myAddress').then(res=>{
        console.log(res);
    })



    if (isLogin.value) {
        // 设置cookies
        proxy.$api.post('/account/login', proxy.$qs.stringify({
            'user': user.value,
            'password': password.value
        })).then(res => {
            console.log(res.data);
            if (res.data.status == 500) {
                alert('账号密码错误，请检查');
                return;
            }
            // 删除之前的cookies
            if ($cookies.isKey("token")) {
                $cookies.remove("token");
            }
            $cookies.set("token", res.data.data.token); // 前面的为设置cookies的名字，后面为内容

        });
    } else {
        // 点击注册按钮
        

    }
}
</script>
<style scoped src="../../assets/css/view/front/form.css"></style>