<template>
    <el-row class="tac">
        <el-col :span="5" class="menu_box">
            <Logo/>
            <el-menu default-active="goodsManagement"
                     :router="true"
                     @open="handleOpen" @close="handleClose">
                <el-menu-item index="goodsManagement">
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
                <el-menu-item index="goodsManagement">
                    <el-icon>
                        <setting/>
                    </el-icon>
                    <span>订单管理</span>
                </el-menu-item>
            </el-menu>
            <el-button type="warning" plain class="exit">退出</el-button>
        </el-col>
        <el-col :span="19">
            <router-view/>
        </el-col>
    </el-row>
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
    min-height: 100vh;
}

.menu_box {
    min-height: 100vh;
    background-color: white;
    padding-top: 4rem;
    position: relative;
}

.exit {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
}
</style>