<template>
    <nav>
        <div class="logo">
            <span>美瞳选购平台</span>
            <h3>movo</h3>
        </div>
        <div class="options" v-if="!isNotLogin">
            <van-icon name="cart-o" />
            <span>name</span>
            <van-icon name="upgrade" />
        </div>
    </nav>
</template>
<script setup>
const props = defineProps(['isNotLogin'])
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

.logo>h3 {
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
.logo>h3::first-letter {
    font-size: var(--text-6xl);
}

.logo>span {
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