<template>
    <Logo />
    
    <main>
        
        <section class="login_box">
            <el-text class="title" type="warning">Movo美瞳选购平台管理端</el-text>
            <el-input class="font_size-2xl" v-model="input" placeholder="Please input" clearable />
            <el-input class="font_size-2xl" v-model="password" type="password" placeholder="Please input password" show-password />
            <el-button class="font_size-2xl btn" type="warning" round> 登录 </el-button>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Logo from '@/components/Logo.vue'

const input = ref('');
const password = ref('')

</script>

<style scoped src="@/assets/css/view/after/login.css"></style>
<style scoped>
</style>
