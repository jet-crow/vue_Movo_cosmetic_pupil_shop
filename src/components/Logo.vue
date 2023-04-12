<template>
    <nav>
        <div class="logo">
            <span>美瞳选购平台</span>
            <h3>movo</h3>
        </div>
    </nav>
</template>
<script setup></script>
<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    height: 3.8rem;
    /* border-radius: 0 0 .8rem .8rem; */
    z-index: 10;
    width: 200px;
    
}

/* logo strat */
.logo {
    width: 10rem;
    height: inherit;
}

.logo>h3 {
    bottom: 0;
    color: var(--color-orange-300);
    font-size: var(--text-2xl);
    position: absolute;
    top: 0;
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
    color: var(--color-orange-300);
    font-size: var(--text-xl);
}

/* logo end */

</style>