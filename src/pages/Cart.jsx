import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Cartitem from '../components/Cartitem'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { addToCart, increase, reduce } from '../features/cart/cartSlice'
import Productitem from '../components/Productitem'
import { getProducts } from '../features/product/productSlice'


function Cart() {
    const {cart} = useSelector((state)=>state.cart)
    const {products} = useSelector((state)=>state.product)
    const [featureProducts,setFeatureProducts] = useState([]) 

    const [total,setTotal] = useState(()=>{
        let total = 0
        cart.map((item)=>(
            total = total+(Number(item.price)*Number(item.quantity))
        ))
        return total
    })
    const dispatch = useDispatch()

    const reduceQuantity = (index,quantity)=>{
        if(quantity === 1){
            toast.warning('You must have one quantity')
        }else{
            const update = {
                index,
                quantity
            }

            dispatch(reduce(update))
        }
    }

    const increaseQuantity = (index,quantity)=>{
        const update = {
            index,
            quantity
        }

        dispatch(increase(update))
    }

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
    useEffect(()=>{
        let total = 0
        cart.map((item)=>(
            total = total+(Number(item.price)*Number(item.quantity))
        ))
        setTotal(total)

        // eslint-disable-next-line
    },[cart])

    // useEffect(()=>{
    //   if(products.items.length>=1){
    //     const randomItems = [products.items[9],products.items[7],products.items[3],products.items[8]]

    //     setFeatureProducts(randomItems)
    //   }
        
    //     // eslint-disable-next-line
    // },[products])
    

  return (
    <div className=''>



        {
            cart.length>=1? <div className=" flex flex-col lg:flex-row gap-y-8 justify-center lg:justify-between items-center text-black mb-9">

            <div className=" lg:w-2/3">
              {
                cart.map((singleCart,index)=>(
                  <Cartitem key={singleCart.id} cart={singleCart} increase={increaseQuantity} decrease={reduceQuantity} index={index}/>
                ))
              }
    
            </div>
    
    
            <div className=" w-80 h-60 py-4 bg-[#C6BDDE] rounded-xl">
              <h1 className=" text-2xl text-center font-semibold border-b border-[#191919] pb-1">
                Order Summary
              </h1>
    
              <div className="px-5">
                <div className="flex py-4 justify-between border-b border-[#191919]">
                  <p>
                    Subtotal
                  </p>
                  <h3 className='font-semibold'>
                    ₦{(total).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}
                  </h3>
                </div>
    
                <div className="flex py-4 justify-between border-b border-[#191919]">
                  <p className='font-semibold'>
                    Total
                  </p>
                  <h3 className='font-semibold'>
                    ₦{(total).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}
                  </h3>
                </div>
    
                <Link to={'/checkout'} className="btn border-none lg:border-solid btn-md bg-[#190D40] w-full text-white mt-3 lg:hover:border-[#190D40] lg:hover:bg-transparent lg:hover:text-[#190D40] lg:hover:scale-105">
                  Checkout
                </Link>
              </div>
    
              
            </div>
          </div>:
          <div className=' h-[30vh] w-full flex items-center justify-center'>
          <h1 className=' font-semibold text-3xl'>
              Oops.. Your cart is Empty
          </h1>
        </div>
        }
      

      





      {/* {
        products.length >=1 && 
        <>
          <h1 className='text-black font-semibold text-xl lg:text-2xl mt-5 '>
            You may also like
          </h1>


          <div className=' flex overflow-scroll lg:overflow-hidden gap-4 py-6'>
            {
                products.items?.map((product)=>(
                    <Productitem key={product.id} product={product} addToCart={increaseCart}/>
                ))
            }
          </div>

        </>
      } */}
    </div>
  )
}

export default Cart