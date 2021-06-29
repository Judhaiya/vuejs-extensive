<template>
    <div class="sort">
        <div class="sort-heading">
        <h5>SORT</h5>
       </div>
        <div class="sort-items-wrapper">
        <div class="sort-items">
        <select  @change="sortItems"   v-model="sorted">
         <option>High to Low</option>
         <option>Low to High</option>
        
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
            if(this.sorted==="High to Low"){
              if(this.$store.state.someArray.some(item=>item.category==='Books'||'Music'||'cosmetics'||'electronics')){
                  this.$store.state.someArray.sort((a,b)=>{return b.price-a.price})
              }
            
            }  if(this.sorted==="Low to High"){
              if(this.$store.state.someArray.some(item=>item.category==='Books'||'Music'||'cosmetics'||'electronics')){
                  this.$store.state.someArray.sort((a,b)=>{return a.price-b.price})
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
    color:#808080;
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