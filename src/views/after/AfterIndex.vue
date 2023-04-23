<template>
    <main class="tac">
        <div class="menu_box">
            <Logo/>
            <el-menu default-active="/admin/userManagement"
                     :router="true">
                <el-menu-item index="/admin/userManagement">
                    <el-icon>
                        <setting/>
                    </el-icon>
                    <span>用户管理</span>
                </el-menu-item>
                <el-menu-item index="/admin/goodsManagement">
                    <el-icon>
                        <setting/>
                    </el-icon>
                    <span>商品管理</span>
                </el-menu-item>
                <el-menu-item index="/admin/orderManagement">
                    <el-icon>
                        <setting/>
                    </el-icon>
                    <span>订单管理</span>
                </el-menu-item>
            </el-menu>
            <el-button type="warning" plain class="exit" @click="exit">退出</el-button>
        </div>
        <div class="view_item">
            <router-view/>
        </div>
    </main>
</template>

<script setup>
import {
    Setting,
} from '@element-plus/icons-vue'
import Logo from "@/components/Logo.vue";
import router from "@/router";
const exit=()=>{
    localStorage.removeItem("name");
    localStorage.removeItem("adminToken");
    router.replace("/index");
}
</script>
<style scoped src="@/assets/css/view/after/afterIndex.css"></style>