
import logo from '../images/Timbu.svg'
import close from '../images/close.svg'
import cartlogo from '../images/cart.svg'
import profile from '../images/account.svg'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { increase, reduce, removeFromCart } from '../features/cart/cartSlice'
import { useEffect, useState } from 'react'

function Navbar() {
    const {cart} = useSelector((state)=>state.cart)
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
            toast.warning('You must have one item')
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

    useEffect(()=>{
        let total = 0
        cart.map((item)=>(
            total = total+(Number(item.price)*Number(item.quantity))
        ))
        setTotal(total)
    },[cart])
  return (
    <>
        <div className=' bg-[#C6BDDE] flex items-center justify-between px-4 py-5 lg:w-4/5 lg:m-auto lg:bg-transparent lg:border-b lg:border-[#C8C0DE] lg:mb-3'>
          <div className="hidden lg:block">
            <label className="input border border-[#C8C0DE] rounded-3xl w-72 flex flex-row-reverse items-center gap-4 ">
              <input type="text" className="grow placeholder-black" placeholder="Search" />
              <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="#000"
                      className="h-4 w-4 opacity-70">
                      <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd" />
                  </svg>
              </label>
          </div>
            <Link to={'/'}>
               <img src={logo} alt="Timbu logo" />
            </Link>
            <div className='flex gap-4 items-center'>
                <Link className="indicator" onClick={()=>document.getElementById('cart_modal').showModal()}>
                    <img src={cartlogo} alt="cart" />
                    <span className="badge badge-xs border-none text-white bg-black indicator-item">
                    {
                        cart.length
                    }
                    </span>
                </Link>
              <Link>
                <img src={profile} alt="profile" />
              </Link>
            </div>




        </div>

        <dialog id="cart_modal" className="modal  modal-top h-screen rounded-xl lg:mt-10 font-poppins ">
          <div className="modal-box w-full md:w-[512px] lg:w-[512px]  m-auto rounded-xl absolute md:right-20 md:top-4  lg:right-36 lg:top-4">
              <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">
                      Cart({cart.length}) 
                  </h3>
                  <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="">
                          <img src={close} alt="close icon" />
                      </button>
                  </form>
              </div>


              {
                cart.length >=1?
                    <div className="mt-6 px-4">
                    {
                        cart.map((singleCart,index)=>(
                            <div key={singleCart.id} className=" border-b border-[#C6BDDE] flex gap-4 mt-2  py-3 items-center  relative">
                                <div className='absolute top-0 right-0 cursor-pointer hover:scale-125' onClick={()=>dispatch(removeFromCart(index))}>
                                    <img src={close} alt="" />
                                </div>
                                <div className=' text-center'>
                                    <img src={`https://api.timbu.cloud/images/${singleCart.image}`} alt={singleCart.name} className='w-24 h-24'/>
                                </div>
                                    
                                <div className="">
                                    <div className=" w-48 md:w-56 lg:w-80">
                                        <p className=" text-xs lg:text-base leading-5">
                                            {
                                                singleCart.name
                                            } 
                                        </p>
                                        <div className="flex items-center justify-between  mt-3">
                                            <h2 className=" text-xs font-bold">
                                                ₦{
                                                    (singleCart.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
                                                }
                                            </h2>

                                            <div className='border-b-2 border-[#121212] text-lg'>
                                                <span className={`p-1 cursor-pointer lg:hover:scale-110 `} onClick={()=>reduceQuantity(index,singleCart.quantity)}>-</span>
                                                <span className='p-1'>
                                                    {
                                                        singleCart.quantity
                                                    }
                                                </span>
                                                <span className='p-1 cursor-pointer lg:hover:scale-110' onClick={()=>increaseQuantity(index,singleCart.quantity)}>+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    <div className="flex py-4 justify-between">
                        <p>
                            Subtotal
                        </p>
                        <h3 className="font-semibold">
                            ₦{(total).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}
                        </h3>
                    </div>
                    </div>:
                    <div className=' h-[30vh] w-full flex items-center justify-center'>
                        <h1 className=' font-semibold text-3xl text-center'>
                            Oops.. Your cart is Empty
                        </h1>
                    </div>
              }
              

              
              
              <div className=" flex flex-col lg:flex-row gap-5 mt-5 ">
                  <Link to={'/cart'} className=" btn w-full lg:w-44 border border-[#190D40] bg-transparent text-[#190D40] rounded-xl lg:hover:bg-[#190D40] lg:hover:text-white" onClick={()=>document.getElementById('cart_modal').close()}>
                      View Cart 
                  </Link>

                  <Link to={'/checkout'} className={`btn w-full lg:w-60 rounded-xl bg-[#190D40] text-white lg:hover:bg-transparent lg:hover:border-[#190D40] lg:hover:text-[#190D40] ${cart.length<=0 && 'hidden'}`} onClick={()=>document.getElementById('cart_modal').close()}>
                      Checkout
                  </Link>
              </div>
                  
          </div>
        </dialog>
    </>
  )
}

export default Navbar