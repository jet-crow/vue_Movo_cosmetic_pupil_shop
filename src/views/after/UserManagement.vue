<template>
    <el-page-header @back="goBack">
        <template #content>
            <span class="text-large font-600 mr-3"> 商品管理 </span>
        </template>
    </el-page-header>
    <main>
        <el-table :data="filterTableData" border>
            <el-table-column label="uid" prop="uid" align="center"/>
            <el-table-column label="user" prop="user" align="center"/>
            <el-table-column label="username" prop="username" align="center"/>
            <el-table-column label="password" prop="password" align="center"/>

            <el-table-column align="right" width="200">
                <template #header>
                    <div class="function_header">
                        <el-button type="warning" size="small" plain class="add_item">添加用户</el-button>
                        <el-input v-model="search" size="small" placeholder="Type to search"/>
                    </div>
                </template>
                <template #default="scope">
                    <el-button @click="handleEdit(scope.$index, scope.row)">
                        Edit
                    </el-button>
                    <el-popconfirm title="Are you sure to delete this?"
                    @confirm="handleDelete(scope.$index, scope.row)"
                    >
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
import {computed, ref} from 'vue'


const tableData = [
    {
        uid:1,
        user:13911111112,
        username:"Febird",
        password:123

    },
    {
        uid:1,
        user:13911111112,
        username:"Febird",
        password:123

    },
    {
        uid:1,
        user:13911111112,
        username:"Febird",
        password:123

    },
    {
        uid:1,
        user:13911111112,
        username:"Febird",
        password:123

    }
]

const search = ref('')
const filterTableData = computed(() =>
        tableData.filter((data) => !search.value ||
                data.name.toLowerCase().includes(search.value.toLowerCase()))
)
const handleEdit = (index, row) => {
    console.log(index, row)
}
const handleDelete = (index, row) => {
    console.log(index, row);
}
const goBack = () => {
    console.log('go back')
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
