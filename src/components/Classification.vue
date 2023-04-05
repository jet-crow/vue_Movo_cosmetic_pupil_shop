<template>
    <div class="menu">
        <div class="menu_item">
            <img src="../../public/images/menu/5.png" />
            <p>全部</p>
        </div>
        <div class="menu_item">
            <img src="../../public/images/menu/1.png" />
            <p>日抛</p>
        </div>
        <div class="menu_item">
            <img src="../../public/images/menu/2.png" />
            <p>月抛</p>
        </div>
        <div class="menu_item">
            <img src="../../public/images/menu/3.png" />
            <p>季抛</p>
        </div>
        <div class="menu_item">
            <img src="../../public/images/menu/4.png" />
            <p>半年抛</p>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
.menu {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
}
.menu_item{
    margin: 0 .3rem;
}
.menu_item img {
    width: 100%;
}
/* menu_item_selected 选中样式*/
.menu_item_selected img {
    filter: hue-rotate(320deg)
}
.menu_item_selected p{
    color: var(--color-orange-400);
}
</style>