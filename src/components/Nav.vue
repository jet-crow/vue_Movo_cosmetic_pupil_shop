<template>
    <nav>
        <div class="logo" @click="$router.push('/index')">
            <span>美瞳选购平台</span>
            <h3>movo</h3>
        </div>
        <div class="options" v-if="!isNotLogin">
            <van-icon name="cart-o" @click="$router.push('/shoppingCart')"/>
            <span @click="$router.push('/home')">{{ name }}</span>
            <van-icon name="upgrade" @click="quit"/>
        </div>
    </nav>
</template>
<script setup>
import {ref} from 'vue';

const props = defineProps(['isNotLogin']);
const sName = localStorage.getItem("name");
const name = ref(sName == null ? "name" : sName);
import {showSuccessToast} from 'vant';

const quit = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    name.value = "name";
    showSuccessToast("退出成功");
}
</script>
<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-orange-300);
    position: relative;
    height: 3.8rem;
    border-radius: 0 0 .8rem .8rem;
    z-index: 10;
}

/* logo strat */
.logo {
    width: 10rem;
    height: inherit;
}

.logo > h3 {
    bottom: 0;
    color: var(--color-white);
    font-size: var(--text-2xl);
    position: absolute;
    vertical-align: bottom;
    font-weight: 400;
    line-height: 2.8rem;
    padding-left: .8rem;
}

/* 首字母放大 */
.logo > h3::first-letter {
    font-size: var(--text-6xl);
}

.logo > span {
    position: absolute;
    left: 3.5rem;
    top: 0.5rem;
    color: var(--color-white);
    font-size: var(--text-xl);
}

/* logo end */

/* options start */
.options {
    width: 8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: var(--text-2xl);
    color: var(--color-white);
}

.options span {
    padding-bottom: .1rem;
}

.options .van-icon-upgrade {
    transform: rotateZ(90deg)
}
</style>