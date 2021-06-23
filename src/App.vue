<template>
  <div id="app">
  <h2>Products</h2>
 
  <div class="container">
  <Categories/>
  </div>

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
       <input type="text" placeholder="lipstick"><br>
       <label for="Price">Price</label>
       <input type="text" placeholder="$ 200"><br>
       <input value="Topcategory" type="checkbox" v-model="quality">
       <label for="Price">Top Products</label>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>

</div>
{{selected}}
{{quality}}

  </div>
</template>

<script>
import Categories from './components/categories.vue'

export default {
  name: 'App',
  components: {
   Categories
  },
  data(){
    return{
      selected:"",
    
      quality:[]

    }
  },
  methods:{
 }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
</style>
