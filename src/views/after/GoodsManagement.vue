<template>
    <el-page-header @back="goBack">
        <template #content>
            <span class="text-large font-600 mr-3"> 商品管理 </span>
        </template>
    </el-page-header>
    <main>
        <el-table :data="filterGoodsData" border>
            <el-table-column label="图片" prop="img" align="center" width="120">
                <template #default="scope">
                    <el-image :src="$getImgUrl(scope.row.mainImg)"></el-image>
                </template>
            </el-table-column>
            <el-table-column label="商品名称" prop="gname" align="center"/>
            <el-table-column label="描述" prop="introduce" align="center" width="250"/>
            <el-table-column label="价格" prop="price" align="center" width="100">
                <template #default="scope">
                    ￥{{ scope.row.price }}
                </template> 
            </el-table-column>
            
            <el-table-column align="right" width="200">
                <template #header>
                    <div class="function_header">
                        <el-button type="warning" size="small" plain class="add_item" @click="add">添加商品</el-button>
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
    <template v-if="centerDialogVisible">
        <EditCommodity v-model:show-dialog="centerDialogVisible" :goodId="goodId"/>
    </template>
</template>

<script setup>
import EditCommodity from "@/components/EditCommodity.vue";
import {computed, ref, reactive ,getCurrentInstance} from 'vue';
import {showSuccessToast, showFailToast} from 'vant';

const { proxy } = getCurrentInstance();
let goodsData = ref([]);

// 获取网页数据
proxy.$api.get('/goods/admin/AllGoods').then(res => {
    // console.log(res.data);
    goodsData.value = res.data;
    // console.log(goodsData.value);
});
const search = ref('');
const filterGoodsData = computed(() => {
    return goodsData.value.filter((data) => !search.value ||
        data.gname.toLowerCase().includes(search.value.toLowerCase()))
});

/*删除*/
const handleDelete = (index, row) => {
    console.log(index, row);
    // 获取网页数据
    proxy.$api.get('/goods/admin/delGood?goodId=' + row.goodId).then(res => {
        console.log(res.data.status);

        if(res.data.status === 200){
            showSuccessToast('删除成功');
            location.reload();
        }else{
            showFailToast('删除失敗');
        }
    });
};

/*编辑弹窗*/
const centerDialogVisible = ref(false);
//是否为添加
const goodId = ref(0);
const add =()=>{
    centerDialogVisible.value = true;
    goodId.value = 0;
}
const handleEdit = (index, row) => {
    centerDialogVisible.value = true;
    goodId.value = row.goodId;
    // console.log(row.goodId);
};


const goBack = () => {
    console.log('go back');
    window.history.go(-1);
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
