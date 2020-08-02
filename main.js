Vue.component ("product", {
    template: `
    <div class="product">

    <div class="product-image">
      <img v-bind:src="image" alt="">
    </div>
    <div class="product-info">
        <h1>{{ title }}</h1>
        <h3>{{description}}</h3>
        <p v-if="goods > 50" >On Sales</p> 
        <p v-else-if="goods <= 30 && goods > 0">In Stock</p>
        <p :class="{strike: goods > 0}">Sold Out</p>
         <ul>
           <li v-for="detail in details">{{detail}}</li>
         </ul>
         <ul>
           <li v-for="size in sizes" >{{size}}</li>
         </ul>
         <p v-if="goods > 50">{{ title}}</p>
         <h3>Available Colors</h3>
         <div v-for="(variant, index) in variants"
           :key="variant.variantId"
           :style="{backgroundColor:variant.variantColor }" 
            @mouseover="updateProduct(index)"
            class="color-box"> 
         </div>
         <button v-on:click="addToCart"
         :class="{disabledButton: goods === 0}">Add to Cart</button>
         <button v-on:click="removeFromCart">Remove from Cart</button>
         <div class="cart">
            <p>Cart({{cart}})</p>
         </div>
    </div>
  </div> 
    `,
  
  data () {
      return{ 
        brand:"Vue Master",
        product:"Socks",
        description: "This Socks are therapeutic",
        selectedVariant: 0,
        details: ["80% Cotton", "20% Polyester", "Gender Neutral"],
        variants:[
            {
                vaiantId:2234,
                variantImage: "vmSocks-green-onWhite.jpg",
                variantColor:"green",
                variantQuantity:10
            },
            {
                vaiantId:2235,
                variantImage: "vmSocks-blue-onWhite.jpg",
                variantColor:"blue",
                variantQuantity:0
            }
        ],
        sizes: ["small", "medium", "large", "X-large"],
        cart: 0
    }
  } ,
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        removeFromCart: function(){
            this.cart -= 1
        },
        updateProduct: function(index){
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
       return this.brand + " " + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        goods(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})
var app = new Vue ({
    el:'#app',
   
}) 