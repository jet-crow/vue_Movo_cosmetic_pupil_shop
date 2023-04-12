<template>
    <el-row class="tac">
        <el-col :span="4" class="menu_box">
            <h5 class="mb-2">Default colors</h5>
            <el-menu default-active="1" @open="handleOpen" @close="handleClose">
                <el-menu-item index="1">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>用户管理</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>商品管理</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>订单管理</span>
                </el-menu-item>
            </el-menu>
            <el-button type="warning" plain>退出</el-button>
        </el-col>
        <el-col :span="20">
            1
            <router-view/>
        </el-col>
    </el-row>
</template>

<script setup>
import {
    Setting,
} from '@element-plus/icons-vue'
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
}
</style>