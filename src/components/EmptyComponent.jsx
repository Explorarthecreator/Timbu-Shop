import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { decreaseStep, getProducts } from "../features/product/productSlice"

function EmptyComponent() {
  const dispatch = useDispatch()
  const {step} = useSelector((state)=>state.product)
  return (
    <div className=" h-[40vh] flex items-center justify-center text-center ">
        <div>
            <h1 className="text-2xl lg:text-3xl font-semibold mt-7 mb-3">
                Ooops!!! No product on this page
            </h1>
            <button className='btn w-full lg:w-60 rounded-xl bg-[#190D40] text-white lg:hover:bg-transparent lg:hover:border-[#190D40] lg:hover:text-[#190D40]' onClick={()=>{
              dispatch(decreaseStep())
              dispatch(getProducts(step-1))
            }}>
                Go back home
            </button>
        </div>
    </div>
  )
}

export default EmptyComponent