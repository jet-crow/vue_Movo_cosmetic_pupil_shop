<template>
    <div class="contact_box" v-if="isDefault">
        <p class="contact_info">{{addressData.consignee}}：{{addressData.tel}}</p>
        <p class="address"> {{addressData.address}}{{addressData.detailedAddress}}</p>
        <van-icon name="edit" class="edit"/>
    </div>
    <div v-else class="not_contact_box" @click="$router.push('/addressList')">
        请选择收货地址
    </div>
</template>

<script setup>
defineProps(["isDefault", "addressData"]);
</script>


<style scoped>
/* 联系人 */
.contact_box {
    background-color: white;
    padding: .5rem;
    height: fit-content;
    position: relative;

}

.contact_box::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    background: repeating-linear-gradient(-45deg, var(--van-warning-color) 0, var(--van-warning-color) 20%, transparent 0, transparent 25%, var(--van-primary-color) 0, var(--van-primary-color) 45%, transparent 0, transparent 50%);
    background-size: 80px;
    content: "";
}

.address {
    font-size: var(--text-sm);
    margin-top: .5rem;
}

.edit {
    position: absolute;
    right: 1.5rem;
    top: calc(50% - 10px);
}

.not_contact_box {
    text-align: center;
    line-height: 3rem;
    background-color: white;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;

}
</style>