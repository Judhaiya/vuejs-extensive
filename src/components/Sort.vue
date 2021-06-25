<template>
    <div class="sort">
        <h3>SORT</h3>
        <div class="sort-items-wrapper">
        <div class="sort-items">
        <select  @change="sortItems"   v-model="sorted">
         <option>Vegan</option>
         <option>Oilfree</option>
         <option>Water Resistant</option>
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
            if(this.sorted==="Vegan"){
            return this.sortedThings=this.$store.state.sortedProducts.filter(item=>item.review==="vegan")
        }
        if(this.sorted==="Oilfree"){
       return this.sortedThings=this.$store.state.sortedProducts.filter(item=>item.review==="Oilfree" )
        }
        if(this.sorted==="Water Resistant"){
       return this.sortedThings=this.$store.state.sortedProducts.filter(item=>item.review==="WaterResistant" )
        }
        }
        },

    
 
}
</script>
<style>
.sort{
    margin-top:1rem;
}
.sort h3{
    font-size:24px;
}
.loop-sortItems{
    margin-top:1rem;
}
.sort-items-wrapper{
    display:flex;
    justify-content:flex-end ;
}
.sort-grid{
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
}
</style>