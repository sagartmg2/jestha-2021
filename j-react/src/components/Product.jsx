/* Component */
// function Product(title, price, description) {

function Product(props) {

  return (
    <div className="product">
      <p className="product-title">{props.title}</p>
      <p className="product-price">
        <span className="old-price">Rs. {props.discountedPrice}</span> Rs:{props.price}
      </p>
      categories: one, two
      <p>{props.description}</p>
    </div>
     
  )
}
export default Product


export function FeaturedProduct(){
    return <div className="featured-product">featrued product</div>
}
