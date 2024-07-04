import Product from "./components/Product"

let products = [
  {
    title: "mobile",
    featured: true,
    price: 10000,
    discountedPrice: 9000,
    description: "fasdf lroeam .. asdfadsfasdf lroeam .. asdfadsfasdf lroeam .. asdfads",
  },
  {
    title: "watch",
    price: 10000,
    featured: false,
    discountedPrice: 9000,
    description: "fasdf lroeam .. asdfadsfasdf lroeam .. asdfadsfasdf lroeam .. asdfads",
  },
  {
    title: "keyboard",
    featured: false,
    price: 1000,
    discountedPrice: 900,
    description: "fasdf lroeam .. asdfadsfasdf lroeam .. asdfadsfasdf lroeam .. asdfads",
  },
  {
    title: "projector",
    price: 1000,
    featured: false,

    discountedPrice: 900,
    description: "fasdf lroeam .. asdfadsfasdf lroeam .. asdfadsfasdf lroeam .. asdfads",
  },
  {
    title: "watch - GM",
    price: 1000,
    featured: true,
    discountedPrice: 900,
    description: "fasdf lroeam .. asdfadsfasdf lroeam .. asdfadsfasdf lroeam .. asdfads",
  },
]

let heading = "Featured Products list"
let featuredProducts = products.filter((el)=>{
    if(el.featured){
        return true
    }
})
featuredProducts = products.filter((el)=>el.featured)

function App() {
  return (
    <div>
      <h1>{heading}</h1>
      {undefined}
      {null}
      {false}
      {true}

      {products.map((el, index) => {
        if (el.featured) {
          return <Product key={index} title={el.title} price={el.price} discountedPrice={el.discountedPrice} />
        }
      })}

      {products.filter(el =>el.featured).map((el, index) => {
          return <Product key={index} title={el.title} price={el.price} discountedPrice={el.discountedPrice} />
      })}
      
      {featuredProducts.map((el, index) => {
          return <Product key={index} title={el.title} price={el.price} discountedPrice={el.discountedPrice} />
      })}
      <hr />
      <h1> Normal Products</h1>
      {
        products.map((el,index) =>{
            if (!el.featured) {
                return <Product key={index} title={el.title} price={el.price} discountedPrice={el.discountedPrice} />
              }
        })
      }
      {
        products.filter(el => !el.featured).map((el,index) =>{
                return <Product key={index} title={el.title} price={el.price} discountedPrice={el.discountedPrice} />
        })
      }
    </div>
  )
}

export default App
