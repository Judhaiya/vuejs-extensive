<template>
    <div class="sort">
        <div class="sort-heading">
        <h5>SORT</h5>
       </div>
        <div class="sort-items-wrapper">
        <div class="sort-items">
        <select  @change="sortItems"   v-model="sorted">
         <option>High to Extra high</option>
         <option>medium to High</option>
         <option>Low to Medium</option>
      </select>
      </div>
    </div>
    <div class="sort-grid">
      <div v-for="(sortedThing,i) in sortedThings" :key="i" class="loop-sortItems">
        <img class="product-img" :src="sortedThing.img" alt="">
       <p>{{sortedThing.productName}}</p>
       <p>{{sortedThing.review}}</p>
      </div>
    </div>

    </div>
</template>
<script>


export default {
    data(){
        return{
            sorted:"",
            sortedThings:""
        }
    },
    methods:{
        sortItems(){
            if(this.sorted==="High to Extra high"){
             if(this.$store.state.someArray.some(item=>item.category ==='Books')){
                return this.$store.state.duplicate= this.$store.state.someArray.filter(item=>item.price>=1000)
               
             }
              if(this.$store.state.someArray.some(item=>item.category ==='cosmetics')){
              return  this.$store.state.duplicate= this.$store.state.someArray.filter(item=>item.price>=1000)
               
             }
             if(this.$store.state.someArray.some(item=>item.category ==='electronics')){
              return  this.$store.state.duplicate= this.$store.state.someArray.filter(item=>item.price>=1000)
               
             }
             
        }
            else if(this.sorted==="medium to High"){
             if(this.$store.state.someArray.some(item=>item.category ==='Books')){
                return  this.$store.state.duplicate=this.$store.state.someArray.filter(item=>item.price<=900)
               
             }
                if(this.$store.state.someArray.some(item=>item.category ==='cosmetics')){
                return this.$store.state.duplicate= this.$store.state.someArray.filter(item=>item.price<=900)

            }
               if(this.$store.state.someArray.some(item=>item.category ==='electronics')){
                return this.$store.state.duplicate= this.$store.state.someArray.filter(item=>item.price<=900)

            }
               if(this.$store.state.someArray.some(item=>item.category ==='Music')){
                return this.$store.state.duplicate= this.$store.state.someArray.filter(item=>item.price<=900)

            }
             
        }
       
  
        }
        },

    
 
}
</script>
<style>
.sort{
    margin-top:4rem;
}
.sort h5{
    font-size:20px;
}
.loop-sortItems{
    margin-top:1rem;
}

.sort-grid{
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
}
.sort-items-wrapper,.sort-heading{
    display:flex;
    justify-content: flex-end;
}
</style>