import { useState } from 'react'
import { toast } from 'react-toastify'


function Productitem({product, addToCart}) {
  // const navigate = useNavigate()
    const [number, setNumber] = useState(1)

    const reduceQuantity = ()=>{
      if(number ===1){
        toast.warning('Number can not be less than zero')
      }else{
        setNumber(number-1)
      }
    }
  return (
    <div className="w-[170px] flex-shrink-0 md:w-[200px] lg:w-[230px] xl:w-[258px] border border-[#C6BDDE] p-2 card relative">
        <div className='absolute right-4 top-3'>
          {/* <img src={heart} alt=""/> */}
          <svg className=' w-5 h-5 hover:cursor-pointer fill-[#190D40] hover:scale-125 hover:fill-[#190D40]' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.68822 7.37139C1.68822 10.9375 4.67644 14.4446 9.38894 17.4582C9.57322 17.5667 9.82429 17.6842 10 17.6842C10.1757 17.6842 10.4268 17.5671 10.6029 17.4582C15.3236 14.4446 18.3121 10.9375 18.3121 7.37175C18.3121 4.40853 16.2779 2.31567 13.5657 2.31567C12.0089 2.31567 10.7532 3.05246 10 4.18246C9.24644 3.06103 7.98287 2.31567 6.43429 2.31567C3.72215 2.31567 1.68787 4.40853 1.68787 7.37175M3.03537 7.37175C3.03537 5.14532 4.47501 3.66389 6.41715 3.66389C7.99072 3.66389 8.88644 4.64317 9.43037 5.48032C9.65644 5.81496 9.79894 5.9071 9.99965 5.9071C10.2007 5.9071 10.3261 5.80675 10.5689 5.48032C11.1379 4.65996 12.0168 3.66389 13.5822 3.66389C15.5243 3.66389 16.9639 5.14532 16.9639 7.3721C16.9639 10.4857 13.6743 13.8425 10.1672 16.1692C10.0832 16.2278 10.0332 16.27 9.99965 16.27C9.96608 16.27 9.90751 16.2282 9.82394 16.1692C6.32501 13.8421 3.03572 10.4857 3.03572 7.37175"/>
          </svg>

        </div>
        <figure>
          <img src={process.env.PUBLIC_URL + product.image} alt="" className='h-24 lg:h-32'/>
        </figure>
        <div className="mt-3">
          <div className='flex gap-2 text-xs lg:text-sm h-16 lg:h-12 '>
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
              <button className=' btn btn-sm xl:btn-md p-2 rounded-xl bg-[#190D40] text-white text-xs lg:hover:border-[#190D40] lg:hover:bg-transparent lg:hover:text-[#190D40] lg:hover:scale-105'  onClick={()=>addToCart(product,number)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Productitem