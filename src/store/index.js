import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        productTypes:[
            {  
              id:1,
              category:"cosemetics",
              productName:"Nail polish",
              price:400,
              grade:"top product"
            },
            {
                id:2,
                category:"cosemetics",
                productName:"eyeshadow",
                price:500,
                grade:"top product"
              },
              {  
                id:3,
                category:"electronics",
                productName:"Redmi note-8",
                price:400,
                grade:"top product"
              },
              {  
                id:4,
                category:"Music",
                productName:"locha-e-ulfat",
                price:500,
                grade:"top product"
              },
              {  
                id:5,
                category:"cosemetics",
                productName:"foundation",
                price:400,
                grade:"top product"
              },
              {  
                id:6,
                category:"Books",
                productName:"Steal like an artist",
                price:400,
                grade:"top product"
              },
              {  
                id:8,
                category:"cosemetics",
                productName:"Mascara",
                price:1500,
                grade:"top product"
              },
              {  
                id:9,
                category:"Music",
                productName:"ishq waala love",
                price:900,
                grade:"top product"
              },
              {  
                id:10,
                category:"cosemetics",
                productName:"eyelash",
                price:1200,
                grade:"top product"
              },
              {  
                id:11,
                category:"electronics",
                productName:"hair straightner",
                price:1500,
                grade:"top product"
              },
              {  
                id:12,
                category:"cosemetics",
                productName:"primer",
                price:400,
                grade:"top product"
              },
              {  
                id:13,
                category:"cosemetics",
                productName:"roller",
                price:2000,
                grade:"top product"
              },
              {  
                id:14,
                category:"Books",
                productName:"The subtle art of not giving a fuck",
                price:400,
                grade:"top product"
              },
              {  
                id:15,
                category:"cosemetics",
                productName:"lip gloss",
                price:400,
                grade:"top product"
              },
              {  
                id:16,
                category:"cosemetics",
                productName:"lip care",
                price:400,
                grade:"top product"
              },
              {  
                id:17,
                category:"Books",
                productName:"Rework",
                price:400,
                grade:"top product"
              },
              {  
                id:18,
                category:"electronics",
                productName:"hair curler",
                price:400,
                grade:"top product"
              },
              {  
                id:19,
                category:"Books",
                productName:"Evil by design",
                price:400,
                grade:"top product"
              },
              {  
                id:20,
                category:"electronics",
                productName:"air buds",
                price:400,
                grade:"top product"
              },
        ]
    },
    getters:{
        categorize:state=>{
            return state.productTypes.filter(product=>product.category==="books")
        }
    }
})
export default store