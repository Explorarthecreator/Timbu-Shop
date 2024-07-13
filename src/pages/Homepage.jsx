
import { useEffect } from 'react'
import Productlist from '../components/Productlist'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseStep, getProducts, increaseStep } from '../features/product/productSlice'
import Loading from '../components/Loading'
import EmptyComponent from '../components/EmptyComponent'
import Error from '../components/Error'

function Homepage() {
  const dispatch = useDispatch()

  const {productsLoading,productsSuccess,productsError,products,step} = useSelector((state)=>state.product)

  useEffect(()=>{
    dispatch(getProducts(1))
    // eslint-disable-next-line 
  },[])

  if(productsLoading){
    return <Loading/>
  }
  if(productsError){
    return <Error/>
  }
  return (
    <div className=''>

      {
        productsSuccess && 
        <Productlist products={products.items}/>
      }

      {
        (productsSuccess && products.items.length <=0) &&
        <EmptyComponent/>
      }
      

      <div className=' mt-10 flex justify-center'>
        <div className="join gap-2">
          <button className={`join-item btn btn-md bg-transparent border border-[#C6BDDE] hover:bg-transparent hover:scale-110 ${step === 1 && 'btn-disabled'}`}
            onClick={()=>{
              dispatch(decreaseStep())
              dispatch(getProducts(step-1))
            }}
          >
            {`<`}
          </button>
          <button className="join-item btn btn-md btn-active bg-[#190D40] text-white hover:text-[#190D40] hover:bg-transparent hover:border hover:border-[#C6BDDE] hover:scale-110">
            {
              step
            }
          </button>
          <button className="join-item btn btn-md bg-transparent border border-[#C6BDDE] hover:bg-transparent hover:scale-110">
            {
              step+1
            }
          </button>
          <button className="join-item btn btn-md bg-transparent border border-[#C6BDDE] hover:bg-transparent hover:scale-110">
            {
              step + 2
            }
          </button>
          <button className="join-item btn btn-md bg-transparent border border-[#C6BDDE] hover:bg-transparent hover:scale-110" onClick={()=> {
            dispatch(increaseStep())
            dispatch(getProducts(step+1))
          }}>{`>`}</button>
        </div>
      </div>
      
    </div>
  )
}

export default Homepage