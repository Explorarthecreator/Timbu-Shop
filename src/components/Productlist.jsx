import { useDispatch, useSelector } from "react-redux"
import Productitem from "./Productitem"
// import { setProduct } from "../features/product/productSlice"
import { addToWishlist } from "../features/wishlist/wishList"
import { addToCart } from "../features/cart/cartSlice"


function Productlist({products}) {
    const {quantity} = useSelector((state)=>state.product)
    const dispatch = useDispatch()

    const updataWishList = (product)=>{
        // console.log(product);
        dispatch(addToWishlist(product))
    }

    // Function to add to cart
    const increaseCart = (product,number)=>{
        const cartData = {
            id:product.id,
            name: product.name,
            image:product.image,
            price:product.price,
            quantity:number
        }

        dispatch(addToCart(cartData))
    }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-x-2 gap-y-5">
        {
            products.map((product)=>(
                <Productitem key={product.id} product={product} quantity={quantity} setProduct={updataWishList} addtocart={increaseCart}/>
            ))
        }
    </div>
  )
}

export default Productlist