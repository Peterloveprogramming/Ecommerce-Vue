<template>
<header>
    <div class="cart-items" @click="router.push({name:'CartView'})">
        <p>Items in Cards :{{store.cart.length}}</p>
    </div>
</header>
<main>
    <RouterView />
</main>
</template>

<script setup>

import {useRouter} from "vue-router";
import {useProductStore} from './stores/products' 

const router = useRouter();
const store = useProductStore()


</script>





<style scoped>
.cart-items{
    text-align: end;
    padding: 16px;
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
}
</style>
