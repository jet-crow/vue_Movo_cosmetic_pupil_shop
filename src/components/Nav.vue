<template>
    <nav>
        <span>美瞳选购平台</span>
        <h3>movo</h3>
    </nav>
</template>
<style scoped>
nav {
    background-color: var(--color-orange-300);
    position: relative;
    height: 3.8rem;
    border-radius: 0 0 .8rem .8rem;
}

/* logo */
nav>h3 {
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
nav>h3::first-letter {
    font-size: var(--text-6xl);
}

nav>span {
    position: absolute;
    left: 3.5rem;
    top: 0.5rem;
    color: var(--color-white);
    font-size: var(--text-xl);
}
</style>