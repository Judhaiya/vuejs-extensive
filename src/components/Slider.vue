<template>
    <div class="slider">
      
     <div class="price-range">
       <input type="range" @input="update" id="vol" v-model="vol" name="vol" min="100" max="2000"><br>
        
       
       </div>
      
      <p> <span class="max">{{vol}}</span></p>
        <button @click="changePrice" class="filter">Filter By price</button>
     
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
      if(this.$store.state.someArray.some(item=>item.category==='Books'||'electronics'||'cosmetics'||'Music')){
       return this.someArray=this.$store.state.someArray.filter(product=> product.price<500)
      }
     }
       if(this.vol<800 ){ 
      if(this.$store.state.someArray.some(item=>item.category==='Books'||'electronics'||'cosmetics'||'Music')){
       return this.someArray=this.$store.state.someArray.filter(product=> product.price<900)
      }
     }
        if(this.vol<1200){
         if(this.$store.state.someArray.some(item=>item.category==='Books'||'electronics'||'cosmetics'||'Music')){
       return this.someArray=this.$store.state.someArray.filter(product=> product.price<1500)
      }
     }
   },

 },
computed:{
  update(){
    return this.vol
  }
}
  
}
</script>

<style>
.slider{
  margin-top:1rem;
}
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