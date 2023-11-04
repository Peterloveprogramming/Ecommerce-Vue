<template>
  <div class="products-list">
    <div 
        class="product"
        v-for="product in productStore.products"
        :key = "product.id"
        @click="goToPorudctPage(product.id)"
    > 
        <img :src="product.thumbnail" alt="">
        <h2> Brand:{{product.brand}}</h2>
        <p>Description: {{product.description}}</p>
        <p>Price: ${{product.price}}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent ({
  name:"CatalogView"
})
</script>

<script setup>
import {onMounted, computed} from 'vue';
import {useProductStore} from "../stores/products";
import {useRouter } from "vue-router";

const productStore = useProductStore()
const router = useRouter()

const goToPorudctPage = (id)=>{
  router.push({name:"ProductView", params:{id}})
}




onMounted(()=>{
  console.log("Mounted")

  productStore.fetchProductsFromDB()
})
</script>




<style scoped>
.products-list{
  display:flex;
  justify-content: space-between;
  flex-wrap:wrap;
}

.product{
  flex-basis: 28%;
  margin: 8px;
  padding:16px;
  box-shadow:0px 0px 14px 1px #e6e6e6;
  cursor: pointer;
}

.product img{
  width:70%
}

</style>