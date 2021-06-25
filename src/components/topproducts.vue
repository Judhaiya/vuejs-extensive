<template>
   <div class="top-products">
      <h3>Top Products this week</h3>
   <div class="top-product-grid">
      
      <div class="product-card" v-for="(topProduct,i) in topProducts" :key="i">
       <img  class="topProduct-img" :src="topProduct.img" alt="">
       <div class="card-copy">
      <p>{{topProduct.productName}}</p>
      <span v-html="topProduct.review"></span>
      <p>{{topProduct.price}}</p>
      <p>{{topProduct.discount}}</p>
       </div>
      <hr>
      
      </div>
  
   </div>
  
   </div> 
</template>
<script>


export default {

  computed:{
  topProducts(){
    return this.$store.state.BestSeller
  }

}
}
</script>
<style>
.top-product-grid{
   display:grid;
   grid-template-columns: 1fr ;
   margin:2rem 0;
   grid-row-gap:1rem;
  
}
.product-card{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 220px;
}
.topProduct-img{
   width:100%;
   height:200px;
}
.card-copy{
     padding: 2px 16px;
}
</style>

