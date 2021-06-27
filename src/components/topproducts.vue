<template>
   <div class="top-products">
      <h5 class="top-title">Top Products this week</h5>
   <div class="top-product-grid">
      
      <div class="product-card" v-for="(topProduct,i) in topProducts" :key="i">
      <div class="img-wrapper">
       <img  class="topProduct-img" :src="topProduct.img" alt="">
      </div>
       <div class="card-copy">
      <p>{{topProduct.productName}}</p>
      <span v-html="topProduct.review"></span>
      <p>{{topProduct.price}}</p>
      <hr>
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
.top-products{
   margin-top:2rem;
}
.top-product-grid{
   display:grid;
   grid-template-columns: 1fr ;
   margin:2rem 0;
   grid-row-gap:1rem;
  
}
.product-card{
  transition: 0.3s;
 
   display:flex;
   font-size:12px;
}
.topProduct-img{
   width:50px;
   height:100px;
}
.card-copy{
     padding: 8px 16px;
}
.top-title{
   font-size:20px;
}

</style>

