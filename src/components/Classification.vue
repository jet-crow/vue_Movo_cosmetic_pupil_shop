<template>
    <div class="menu" @click="choseItem">
        <div class="menu_item" data-chose="0" :class="chose == 0 ? 'menu_item_selected' : ''">
            <img :src="$getImgUrl('menu/5.png')" />
            <p>全部</p>
        </div>
        <div class="menu_item" data-chose="1" :class="chose == 1 ? 'menu_item_selected' : ''">
            <img :src="$getImgUrl('menu/1.png')" />
            <p>日抛</p>
        </div>
        <div class="menu_item" data-chose="2" :class="chose == 2 ? 'menu_item_selected' : ''">
            <img :src="$getImgUrl('menu/2.png')" />
            <p>月抛</p>
        </div>
        <div class="menu_item" data-chose="3" :class="chose == 3 ? 'menu_item_selected' : ''">
            <img :src="$getImgUrl('menu/3.png')" />
            <p>季抛</p>
        </div>
        <div class="menu_item" data-chose="4" :class="chose == 4 ? 'menu_item_selected' : ''">
            <img :src="$getImgUrl('menu/4.png')" />
            <p>半年抛</p>
        </div>
    </div>
</template>
<script setup>
import router from '@/router';
import { defineEmits } from 'vue'

const props = defineProps(['chose']);
const emit = defineEmits(['updateChose'])//注册方法
function choseItem(event) {
    let menu_item = event.target.closest('.menu_item');
    if (menu_item == null) return;
    let chose = menu_item.dataset.chose
    //为空即跳转
    if (props.chose == undefined) {
        router.push({
            path: 'sectionGoods',
            query: { chose: chose }
        })
        return;
    };
    //否则就切换
    emit('updateChose', chose);
    router.replace({
        query: { chose: chose }
    })
}
</script>

<style scoped>
.menu {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
}

.menu_item {
    margin: 0 .3rem;
}

.menu_item img {
    width: 100%;
}

/* menu_item_selected 选中样式*/
.menu_item_selected img {
    filter: hue-rotate(320deg)
}

.menu_item_selected p {
    color: var(--color-orange-400);
}
</style>