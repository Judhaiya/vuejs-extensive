<template>
      <div class="Updateproduct">
   
   
   
     
        <div class="product-grid">
      <div v-for="(category,i) in someArray" :key="i" class="product-card">
      <img class="product-img" :src="category.img" alt="">
      <p class="sale">sale!</p>
      <div class="card-copy">
      <p>{{category.productName}}</p>
      <p>$ {{category.price}}</p>   
         <p>{{category.discount}}</p> 
      
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
  mounted(){
     return this.$store.state.someArray=this.$store.state.productTypes.map(item=>item)
  }
  
  
  
 
}
</script>
<style>
.product-grid{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin:2rem  2rem;
}
.product-img{
  width:100%;
  height:200px;
  object-fit: cover;
}
.product-card{
  color: #EF629F ;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position:relative;
}
.card-copy{
  margin-top:1rem;
}
.sale{
 position:absolute;
 top:10px;
 left:10px;
 background-color:#EF629F;
 padding:5px;
 color:#fff;
 border-radius:4px;
}
</style>