<template>
   <div class="top-products">
      <h5 class="top-title">Top Products this week</h5>
   <div class="top-product-grid">
      
      <div class="tproduct-card" v-for="(topProduct,i) in topProducts" :key="i">
      <div class="img-wrapper">
       <img  class="topProduct-img" :src="topProduct.img" alt="">
      </div>
       <div class="card-copy">
      <p>{{topProduct.Title}}</p>
      <span  class="review-stars" v-html="topProduct.Review"></span>
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
.tproduct-card{
  transition: 0.3s;
 
   display:flex;
   font-size:12px;
}
.topProduct-img{
   width:80px;
   height:80px;
   object-fit: cover;
}
.card-copy{
     padding:0 16px;
}
.card-copy p{
   margin-bottom: 0;
}
.top-title{
   font-size:20px;
}
.review-stars{
   color:gold;
}

</style>

