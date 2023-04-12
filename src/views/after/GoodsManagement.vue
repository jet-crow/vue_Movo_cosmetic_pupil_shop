<template>
    <el-page-header @back="goBack">
        <template #content>
            <span class="text-large font-600 mr-3"> 商品管理 </span>
        </template>
    </el-page-header>
    <main>
        <el-table :data="filterTableData" border>
            <el-table-column label="图片" prop="img" align="center" width="120">
                <template #default="scope">
                    <el-image :src="$getImgUrl(scope.row.img)"></el-image>
                </template>
            </el-table-column>
            <el-table-column label="商品名称" prop="name" align="center"/>
            <el-table-column label="描述" prop="describe" align="center" width="250"/>
            <el-table-column label="价格" prop="price" align="center" width="100">
                <template #default="scope">
                    ￥{{ scope.row.price }}
                </template>
            </el-table-column>
            <el-table-column align="right" width="200">
                <template #header>
                    <div class="function_header">
                        <el-button type="warning" size="small" plain class="add_item">添加商品</el-button>
                        <el-input v-model="search" size="small" placeholder="Type to search"/>
                    </div>
                </template>
                <template #default="scope">
                    <el-button @click="handleEdit(scope.$index, scope.row)">
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
    <!--编辑弹窗-->
    <el-dialog
            v-model="centerDialogVisible"
            title="编辑商品"
            width="60%"
            align-center>
        <div class="good_details">
            <p>商品名称：{{goodDetails.name}}</p>
            <p>商品描述：</p>
            <p>定价：</p>
        </div>
        <template #footer>
            <span class="dialog-footer">
            <el-button @click="centerDialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">
                Confirm
            </el-button>
      </span>
        </template>
    </el-dialog>
</template>

<script setup>
import {computed, ref, reactive} from 'vue'

const tableData = [
    {
        name: '【花色上新】moody经典日抛美瞳大小直径彩色隐形眼镜女官方',
        describe: "夏日限定 #新花色｜日抛",
        img: '主图/半年抛1_主图.png',
        imgTop: '日抛1/日抛1_0000_顶图',
        imgBottom: '日抛1/日抛1_0005_底图',
        price: 100,
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
        tableData.filter((data) => !search.value ||
                data.name.toLowerCase().includes(search.value.toLowerCase()))
)
const handleDelete = (index, row) => {
    console.log(index, row);
}
const goBack = () => {
    console.log('go back')
}

/*编辑弹窗*/
const centerDialogVisible = ref(false);
let goodDetails = {};
const handleEdit = (index, row) => {
    centerDialogVisible.value = true;
    goodDetails = row;
};

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
