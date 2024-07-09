
import Productlist from '../components/Productlist'

function Homepage() {
  return (
    <div className=''>
      <Productlist/>
      {/* <div className="w-[170px] border border-[#C6BDDE] p-2 card">
        <figure>
          <img src={product} alt="" />
        </figure>
        <div className="mt-3">
          <div className='flex text-xs'>
            <p className=' w-2/3'>
              Touch bright & Clear Cream | 150ml
            </p>
            <h3 className='w-1/5 font-bold'>
              ₦12,000
            </h3>
          </div>
          <div className='flex justify-between items-center'>
            <div className=' border-b-2 w-1/3 text-lg flex'>
              <span className='p-1' onClick={()=>alert('God is also Good')}>-</span>
              <span className='p-1'>0</span>
              <span className='p-1' onClick={()=>alert('God is Good')}>+</span>
            </div>
            <div className='w-3/5'>
              <button className=' btn btn-sm p-2 rounded-xl bg-[#190D40] text-white text-xs'>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div> */}
      
    </div>
  )
}

export default Homepage