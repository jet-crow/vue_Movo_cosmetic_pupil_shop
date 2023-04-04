<template>
    <Nav />
    <main style="width: 100vw;height: 100vh; background-color: var(--color-white);">
        <div class="login_box">
            <!-- <label>
                <input v-model="user" />
                <span>账号输入有误</span>
            </label>
            <label>
                <input v-model="password" />
                <span>密码输入有误</span>
            </label> -->
        </div>
    </main>
</template>
<script setup>
import Nav from '@/components/Nav.vue'
import { ref } from 'vue'

//账号和密码
const user = ref()
const password = ref()


</script>
<style scoped>
.login_box {
    width: 23rem;
    height: 35.8rem;
    display: flex;
    flex-direction: column;
    background-color: var(--color-orange-100-85);
    border-bottom-right-radius: 2rem;
    position: relative;
}

.login_box::before {
    content: "";
    z-index: 10;
    position: absolute;
    width: .7rem;
    height: 1rem;
    left: 0;
    top: -1rem;
    background-color: var(--color-orange-300);
}
</style>