<template>
    <div class="categories-wrapper">
      <h4>Categories</h4>
      <div class="categories">
        <button v-on:click="categorize('Books')">Books</button>
      
        <button v-on:click="categorize('cosemetics')">Cosmetics</button>
        <button v-on:click="categorize('electronics')">electronics</button>
        <button v-on:click="categorize('Music')">Music</button>
      </div>
     
    <div v-for="(category,i) in someArray " :key="i" class="loop">
     <p>{{category.productName}}</p>
     <p>{{category.price}}</p>    
     <p>{{category.grade}}</p>
    </div>
   <div class="pagination">
 {{priceRange}}
   <div v-for="(category,i) in  priceRanges " :key="i" class="loop">
     <p>{{category.productName}}</p>
      <p>{{category.grade}}</p>
    </div>
   </div>
    
  <input type="range" @input="changePrice" id="vol" v-model="vol" name="vol" min="100" max="2000">
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
    position:absolute;
    left:20px;

}
.categories{
    padding:20px;
    background-color:skyblue 
}
button{
    display:block;
    margin-bottom:20px ;
}
</style>