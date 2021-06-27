<template>
      <div class="Updateproduct">
   
   
   <div class="wrapper">
    <div class="product-grid">
    <div v-for="(category,i) in duplicate" :key="i" class="product-card">
     <div class="card-copy">
    <img class="product-img" :src="category.img" alt="">
    <p>{{category.productName}}</p>
     <p>{{category.price}}</p>    
     <p>{{category.grade}}</p>
    </div>
    </div>
    </div>
      </div>
        <div v-if="change" class="wrapper">
        <div class="product-grid">
      <div v-for="(category,i) in someArray" :key="i" class="product-card">
      <div class="card-copy">
     <img class="product-img" :src="category.img" alt="">
      <p>{{category.productName}}</p>
      <p>{{category.price}}</p>    
      <p>{{category.grade}}</p>
     </div>
     </div>
        </div>
     </div>
      </div>
  
</template>
<script>


export default{
  
  computed:{
   someArray(){
  return this.$store.state.someArray
   
  },

  },
  methods:{
    duplicate(){
  return  this.$store.state.duplicate
        
    }
  }
  
 
}
</script>
<style>
.product-grid{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.product-img{
  width:100%;
  height:200px;
  object-fit: cover;
}
</style>