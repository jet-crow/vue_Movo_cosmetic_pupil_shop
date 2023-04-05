<template>
    <Nav />
    <aside>
        <div class="banner">
            <img src="../../../public/images/loginBg.jpg" alt="" srcset="">
        </div>
    </aside>
</template>

<script setup>
import Nav from '@/components/Nav.vue';
</script>

<style scoped>
.banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: .3rem;
    border-radius: .8rem .8rem 0 0;
}
</style>