<template>
    <Nav style="margin-bottom: .8rem;" />
    <Classification :chose="chose" @updateChose="updateChose" />
    <Goods />
</template>
<script setup>
import Nav from '@/components/Nav.vue';
import Classification from '@/components/Classification.vue';
import Goods from '@/components/Goods.vue';
import { ref } from 'vue';

const chose = ref(0);
function updateChose(data) {
    chose.value = data
}
</script>
<style scoped src="@/assets/css/view/after/sectionGoods.css"></style>