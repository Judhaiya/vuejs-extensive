<template>
    <div class="categories-wrapper">
      <h4>Categories</h4>
    <div class="categories-flex">
      <div class="cat-prod">
      <div class="categories">
         <button  class="cat-buttons" v-on:click="ShowAll">All</button>
         <hr>
        <button  class="cat-buttons" v-on:click="categorize('Books')">Books</button>
        <hr>
        <button class="cat-buttons" v-on:click="categorize('cosmetics')">Cosmetics</button>
        <hr>
        <button  class="cat-buttons" v-on:click="categorize('electronics')">electronics</button>
        <hr>
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
    mode:true
   
    }
},
  methods:{
         categorize(num){
    return  this.$store.state.someArray=this.$store.state.productTypes.filter(item => item.category===num)

  },
  ShowAll(){
    
     this.$store.state.someArray=this.$store.state.productTypes.map(item=>item)
  }
  }

  
   
  
 }

 



</script>





<style>
.categories-wrapper{
  position:relative;
}
.categories{
    width:200px;
    padding:20px;
    box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2);
   
}
.cat-buttons{
    display:block;
    margin-bottom:20px;
    border:none;
    outline:none;
    padding:10px 20px;
    color:#fc2779;
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