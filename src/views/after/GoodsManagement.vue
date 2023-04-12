<template>
    <el-page-header @back="goBack">
        <template #content>
            <span class="text-large font-600 mr-3"> 商品管理 </span>
        </template>
    </el-page-header>
    <main>
        <el-button type="warning" plain class="add_item">添加商品</el-button>
        <el-table :data="filterTableData">
            <el-table-column label="图片" prop="img" align="center">
                <template #default="scope">
                    1
                </template>
            </el-table-column>
            <el-table-column label="商品名称" prop="name" align="center"/>
            <el-table-column label="描述" prop="describe" align="center"/>
            <el-table-column label="价格" prop="price" align="center"/>
            <el-table-column align="right">
                <template #header>
                    <el-input v-model="search" size="small" placeholder="Type to search"/>
                </template>
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                    >Edit
                    </el-button
                    >
                    <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)"
                    >Delete
                    </el-button
                    >
                </template>
            </el-table-column>
        </el-table>
    </main>
</template>

<script setup>
import {computed, ref} from 'vue'

const tableData = [
    {
        img: '主图/半年抛1_主图.png',
        name: '商品1',
        price: 100,
        describe: 'No. 189, Grove St, Los Angeles',
    },
    {
        img: '主图/半年抛1_主图.png',
        name: '商品2',
        price: 100,
        describe: 'No. 189, Grove St, Los Angeles',
    },
    {
        img: '主图/半年抛1_主图.png',
        name: '商品3',
        price: 100,
        describe: 'No. 189, Grove St, Los Angeles',
    },
    {
        img: '主图/半年抛1_主图.png',
        name: '商品4',
        price: 100,
        describe: 'No. 189, Grove St, Los Angeles',
    },
]

const search = ref('')
const filterTableData = computed(() =>
        tableData.filter(
                (data) =>
                        !search.value ||
                        data.name.toLowerCase().includes(search.value.toLowerCase())
        )
)
const handleEdit = (index, row) => {
    console.log(index, row)
}
const handleDelete = (index, row) => {
    console.log(index, row)
}
const goBack = () => {
    console.log('go back')
}
</script>

<style scoped>
main {
    padding: 20px;
}

.add_item {
    float: right;
    margin-bottom: 5px;
}
</style>
