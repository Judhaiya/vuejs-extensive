<template>
   <div class="top-products">
      <h3>Top Products this week</h3>
   <div class="top-product-grid">
      
      <div class="product-card" v-for="(topProduct,i) in topProducts" :key="i">
      <p>{{topProduct.productName}}</p>
      <span v-html="topProduct.review"></span>
      <p>{{topProduct.price}}</p>
      <p>{{topProduct.discount}}</p>
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
   margin-left:0 2rem;
}
.product-card{
   width:300px;
}

</style>

