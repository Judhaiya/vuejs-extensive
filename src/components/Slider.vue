<template>
    <div class="slider">
         <div class="price-range">
       <input type="range" @input="changePrice" id="vol" v-model="vol" name="vol" min="100" max="2000">
       </div>
          <div v-for="(category,i) in  priceRanges " :key="i" class="loop">
     <p>{{category.productName}}</p>
      <p>{{category.grade}}</p>
       {{priceRange}}
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
      this.priceRanges= this.$store.state.productTypes.filter(product=>product.price === 500)
     }
       if(this.vol>600 && this.vol<800 ){
      this.priceRanges= this.$store.state.productTypes.filter(product=>product.price>= 800 && product.price<1000)
     }
        if(this.vol>1500){
      this.priceRanges=this.$store.state.productTypes.filter(product=>product.price=== 1500)
     }
   }
 }
  
}
</script>

