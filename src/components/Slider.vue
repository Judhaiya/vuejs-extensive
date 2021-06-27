<template>
    <div class="slider">
     <div class="price-range">
       <input type="range" @input="changePrice" id="vol" v-model="vol" name="vol" min="100" max="2000"><br>
        
       
       </div>
      
      <p> <span class="max">{{vol}}</span></p>
        <button class="filter">Filter By price</button>
          <div v-for="(category,i) in  priceRanges " :key="i" class="loop">
     <p>{{category.productName}}</p>
      <p>{{category.grade}}</p>
     
    </div>
    </div>
</template>
<script>

export default {
  data(){
      return{
          vol:"",
          priceRanges:''
      }
  },
  methods:{
     changePrice(){
     if(this.vol>200  ){
      this.priceRanges= this.$store.state.someArray.filter(product=>product.price === 500)
     }
       if(this.vol>600 && this.vol<800 ){ 
      this.priceRanges= this.$store.state.productTypes.filter(product=>product.price>= 800 && product.price<1000)
     }
        if(this.vol>1500){
      this.priceRanges=this.$store.state.productTypes.filter(product=>product.price=== 1500)
     }
   },

 },

  
}
</script>

<style>
.price-range{
    display:flex;
    justify-content:flex-start ;
}
.filter{
  background: #EECDA3;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #EF629F, #EECDA3);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #EF629F, #EECDA3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
border:none;
outline:none;
padding:5px;
color:#fff;

}
.max{
  background: #EF629F;
  padding:4px;
  color:#fff;
}
</style>