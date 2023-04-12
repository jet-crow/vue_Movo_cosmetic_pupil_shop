<template>
    <main class="tac">
        <div class="menu_box">
            <Logo/>
            <el-menu default-active="goodsManagement"
                     :router="true"
                     @open="handleOpen" @close="handleClose">
                <el-menu-item index="userManagement">
                    <el-icon>
                        <setting/>
                    </el-icon>
                    <span>用户管理</span>
                </el-menu-item>
                <el-menu-item index="goodsManagement">
                    <el-icon>
                        <setting/>
                    </el-icon>
                    <span>商品管理</span>
                </el-menu-item>
                <el-menu-item index="orderManagement">
                    <el-icon>
                        <setting/>
                    </el-icon>
                    <span>订单管理</span>
                </el-menu-item>
            </el-menu>
            <el-button type="warning" plain class="exit">退出</el-button>
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

const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>
<style scoped>
.tac {
    display: flex;
}

.menu_box {
    min-height: 100vh;
    background-color: white;
    padding-top: 4rem;
    position: relative;
    width: 180px;
    min-width: 180px;
}

.view_item {
    flex: 1;
    padding:4px;
}

.exit {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
}
</style>