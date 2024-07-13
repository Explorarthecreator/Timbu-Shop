import { useDispatch, useSelector } from "react-redux"
import Productitem from "./Productitem"

// // import { setProduct } from "../features/product/productSlice"
// import { addToWishlist } from "../features/wishlist/wishList"
import { addToCart } from "../features/cart/cartSlice"
import { getProduct } from "../features/product/productSlice"
import { useState } from "react"
import { toast } from "react-toastify"
import Loading from "./Loading"
import Error from "./Error"




function Productlist({products}) {
    const {quantity, productLoading, productSuccess, productError,product} = useSelector((state)=>state.product)
    const dispatch = useDispatch()

    const [number, setNumber] = useState(1)
    const [pictureIndex,setPictureIndex] = useState(0)
    const reduceQuantity = ()=>{
      if(number ===1){
        toast.warning('Number can not be less than zero')
      }else{
        setNumber(number-1)
      }
    }
    // const updataWishList = (product)=>{
    //     // console.log(product);
    //     dispatch(addToWishlist(product))
    // }



    // Function to add to cart
    const increaseCart = (product,number)=>{
        const cartData = {
            id:product.id,
            name: product.name,
            image:product.photos[0].url,
            price:product.current_price[0].NGN[0],
            quantity:number
        }

        dispatch(addToCart(cartData))
        // console.log(product);
        // console.log(cartData);
    }
    const addToCartModal =()=>{
        const cartData = {
            id:product.id,
            name: product.name,
            image:product.photos[0].url,
            price:product.current_price,
            quantity:number
        }

        dispatch(addToCart(cartData))
        // console.log(cartData);
        document.getElementById('productDescriptionModal').close()

    }

    // Funtion to open modal
    const openModal = (id)=>{
        document.getElementById('productDescriptionModal').showModal()
        dispatch(getProduct(id))
    }

 
  return (
    <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-x-2 gap-y-5">
            {
                products.map((product)=>(
                    <Productitem key={product.id} product={product} quantity={quantity} addToCart={increaseCart} open_modal={openModal}/>
                ))
            }
        </div>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
        <dialog id="productDescriptionModal" className="modal">
            {
                productLoading && <Loading/>
            }
            {
                productError && <Error/>
            }
            {
                productSuccess && 
                <div className="modal-box lg:w-[940px] lg:max-w-5xl ">
                    <h3 className="font-bold text-lg">
                        Product Description
                    </h3>
                    {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}

                    <div className="p-3 flex flex-col lg:flex-row lg:gap-8 lg:items-center  ">
                        <div className=" shrink-0">
                            <img src={`https://api.timbu.cloud/images/${product.photos[pictureIndex].url}`} alt="" className="rounded-xl m-auto w-[202px] h-[202px]" />
                        </div>

                        <div className=" my-2">
                            <div className="">
                                <h1 className=" text-base lg:text-2xl font-semibold">
                                    {
                                        product.name
                                    }
                                </h1>

                                <h3 className=" text-base lg:text-2xl font-semibold py-1">
                                    ₦{
                                        (product.current_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
                                    }
                                </h3>

                                <p className="text-xs lg:text-base leading-5 lg:leading-6">
                                    {
                                        product.description
                                    }
                                </p>
                            </div>
                            

                            <div className='flex justify-between items-center mt-2 lg:w-2/5'>
                                <div className=' border-b-2 border-[#121212] w-1/3 md:w-2/5 text-lg md:text-xl xl:text-2xl flex justify-center'>
                                <span className='p-1 cursor-pointer lg:hover:scale-110' onClick={()=>reduceQuantity(number)}>-</span>
                                <span className='p-1'>
                                    {
                                        number
                                    }
                                </span>
                                <span className='p-1 cursor-pointer lg:hover:scale-110' onClick={()=>setNumber(number+1)}>+</span>
                                </div>
                                <div className='w-3/5 md:w-1/2 text-right'>
                                <button className=' btn btn-md xl:btn-md p-2 rounded-xl bg-[#190D40] text-white text-xs lg:hover:border-[#190D40] lg:hover:bg-transparent lg:hover:text-[#190D40] lg:hover:scale-105'  onClick={()=>addToCartModal(product,number)}>
                                    Add to cart
                                </button>
                                </div>
                            </div>
                        </div>  
                    </div>

                    
                    <div className="flex mt-5 lg:mt-10 gap-4">
                        {
                            product.photos.map((photo,index)=>(
                                <div key={index}>
                                    <img src={`https://api.timbu.cloud/images/${photo.url}`} alt="" className={`w-[88px] h-[88px]  ${index === pictureIndex && 'border-2 rounded-xl '}  rounded-xl cursor-pointer`} onClick={()=>setPictureIndex(index)}/>
                                </div> 
                            ))
                        }
                    </div>
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        {/* <button className="btn btn-sm btn-circle btn-ghost">✕</button> */}
                    </form>
                </div>
            }
        </dialog>
    </>
    
  )
}

export default Productlist