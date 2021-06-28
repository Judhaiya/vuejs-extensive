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
              discount:"5%-10%",
            },
            {
                id:2,
                category:"cosmetics",
                productName:"eyeshadow",
                img:Lipshade,
                price:300,
                discount:"20%-30%",
              },
              {  
                id:3,
                category:"electronics",
                productName:"Redmi note-8",
                img:Lipstick,
                price:600,
                discount:"15%-30%",
              },
              {  
                id:4,
                category:"Music",
                productName:"locha-e-ulfat",
                price:700,
                img:eyelash,
                discount:"40%-50%",
              },
              {  
                id:5,
                category:"cosmetics",
                productName:"foundation",
                price:600,
                img:Lipshade,
                discount:"2%-3%",
              },
              {  
                id:6,
                category:"Books",
                productName:"Steal like an artist",
                price:500,
                img:Lipstick,
                discount:"9%-19%",
              },
              {  
                id:8,
                category:"cosmetics",
                productName:"Mascara",
                img:eyelash,
                price:600,
                discount:"20%-30%",
              },
              {  
                id:9,
                category:"Music",
                productName:"ishq waala love",
                price:1000,
                img:Lipshade,
                discount:"15%-25%",
              },
              {  
                id:10,
                category:"cosmetics",
                productName:"eyelash",
                price:1100,
                img:eyelash,
                discount:"10%-20%",
              },
              {  
                id:11,
                category:"electronics",
                productName:"hair straightner",
                price:1400,
                img:Lipshade,
                discount:"22%-33%",
              },
              {  
                id:12,
                category:"cosmetics",
                productName:"primer",
                price:800,
                img:Lipstick,
                discount:"18%-19%",
              },
              {  
                id:13,
                category:"Music",
                productName:"Nazar na lag jaaye jaanu",
                price:900,
                img:eyelash,
                discount:"50%-60%",
              },
              {  
                id:14,
                category:"Books",
                productName:"The subtle art of not giving a fuck",
                price:1300,
                img:Lipstick,
                discount:"15%-25%",
              },
              {  
                id:15,
                category:"Music",
                productName:"Ik Vaariya",
                price:500,
                img:Lipshade,
                discount:"22%-33%",
               
              },
              {  
                id:16,
                category:"cosmetics",
                productName:"lip care",
                price:1000,
                discount:"2%-6%",
                img:Lipstick,
              },
              {  
                id:17,
                category:"Books",
                productName:"Rework",
                price:600,
                discount:"24%-34%",
                img:eyelash,
              },
              {  
                id:18,
                category:"electronics",
                productName:"hair curler",
                price:700,
                discount:"16%-18%",
                img:Lipshade,
              },
              {  
                id:19,
                category:"Books",
                productName:"Evil by design",
                price:900,
                discount:"21%-27%",
                img:eyelash,
              },
              {  
                id:20,
                category:"electronics",
                productName:"air buds",
                price:1600,
                discount:"80%-90%",
                img:Lipstick,
              },
        ],
        BestSeller:[
          {
            id:1,
            Title:"funky watch",
            Review:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>',
            price:600,
            img:Lipstick
          },
          {
            id:2,
            Title:"funky watch",
            Review:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>',
            price:700,
            img:eyelash
          },
          {
            id:3,
            Title:"Quilling sheet",
            Review:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
            price:800,
            img:Lipshade
          },
          {
            id:4,
            Title:"liquid turquise eyeliner",
            Review:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
            price:900,
            img:Lipstick
          }
        ],
       
         someArray:"",
       
         }
        
  
})
export default store