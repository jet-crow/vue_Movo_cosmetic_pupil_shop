<template>
    <nav>
        <van-icon class="back" name="arrow-left" />
        <p class="title">地址列表</p>
    </nav>
    <!-- 添加地址或编辑地址 -->
    <!-- 底部弹出 -->
    <van-popup v-model:show="show" closeable position="bottom" style="height: 52%; padding-top: 1rem;">
        <van-address-edit :area-list="areaList" show-delete show-set-default show-search-result
            :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave"
            @delete="onDelete" @change-detail="onChangeDetail" />

    </van-popup>
    <!-- 地址列表 -->
    <div style="min-height: calc(100vh - 4rem);">
        <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit" />
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import { areaList } from '@vant/area-data';
/* 联系人 */
const chosenAddressId = ref('1');
const list = reactive([
    {
        id: '1',
        name: '张三',
        tel: '13000000000',
        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        isDefault: true,
    },
    {
        id: '2',
        name: '李四',
        tel: '1310000000',
        address: '浙江省杭州市拱墅区莫干山路 50 号',
    },
]);
//弹出层
const show = ref(false);
const onAdd = () => {
    show.value = true;
};
const onEdit = (item, index) => {
    console.log('编辑地址:' + index)
};

/* 编辑地址 */
const searchResult = ref([]);
const onSave = () => {
    console.log("save");
}
const onDelete = () => console.log('delete');
const onChangeDetail = (val) => {
    if (val) {
        searchResult.value = [
            {
                name: '黄龙万科中心',
                address: '杭州市西湖区',
            },
        ];
    } else {
        searchResult.value = [];
    }
};


</script>

<style scoped src="@/assets/css/view/front/addressList.css"></style>