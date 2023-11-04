import { defineStore } from 'pinia'


export const useProductStore = defineStore('products',{
  state:()=>({
    products:[],
    cart:[]
  }),

  actions:{
    fetchProductsFromDB(){
      fetch("https://dummyjson.com/products")
      .then(res=>res.json())
      .then(json=>{
        this.products = json.products;
      })
    },
      
    addToCart(product){
      this.cart.push(product)
    },

    removeFromCard(id){
     this.cart =  this.cart.filter((item)=>item.id!==id)
    }

  }
})

