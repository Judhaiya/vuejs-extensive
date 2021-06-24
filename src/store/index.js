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
              category:"cosemetics",
              productName:"Nail polish",
              price:400,
              img:Lipstick,
              grade:"top product"
            },
            {
                id:2,
                category:"cosemetics",
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
                price:500,
                img:eyelash,
                grade:"top product"
              },
              {  
                id:5,
                category:"cosemetics",
                productName:"foundation",
                price:400,
                img:Lipshade,
                grade:"top product"
              },
              {  
                id:6,
                category:"Books",
                productName:"Steal like an artist",
                price:400,
                img:Lipstick,
                grade:"top product"
              },
              {  
                id:8,
                category:"cosemetics",
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
                category:"cosemetics",
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
                category:"cosemetics",
                productName:"primer",
                price:400,
                img:Lipstick,
                grade:"top product"
              },
              {  
                id:13,
                category:"cosemetics",
                productName:"roller",
                price:2000,
                img:eyelash,
                grade:"top product"
              },
              {  
                id:14,
                category:"Books",
                productName:"The subtle art of not giving a fuck",
                price:400,
                img:Lipstick,
                grade:"top product"
              },
              {  
                id:15,
                category:"cosemetics",
                productName:"lip gloss",
                price:400,
                img:Lipshade,
                grade:"top product"
              },
              {  
                id:16,
                category:"cosemetics",
                productName:"lip care",
                price:400,
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
                price:400,
                grade:"top product",
                img:Lipshade,
              },
              {  
                id:19,
                category:"Books",
                productName:"Evil by design",
                price:400,
                grade:"top product",
                img:eyelash,
              },
              {  
                id:20,
                category:"electronics",
                productName:"air buds",
                price:400,
                grade:"top product",
                img:Lipstick,
              },
        ],
        BestSeller:[
          {
               productName:"Lakme Lip Love Chapstick SPF 15 - Insta Pink",
                price:439,
                review:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>',
                discount:'30%-40%'
          },
          {
            productName:"Lakme Vitamin C+ Serum",
             price:600,
             review:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>',
             discount:'20%-30%'
       },
       {
        productName:"Lakme Absolute Argan Oil Radiance Oil-In Gel Cream",
         price:1200,
         review:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
         discount:'40%-50%'
       },
        ],
        sortedProducts:[
      {
        productName:"Kay Beauty Matte Blush - Mild Berry",
        price:2000,
        stars:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
        review: "Oilfree"
        },
        {
          productName:"Nykaa Matte Nail Enamel Polish - Pink Ruffle 152",
          price:1800,
          stars:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
          review:"WaterResistant"
          },
          {
            productName:"MAKE UP FOR EVER Mist & Fix Setting Spray",
            price:1200,
            stars:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
            review:"vegan",
            img:Lipstick,
            },
            {
              productName:"MAKE UP FOR EVER Mist & Fix Setting Spray",
              price:1200,
              stars:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
              review:"WaterResistant",
              img:Lipstick,
              },
              {
                productName:"MAKE UP FOR EVER Mist & Fix Setting Spray",
                price:1200,
                stars:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
                review:"vegan",
                img:Lipstick,
                },
                {
                  productName:"MAKE UP FOR EVER Mist & Fix Setting Spray",
                  price:1200,
                  stars:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
                  review:"WaterResistant",
                  img:Lipstick,
                  },
                  {
                    productName:"MAKE UP FOR EVER Mist & Fix Setting Spray",
                    price:1200,
                    stars:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
                    review:"WaterResistant",
                    img:Lipstick,
                    },
                    {
                      productName:"MAKE UP FOR EVER Mist & Fix Setting Spray",
                      price:1200,
                      stars:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
                      review:"Vegan",
                      img:Lipstick,
                      }
        ]

         },
  
})
export default store