<template>
    <div class="categories-wrapper">
      <h4>Categories</h4>
      <div class="cat-prod">
      <div class="categories">
        <button v-on:click="categorize('Books')">Books</button>
      
        <button v-on:click="categorize('cosemetics')">Cosmetics</button>
        <button v-on:click="categorize('electronics')">electronics</button>
        <button v-on:click="categorize('Music')">Music</button>
     </div>
     <div class="product-grid">
    <div v-for="(category,i) in someArray " :key="i" class="loop">
     <p>{{category.productName}}</p>
     <p>{{category.price}}</p>    
     <p>{{category.grade}}</p>
     <img class="product-img" :src="category.img" alt="">
    </div>
     </div>
      </div>
   <div class="price-range">
<input type="range" @input="changePrice" id="vol" v-model="vol" name="vol" min="100" max="2000">
  </div>
   <div v-for="(category,i) in  priceRanges " :key="i" class="loop">
     <p>{{category.productName}}</p>
      <p>{{category.grade}}</p>
       {{priceRange}}
    </div>
  {{vol}}
    </div>
   
</template>


<script>

export default{
data(){
    return{
    someArray:[],
    vol:"",
    priceRanges:''
   
    }
},
 methods: {
  categorize(item){
    
    return this.someArray=[... this.$store.state.productTypes.filter(product=>product.category ===item)];
    
  
  },
   changePrice(){
     if(this.vol>200  ){
      this.priceRanges= this.$store.state.productTypes.filter(product=>product.price === 500)
     }
       if(this.vol>600 && this.vol<800 ){
      this.priceRanges= this.$store.state.productTypes.filter(product=>product.price>= 800 && product.price<1000)
     }
        if(this.vol>1500){
      this.priceRanges=this.$store.state.productTypes.filter(product=>product.price=== 1500)
     }
   }
 },

}

</script>





<style>
.categories-wrapper{
  position:relative;
}
.categories{
    width:200px;
    padding:20px;
    background-color:skyblue ;
    position:fixed;
    left:20px;
    top:50px;
}
button{
    display:block;
    margin-bottom:20px ;
}
.product-img{
  width:200px;
  height:200px;
  object-fit: cover;
}
.product-grid{
  display:grid;
  grid-template-columns: 1fr 1fr ;
  grid-column-gap:20px;
  margin-left:1rem;
}
.cat-prod{
   display:flex;
   
}
.price-range{
  position:absolute;

   left:40px;
}
</style>  