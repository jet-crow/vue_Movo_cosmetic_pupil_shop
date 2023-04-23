<template>
    <el-dialog
            v-model="show" @close="close" title="新增用户信息" width="60%" align-center>
        <el-input size="large" placeholder="请输入用户名" v-model="userData.username">
            <template #prepend>账号:</template>
        </el-input>
        <div class="h" style=" height: 20px;"></div>
        <el-input size="large" placeholder="请输入密码" v-model="userData.password">
            <template #prepend>密码:</template>
        </el-input>
        <template #footer>
            <el-button type="primary" v-show="isAdd" @click="addUser">
                新增
            </el-button>
            <el-button type="primary" v-show="!isAdd" @click="updateUser">
                修改
            </el-button>
        </template>
    </el-dialog>

    <el-page-header @back="goBack">
        <template #content>
            <span class="text-large font-600 mr-3"> 用户管理 </span>
        </template>
    </el-page-header>
    <main>
        <el-table :data="filterAccountData" border>
            <el-table-column label="uid" prop="uid" align="center"/>
            <el-table-column label="user" prop="user" align="center"/>
            <el-table-column label="password" prop="password" align="center"/>
            <el-table-column label="role" prop="level" align="center">
                <template #default="scope">
                    <!-- {{ scope.row.level  }} -->
                    用户
                </template>
            </el-table-column>

            <el-table-column align="right" width="200">
                <template #header>
                    <div class="function_header">
                        <el-button type="warning" size="small" plain class="add_item" @click="showDialog">添加用户
                        </el-button>
                        <el-input v-model="search" size="small" placeholder="Type to search"/>
                    </div>
                </template>
                <template #default="scope">
                    <el-button @click="showDialog(scope.$index, scope.row)">
                        Edit
                    </el-button>
                    <el-popconfirm title="Are you sure to delete this?"
                                   @confirm="handleDelete(scope.$index, scope.row)">
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
import {computed, ref, getCurrentInstance, nextTick} from 'vue';

const show = ref(false);
const isAdd = ref(false);
const userData = ref({
    username: null,
    password: null,
})

const {proxy} = getCurrentInstance();
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
const showDialog = (_, row) => {
    show.value = true;
    if (row == null) {
        isAdd.value = true;
        userData.value.username = null;
        userData.value.password = null;
        return;
    }
    isAdd.value = false;
    userData.value.username = row.user;
    userData.value.password = row.password;
    userData.value.uid = row.uid;
}

//新增
const addUser = () => {
    proxy.$api.post("/account/admin/insertUser", proxy.$qs.stringify({
        user: userData.value.username,
        password: userData.value.password
    })).then(r => {
        console.log(r.data);
        show.value = false;
        ElMessage({
            message: '添加用户成功',
            type: 'success',
        });
        nextTick(r => {
            location.reload();
        });
    }).catch(err => {
        ElMessage({
            message: '添加用户失败',
            type: 'error',
        })
    });
}
//编辑
const updateUser = () => {
    proxy.$api.put("/account/admin/updateUser", proxy.$qs.stringify({
        uid: userData.value.uid,
        user: userData.value.username,
        password: userData.value.password,
    })).then(r => {
        show.value = false;
        ElMessage({
            message: '修改成功',
            type: 'success',
        });
        nextTick(r => {
            location.reload();
        });
    }).catch(err => {
        ElMessage({
            message: '修改用户失败',
            type: 'error',
        })
    });
};
const handleDelete = (index, row) => {
    proxy.$api.get("/account/admin/delUser?uid=" + row.uid).then(r => {
        ElMessage({
            message: '删除成功',
            type: 'success',
        })
        location.reload();
    });
};
const goBack = () => {
    // console.log('go back');
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
