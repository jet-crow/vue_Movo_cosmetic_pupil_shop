<template>
    <el-dialog :model-value="addUser" @close="close" title="新增用户信息" width="60%" align-center>
        <el-input size="large" placeholder="请输入用户名">
            <template #prepend>账号:</template>
        </el-input>
        <div class="h" style="height: 20px;"></div>
        <el-input size="large" placeholder="请输入密码">
            <template #prepend>密码:</template>
        </el-input>
        <template #footer>
                <el-button type="primary">
                    新增
                </el-button>
        </template>
    </el-dialog>

    <el-dialog :model-value="updateUser" @close="close" title="修改用户信息" width="60%" align-center>
        <el-input size="large" placeholder="请输入用户名" value="{{ addUserData.password }}">
            <template #prepend>账号:</template>
        </el-input>
        <div class="h" style="height: 20px;"></div>
        <el-input size="large" placeholder="请输入密码">
            <template #prepend>密码:</template>
        </el-input>
        <template #footer>
                <el-button type="primary">
                    修改
                </el-button>
        </template>
    </el-dialog>

    <el-page-header @back="goBack">
        <template #content>
            <span class="text-large font-600 mr-3"> 商品管理 </span>
        </template>
    </el-page-header>
    <main>
        <el-table :data="filterAccountData" border>
            <el-table-column label="uid" prop="uid" align="center" />
            <el-table-column label="user" prop="user" align="center" />
            <el-table-column label="password" prop="password" align="center" />
            <el-table-column label="role" prop="level" align="center">
                <template #default="scope">
                    <!-- {{ scope.row.level  }} -->
                    用户
                </template>
            </el-table-column>

            <el-table-column align="right" width="200">
                <template #header>
                    <div class="function_header">
                        <el-button type="warning" size="small" plain class="add_item" @click="addUser = true">添加用户</el-button>
                        <el-input v-model="search" size="small" placeholder="Type to search" />
                    </div>
                </template>
                <template #default="scope">
                    <el-button @click="handleEdit(scope.$index, scope.row)">
                        Edit
                    </el-button>
                    <el-popconfirm title="Are you sure to delete this?" @confirm="handleDelete(scope.$index, scope.row)">
                        <template #reference>
                            <el-button type="danger">Delete</el-button>
                        </template>
                    </el-popconfirm>

                </template>
            </el-table-column>
        </el-table>
    </main>
</template>

<script setup>
import { computed, ref, getCurrentInstance } from 'vue';

const addUser = ref(false);
const updateUser = ref(false);
const addUserData = ref({
    username:null,
    password:11,
})

const { proxy } = getCurrentInstance();
let accountData = ref([]);

// 获取网页数据
proxy.$api.get('/account/admin/userAll').then(res => {
    console.log(res.data);
    accountData.value = res.data;
    console.log(accountData.value);
});

const search = ref('');
const filterAccountData = computed(() => {
    return accountData.value.filter((data) => !search.value ||
        (data.uid + "").includes(search.value) ||
        (data.user + "").includes(search.value));
});
const handleEdit = (index, row) => {
    console.log(index, row);
    updateUser.value = true;
};
const handleDelete = (index, row) => {
    console.log(index, row);
};
const goBack = () => {
    console.log('go back');
    window.history.go(-1);
}

/*是否删除*/
</script>

<style scoped>
main {
    padding: 20px;
    position: relative;
    width: 1200px;
    margin: 0 auto;
}

.add_item {
    position: relative;
    margin-right: 10px;
}

.function_header {
    display: flex;
}
</style>
