import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function Checkout() {
  const {cart} = useSelector((state)=>state.cart)

        // eslint-disable-next-line
  const [total,setTotal] = useState(()=>{
    let total = 0
    cart.map((item)=>(
        total = total+(Number(item.price)*Number(item.quantity))
    ))
    return total
  })

  return (
    <div className='flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-x-14 xl:gap-20'>
      <div className='py-6 lg:w-1/2 '>
        <header className='mb-5'>
          <h1 className=' font-medium text-base'>
            Billing Details
          </h1>

          <p className='text-xs xl:text-base'>
            Carefully Input the appropriate details in its appropriate place below.  
          </p>
        </header>

        <form>

          {/* Single Text Box */}
          <div className='my-2'>
            <label className=' font-medium text-base'>
              Email Address
            </label>
            <input type="email" placeholder='Email Address' className='input border border-[#C6BDDE] w-full outline-none focus:outline-none' />
          </div>

          {/* Double Text Box */}
          <div className='flex flex-col lg:flex-row lg:justify-between my-2 gap-2'>
            <div className='lg:w-2/4'>
              <label className=' font-medium text-base'>
                First Name
              </label>
              <input type="text" placeholder='First Name' className='input border border-[#C6BDDE] w-full outline-none focus:outline-none' />
            </div>

            <div className='lg:w-2/4'>
              <label className=' font-medium text-base'>
                Last Name
              </label>
              <input type="text" placeholder='Last Name' className='input border border-[#C6BDDE] w-full outline-none focus:outline-none' />
            </div>
          </div>

          {/* Single Text Box */}
          <div className='my-2'>
            <label className=' font-medium text-base'>
              Address
            </label>
            <input type="text" placeholder='Address' className='input border border-[#C6BDDE] w-full outline-none focus:outline-none' />
          </div>

          {/* Double Text Box */}
          <div className='flex flex-col lg:flex-row lg:justify-between my-2 gap-2'>
            <div className='lg:w-2/4'>
              <label className=' font-medium text-base'>
                Country
              </label>
              <input type="text" placeholder='Country' className='input border border-[#C6BDDE] w-full outline-none focus:outline-none' />
            </div>

            <div className='lg:w-2/4'>
              <label className=' font-medium text-base'>
                State
              </label>
              <input type="text" placeholder='State' className='input border border-[#C6BDDE] w-full outline-none focus:outline-none' />
            </div>
          </div>

          {/* Single Text Box */}
          <div className='my-2'>
            <label className=' font-medium text-base'>
              Phone Number
            </label>
            <input type="text" placeholder='Phone Number' className='input border border-[#C6BDDE] w-full outline-none focus:outline-none' />
          </div>
        </form>
      </div>


      <div className='flex flex-col items-center lg:w-2/5'>
        <div className=" w-80 md:w-[400px] lg:w-[489px] py-4 bg-[#C6BDDE] rounded-xl">
          <h1 className=" text-2xl text-center font-semibold border-b border-[#191919] pb-1">
            Your Order
          </h1>

          <div className="px-5 py-3 border-b border-[#191919]">

            <div className='py-4 p-2 flex flex-col gap-4'>
              {
                cart.map((singleCart)=>(

                  <div key={singleCart.id} className=" bg-white rounded-xl flex gap-2 p-3 items-center">
                
                    <div className=' w-[77px] h-20 text-center'>
                        <img src={singleCart.image} alt={`Touch Bright & Clear cream`} className=' h-20'/>
                    </div>
                    
                    <div className=" ">
                        <div className="">
                            <p className=" text-xs lg:text-base leading-5">
                              {singleCart.name}
                            </p>
                            <div className="flex  flex-col justify-between mt-2">
                                <h2 className=" text-xs lg:text-base font-bold">
                                    ₦{(singleCart.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}
                                </h2>

                                <div className=' text-base '>
                                    Qty: {singleCart.quantity}
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
            

                ))
              }

              
              {/* end */}
            </div>

            <div className="flex justify-between ">
              <p>
                Subtotal
              </p>
              <h3 className=' font-semibold'>
                ₦{(total).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}
              </h3>
            </div>

            <div className="flex justify-between my-2">
              <p>
                Shipping fee
              </p>
              <h3 className='font-semibold'>
                ₦4,000
              </h3>
            </div>

            <div className="flex justify-between">
              <p>
                Transanction fee
              </p>
              <h3 className='font-semibold'>
                ₦300
              </h3>
            </div>

            
          </div>


          <div className="flex justify-between px-5 py-4">
            <p>
              Total
            </p>
            <h3 className='font-semibold'>
              ₦{(total + 4000 + 300).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}
            </h3>
          </div>
          

          
        </div>

        <Link to={'/processing-payment'} className="btn border-none lg:border-solid mb-4 btn-md bg-[#190D40] w-full text-white mt-3 lg:hover:border-[#190D40] lg:hover:bg-transparent lg:hover:text-[#190D40] lg:hover:scale-105">
          Pay Now
        </Link>
        <p className='text-xs lg:text-base'>
          We accept every and any type of payment; Bank transfer, Debit/Credit cards, USSD.
        </p>
      </div>



    </div>
  )
}

export default Checkout