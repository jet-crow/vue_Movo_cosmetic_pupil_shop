<template>
    <nav>
        <span>美瞳选购平台</span>
        <h3>Movo</h3>
    </nav>
</template>
<style scoped>
nav {
    background-color: var(--color-orange-300);
    position: relative;
    height: 3.8rem;
}

/* logo */
nav>h3 {
    bottom: 0;
    color: var(--color-white);
    font-size: var(--text-3xl);
    position: absolute;
    vertical-align: bottom;
    height: 4.5rem;
    font-weight: 400;
}

/* 首字母放大 */
nav>h3::first-letter {
    font-size: var(--text-6xl);
}

nav>span {
    position: absolute;
    left: 4.2rem;
    top: 0.5rem;
    color: var(--color-white);
    font-size: var(--text-xl);
}
</style>