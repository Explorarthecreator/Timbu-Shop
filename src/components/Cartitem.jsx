import { useDispatch } from 'react-redux'
import { removeFromCart } from '../features/cart/cartSlice'
import close from '../images/close.svg'


function Cartitem({cart,increase, decrease,index}) {
    const dispatch = useDispatch()
  return (
    <div className=" border-b border-[#C6BDDE] flex gap-2 lg:gap-10 py-3 items-center relative">
        <div className='absolute top-5 right-2 lg:right-5 cursor-pointer hover:scale-125'>
            <img src={close} alt="" onClick={()=>dispatch(removeFromCart(index))}/>
        </div>
        <div className=' text-center'>
            <img src={`https://api.timbu.cloud/images/${cart.image}`} alt={`${cart.name}`} className=' w-24 h-24 lg:h-32 '/>
        </div>
        
        <div className=" lg:w-4/5">
            <div className="w-48 md:w-56 lg:w-80">
                <p className="w-3/4 lg:w-full text-xs lg:text-base leading-5">
                    {
                        cart.name
                    }
                </p>
                <div className="flex lg:flex-col lg:items-start lg:gap-3 justify-between items-center mt-3">
                    <h2 className=" text-xs lg:text-2xl font-bold">
                        ₦{
                            cart.price
                        }
                    </h2>

                    <div className=' border-b-2 border-[#121212] text-lg md:text-xl xl:text-2xl'>
                        <span className={`p-1 cursor-pointer lg:hover:scale-110 `} onClick={()=>decrease(index,cart.quantity)}>-</span>
                        <span className='p-1'>
                            {
                                cart.quantity
                            }
                        </span>
                        <span className='p-1 cursor-pointer lg:hover:scale-110' onClick={()=>increase(index,cart.quantity)}>+</span>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cartitem