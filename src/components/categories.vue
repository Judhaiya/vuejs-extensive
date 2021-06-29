<template>
    <div class="categories-wrapper">
      <h5 class="cat-title">Categories</h5>
    <div class="categories-flex">
      <div class="cat-prod">
      <div class="categories">
         <button  class="cat-buttons" v-on:click="ShowAll">All Categories</button>
         <hr class="line">
        <button  class="cat-buttons" v-on:click="categorize('Books')">Books</button>
        <hr class="line">
        <button class="cat-buttons" v-on:click="categorize('cosmetics')">Cosmetics</button>
        <hr class="line">
        <button  class="cat-buttons" v-on:click="categorize('electronics')">electronics</button>
        <hr class="line">
        <button  class="cat-buttons" v-on:click="categorize('Music')">Music</button>
     </div>
     
     
   
  
      </div>
    </div>
    </div>
   
</template>


<script>

export default{
data(){
    return{
    something:"",
    mode:false
   
    }
},
  methods:{
         categorize(num){
           this.mode=true
     this.$store.state.someArray=this.$store.state.productTypes.filter(item => item.category===num)

  },
  ShowAll(){
    
     this.$store.state.someArray=this.$store.state.productTypes.map(item=>item)
  }
  }

  
   
  
 }

 



</script>





<style>
.cat-title{
  color:#808080;
   margin-bottom: 1rem;
    margin-top: -2rem;
}
.line{
  color:#808080
}
.categories-wrapper{
  position:relative;
}
.categories{
    width:300px;
    padding:20px;
    background-color:	#F8F8F8;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius:4px;
   
}
.cat-buttons{
    display:block;
    margin-bottom:20px;
    border:none;
    outline:none;
    padding:10px 20px;
    color:#202020;
    background:none;
    font-size:18px;
    font-weight:600;
}
.product-img{
  width:100%;
  height:200px;
  object-fit: cover;
}
.product-grid{
  display:grid;
  grid-template-columns: 1fr 1fr ;
  grid-gap:20px;
  margin-left:1rem;
}
.cat-prod{
   display:flex;
   justify-content: flex-start;
   
}
.categories-flex{
  display:flex;
  justify-content: flex-start;
}

</style>  