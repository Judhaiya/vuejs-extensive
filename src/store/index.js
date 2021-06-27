import Vue from 'vue'
import Vuex from 'vuex'
import Lipstick from '../assets/Lipstick.jpg'
import Lipshade from '../assets/Lipstick-2.jpg' 
import eyelash from '../assets/eyelash.jpg'

Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        productTypes:[
            {  
              id:1,
              category:"cosmetics",
              productName:"Nail polish",
              price:400,
              img:Lipstick,
              grade:"top product"
            },
            {
                id:2,
                category:"cosmetics",
                productName:"eyeshadow",
                img:Lipshade,
                price:500,
                grade:"top product"
              },
              {  
                id:3,
                category:"electronics",
                productName:"Redmi note-8",
                img:Lipstick,
                price:400,
                grade:"top product"
              },
              {  
                id:4,
                category:"Music",
                productName:"locha-e-ulfat",
                price:1000,
                img:eyelash,
                grade:"top product"
              },
              {  
                id:5,
                category:"cosmetics",
                productName:"foundation",
                price:800,
                img:Lipshade,
                grade:"top product"
              },
              {  
                id:6,
                category:"Books",
                productName:"Steal like an artist",
                price:900,
                img:Lipstick,
                grade:"top product"
              },
              {  
                id:8,
                category:"cosmetics",
                productName:"Mascara",
                img:eyelash,
                price:1500,
                grade:"top product"
              },
              {  
                id:9,
                category:"Music",
                productName:"ishq waala love",
                price:900,
                img:Lipshade,
                grade:"top product"
              },
              {  
                id:10,
                category:"cosmetics",
                productName:"eyelash",
                price:1200,
                img:eyelash,
                grade:"top product"
              },
              {  
                id:11,
                category:"electronics",
                productName:"hair straightner",
                price:1500,
                img:Lipshade,
                grade:"top product"
              },
              {  
                id:12,
                category:"cosmetics",
                productName:"primer",
                price:800,
                img:Lipstick,
                grade:"top product"
              },
              {  
                id:13,
                category:"Music",
                productName:"Nazar na lag jaaye jaanu",
                price:800,
                img:eyelash,
                grade:"top product"
              },
              {  
                id:14,
                category:"Books",
                productName:"The subtle art of not giving a fuck",
                price:1000,
                img:Lipstick,
                grade:"top product"
              },
              {  
                id:15,
                category:"Music",
                productName:"Ik Vaariya",
                price:400,
                img:Lipshade,
                grade:"top product"
              },
              {  
                id:16,
                category:"cosmetics",
                productName:"lip care",
                price:900,
                grade:"top product",
                img:Lipstick,
              },
              {  
                id:17,
                category:"Books",
                productName:"Rework",
                price:400,
                grade:"top product",
                img:eyelash,
              },
              {  
                id:18,
                category:"electronics",
                productName:"hair curler",
                price:800,
                grade:"top product",
                img:Lipshade,
              },
              {  
                id:19,
                category:"Books",
                productName:"Evil by design",
                price:500,
                grade:"top product",
                img:eyelash,
              },
              {  
                id:20,
                category:"electronics",
                productName:"air buds",
                price:1400,
                grade:"top product",
                img:Lipstick,
              },
        ],
        
       
         someArray:"",
         duplicate:""
         }
        
  
})
export default store