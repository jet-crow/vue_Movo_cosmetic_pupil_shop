<template>
    <div class="contact_box">
        <p class="contact_info">张三：12345678910</p>
        <p class="address">浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室</p>
        <van-icon name="edit" class="edit" />
    </div>
</template>
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
</style>