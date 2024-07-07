import { useState } from 'react'
import heart from '../images/heart.svg'

function Productitem({product,setProduct, addtocart}) {
    const [number, setNumber] = useState(1)
  return (
    <div className="w-[170px] md:w-[200px] lg:w-[230px] xl:w-[258px] border border-[#C6BDDE] p-2 card relative">
        <div className='absolute right-4 top-3' onClick={()=>setProduct(product)}>
          <img src={heart} alt=""/>
        </div>
        <figure>
          <img src={process.env.PUBLIC_URL + product.image} alt="" className='h-24 lg:h-32'/>
        </figure>
        <div className="mt-3">
          <div className='flex gap-2 text-xs lg:text-sm xl:text-base'>
            <p className=' w-2/3 md:w-3/5 xl:w-3/4'>
              {
                product.name
              }
            </p>
            <h3 className='w-1/5 md:w-1/4 font-bold'>
              ₦{
                (product.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
              }
            </h3>
          </div>
          <div className='flex justify-between items-center mt-2'>
            <div className=' border-b-2 border-[#121212] w-1/3 md:w-2/5 text-lg md:text-xl xl:text-3xl flex justify-center'>
              <span className='p-1' onClick={()=>alert('God is also Good')}>-</span>
              <span className='p-1'>
                {
                    number
                }
              </span>
              <span className='p-1' onClick={()=>setNumber(number+1)}>+</span>
            </div>
            <div className='w-3/5 md:w-1/2 text-right'>
              <button className=' btn btn-sm xl:btn-md p-2 rounded-xl bg-[#190D40] text-white text-xs' onClick={()=>addtocart(product,number)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Productitem