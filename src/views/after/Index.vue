<template>
    <Nav />
    <aside>
        <div class="banner">
            <video webkit-playsinline="true" poster="../../assets/images/introduce.jpg"
                src="../../assets/video/introduce.mp4" autoplay muted></video>
        </div>
        <!-- 分类 -->
        <Classification/>
    </aside>
</template>

<script setup>
import Nav from '@/components/Nav.vue';
import Classification from '@/components/Classification.vue'
</script>
<!-- introduce -->
<style scoped>
.banner video {
    width: 100%;
    height: 100%;
    object-fit: fill;
    margin-top: .3rem;
    margin-bottom: .8rem;
    border-radius: .8rem;
}
</style>