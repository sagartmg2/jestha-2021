import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Product,{FeaturedProduct} from "./components/Product"

let title = "products list"
let products= [
  {
    title:'mobile',
    price:10000,
    discountedPrice:9000,
    description:"fasdf lroeam .. asdfadsfasdf lroeam .. asdfadsfasdf lroeam .. asdfads"
  },
  {
    title:'watch',
    price:10000,
    discountedPrice:9000,
    description:"fasdf lroeam .. asdfadsfasdf lroeam .. asdfadsfasdf lroeam .. asdfads"
  },
  {
    title:'keyboard',
    price:1000,
    discountedPrice:900,
    description:"fasdf lroeam .. asdfadsfasdf lroeam .. asdfadsfasdf lroeam .. asdfads"
  },
]


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>{title}</h1>
    <img src="" alt=""/>
    <hr />
    {/* Product(watch,1000,descrption) */}
    <Product title="watch" price="100"  description="afasdf lroeam .. asdfadsf .. " />
    <Product title="keyboard" price="100" description="afasdf lroeam .. asdfadsf .. " />
    <Product title="mouse" price="300" />
    <FeaturedProduct/>
  </React.StrictMode>
)

/* 
  reserach : Component in react : simply a function which return html code
    how to make a component
    how to use a component
    how to pass value in component

*/
