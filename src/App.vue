<template>
  <div id="app">
  <div class="heading container">
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">NYKAA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Beauty Advice</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Categories</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" >Nykaa Fashion</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-search me-2" type="search" placeholder="Search for products,brands" aria-label="Search">
        <button class="search-button"><i class="fas fa-search"></i></button>
      </form>
    </div>
  </div>
</nav>
  </div>
  <div class="container">
   

  <!-- Button trigger modal -->
  <div class="add-button-wrapper">
<button type="button" class= "add-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Details
</button>
  </div>
 <Sort/>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <label for="Product Category">Category</label>
       <select v-model="selected" >
         <option>Cosmetics</option>
         <option>Electronics</option>
         <option>Music</option>
         <option>Books</option>
        </select>
        <label for="Product title"> Title</label>
       <input type="text" v-model="title" placeholder="lipstick"><br>
       <label for="Price" >Price</label>
       <input type="number" v-model="price" placeholder="$ 200"><br>
       <input type="file"  v-on:change="onFileChanged" accept=".jpg,.png,gif">
       <input value="Topcategory" type="checkbox" v-model="quality">
       <label for="Price">Top Products</label>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary"  data-bs-dismiss="modal">Edit</button>
        <button type="button" class="btn btn-primary" v-on:click="add" data-bs-dismiss="modal">submit</button>
      </div>
    </div>
  </div>

</div>

   
    

  <div class="for-categories">
 <Categories/>
  <UpdateProduct/>
  </div>

     <Slider/>
     <Topproduct/>
  </div>
   
  </div>

</template>

<script>
import Categories from './components/categories.vue'
import Topproduct from './components/topproducts.vue'
import Sort from './components/Sort.vue'
import Slider from "./components/Slider.vue"
import UpdateProduct from "./components/UpdateProduct.vue"
export default {
  name: 'App',
  components: {
   Categories,
   Topproduct,
   Sort,
   Slider,
   UpdateProduct
  },
  data(){
    return{
      selected:"",
    
      quality:[],
      title:"",
      price:"",
      Images:null

    }
  },
  methods:{
    add(){
      if(this.quality.includes("Topcategory")){
      this.$store.state.BestSeller.push({productName:this.title,price:this.price,img:this.Images})
    }
    this.price="",
    this.title=""
    },
    onFileChanged(event){this.Images = event.target.files[0];
    }
 }
  
}
</script>

<style>
:root{
  --primaryColor:#fc2779;
  --secondaryColor:navy;
}
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
  font-family: 'Montserrat', sans-serif;
}
.heading{
  text-align: center;
}
.container{
  width:100%;
  max-width:1024px;
  margin:0 auto;
  padding:0 15px;
 
}
.add-button-wrapper{
   display:flex;
  justify-content: flex-end;
   margin-top:1rem;
}
.for-containers{
  display:flex;
 
}
.grid{
  display:flex;
  justify-content:flex-start;
}
.search-button{
  padding:5px 12px;
  border-radius:8px;
  background-color:var(--primaryColor);
  color:#efefef;
  border:none;
  outline:none;
}
.nav-item{
  margin:0 1rem !important;
 
}
.form-search {
  margin-right:1rem !important;
}
.nav-link{
  color:var(--secondaryColor) !important;
}
.navbar-brand{
  font-family: 'Caveat', cursive;
  color:var(--primaryColor) !important;
  font-size:24px;
}
.add-button{
  padding:5px;
  color:#fff;
  background-color:var(--primaryColor) ;
  border:none;
  outline:none;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)
}
.for-categories{
  display:flex;
}
</style>
