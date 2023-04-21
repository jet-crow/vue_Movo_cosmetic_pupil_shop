<template>
    <nav>
        <van-icon class="back" name="arrow-left" @click="$router.back()"/>
        <p class="title">地址列表</p>
    </nav>
    <!-- 添加地址或编辑地址 -->
    <!-- 底部弹出 -->
    <van-popup v-model:show="show" closeable position="bottom"
               class="addressPopup">
        <van-address-edit :area-list="areaList" :show-delete="isEdit" show-set-default show-search-result
                          :area-columns-placeholder="['请选择', '请选择', '请选择']"
                          :address-info="addressInfo"
                          @save="onSave"
                          @delete="onDelete"/>
    </van-popup>
    <!-- 地址列表 -->
    <div style="min-height: calc(100vh - 4rem);">
        <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认"
                          @select="onSelect" @add="onAdd" @edit="onEdit"/>
    </div>
</template>
<script setup>
import {ref, reactive, getCurrentInstance} from 'vue';
import {areaList} from '@vant/area-data';

const {proxy} = getCurrentInstance();
/* 联系人 */
const chosenAddressId = ref(1);
const list = ref([{
    id: '1',
    name: '张三',
    tel: '13000000000',
    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
    isDefault: true,
}]);
//获取该用户的全部地址
proxy.$api.get("/address/user/myAddress").then(r => {
    list.value = r.data.map(i => {
        if (!!i.defaultContact) {
            chosenAddressId.value = i.addressId;
        }
        return {
            id: i.addressId,
            name: i.consignee,
            tel: i.tel,
            address: i.address + i.detailedAddress,
            addressHead: i.address,
            detailedAddress: i.detailedAddress,
            isDefault: !!i.defaultContact,
        };
    })
    // console.log(r.data);
})

const emptyDefault = () => {
    for (const listItem of list.value) {
        listItem.isDefault = false;
    }
}
//切换默认联系人
const onSelect = (item, index) => {
    proxy.$api.put("/address/user/updateDefaultContact", proxy.$qs.stringify({
        addressId: item.id,
    })).then(r => {
        emptyDefault();
        list.value[index].isDefault = true;
    });
};
//弹出层
const show = ref(false);
const isEdit = ref(false);
/* 编辑地址 */
const addressInfo = ref({
    addressDetail: "123",
    areaCode: "110105",
    city: "北京市",
    county: "朝阳区",
    isDefault: false,
    name: "123",
    province: "北京市",
    tel: "13417876031",
});
const onAdd = (item) => {
    show.value = true;
    isEdit.value = false;
    addressInfo.value = {};
};
const onEdit = (item, index) => {
    show.value = isEdit.value = true;
    let i = list.value[index];
    addressInfo.value = {
        addressId: i.id,
        addressDetail: i.detailedAddress,
        city: i.addressHead,
        isDefault: i.isDefault,
        name: i.name,
        tel: i.tel,
    };
};

const onSave = (item) => {
    if (isEdit.value) {//编辑更改数据
        proxy.$api.put("/address/user/updateMyAddress", proxy.$qs.stringify({
            addressId: item.addressId,
            consignee: item.name,
            tel: item.tel,
            address: item.province + item.city + item.county,
            detailedAddress: item.addressDetail,
            defaultContact: item.isDefault ? 1 : 0
        })).then(r => {
            for (const listItem of list.value) {
                if (listItem.id === item.addressId) {
                    listItem.name = item.name;
                    listItem.tel = item.tel;
                    listItem.address = item.province + item.city + item.county;
                    if (item.isDefault) {
                        //设置默认联系人
                        emptyDefault();
                        chosenAddressId.value = item.addressId;
                        listItem.isDefault = true;
                    }
                    show.value = false;
                    proxy.$showSuccessToast("保存成功");
                    return;
                }
            }
        })
        return;
    }
    //添加数据
    proxy.$api.put("/address/user/insertMyAddress", proxy.$qs.stringify({
        consignee: item.name,
        tel: item.tel,
        address: item.province + item.city + item.county,
        detailedAddress: item.addressDetail,
        defaultContact: item.isDefault ? 1 : 0
    })).then(r => {
        let i = r.data;
        list.value.push({
            id: i.addressId,
            name: i.consignee,
            tel: i.tel,
            address: i.address + i.detailedAddress,
            addressHead: i.address,
            detailedAddress: i.detailedAddress,
            isDefault: !!i.defaultContact,
        });
        if (i.defaultContact) {
            //设置默认联系人
            // onSelect(list.value[list.value.length - 1], list.value.length - 1);
            emptyDefault();
            list.value[list.value.length - 1].isDefault = true;
            chosenAddressId.value = i.addressId;
        }
        show.value = false;
        proxy.$showSuccessToast("保存成功");
    });
};
const onDelete = (item, index) => {
    proxy.$api.put("/address/user/deleteMyAddress", proxy.$qs.stringify({
        addressId: item.addressId,
    })).then(r => {
        // console.log(r.data)
        proxy.$showSuccessToast("删除成功");
        list.value = list.value.filter(listItem => listItem.id !== item.addressId);
        show.value = false;
    })
};


</script>

<style scoped src="@/assets/css/view/front/addressList.css"></style>
<style>
.addressPopup {
    height: fit-content;
    padding-top: 1rem;
}

.addressPopup .van-address-edit__buttons {
    padding-bottom: 0 !important;
}
</style>