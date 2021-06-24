<template>
  <div id="app">
  <h2>Products</h2>
 
  <div class="container">
   

  <!-- Button trigger modal -->
<button type="button" class=" add-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Details
</button>

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
 <div class="sort-flex">
    <Sort/>
    </div>
    <div class="grid">
  <div class="for-categories">
 <Categories/>
 <Slider/>
  </div>
<div class="top-product">
  
 <Topproduct/>
</div>
    </div>
  </div>

  </div>
</template>

<script>
import Categories from './components/categories.vue'
import Topproduct from './components/topproducts.vue'
import Sort from './components/Sort.vue'
import Slider from "./components/Slider.vue"

export default {
  name: 'App',
  components: {
   Categories,
   Topproduct,
   Sort,
   Slider
  },
  data(){
    return{
      selected:"",
    
      quality:[],
      title:"",
      price:""

    }
  },
  methods:{
    add(){
      if(this.quality.includes("Topcategory")){
      this.$store.state.BestSeller.push({productName:this.title,price:this.price})
    }
    this.price="",
    this.title=""
    }
 }
  
}
</script>

<style>
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}
.container{
  width:100%;
  max-width:1024px;
  margin:0 auto;
  padding:0 15px;
 
}
.add-button{
  position:absolute;
  right:20px;
}
.sort-flex{
  display:flex;
  justify-content: flex-end;
}
.grid{
  display:flex;
  justify-content: space-around;
}
</style>
