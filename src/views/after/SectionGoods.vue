<template>
    <Nav style="margin-bottom: .8rem;" />
    <Classification :chose="chose" @updateChose="updateChose" />
    <Goods />
</template>
<script setup>
import Nav from '@/components/Nav.vue';
import Classification from '@/components/Classification.vue';
import Goods from '@/components/Goods.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const route = useRouter();
const chose = ref(0);

onMounted(() => {
    let queryChose = route.currentRoute.value.query.chose
    if (queryChose == undefined) return;
    chose.value = queryChose;
})
function updateChose(data) {
    console.log("来自父组件的事件"+data);
    chose.value = data
}
</script>
<style scoped src="@/assets/css/view/after/sectionGoods.css"></style>