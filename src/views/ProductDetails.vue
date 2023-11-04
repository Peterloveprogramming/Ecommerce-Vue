<template>
    <div class="product">
        <div class="product-image">
            <img :src= "selectedProduct.thumbnail" alt="">
            <div class="product-details">
                <p> Brand:{{selectedProduct.brand}}</p>
                <p> Description:{{selectedProduct.description}}</p>
                <h2> Price: ${{selectedProduct.price}}</h2>

            </div>
        </div>
    </div>
    <div class="button-container">
        <button @click="router.push({name: 'Catalog'})">Back to Catalog</button>
        <button @click="addToCart()"> Add to card</button>
    </div>
</template>


<script>

import { defineComponent } from "vue";

export default defineComponent ({
    name:"ProductDetails"
})

</script>

<script setup>
import {computed} from "vue";
import {useProductStore} from "../stores/products";
import {useRoute, useRouter} from "vue-router";

const store = useProductStore();
const route = useRoute();
const router = useRouter()


const selectedProduct = computed(()=>{
  return store.products.find((item)=>item.id === Number(route.params.id))
})

const addToCart = () => {
    store.addToCart(selectedProduct.value)
  router.push({name:'CartView'})
  
}

</script>


<style scoped>
.product{
display: flex;
margin-top: 50px;
}

.product-image{
    margin-right:24px;
}

.button-container{
    display:flex;
    gap: 10px;
}
</style>