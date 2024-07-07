import { useLocation } from 'react-router-dom'
import header from '../images/header.jpg'

function Header() {
  const location = useLocation()

  const pathMatchRoute = (route)=>{
    if(route === location.pathname){
      return true
    }
  }
  return (
    <div className='font-poppins font-bold h-12 md:h-16 lg:h-28 w-full relative flex items-center justify-center'>
      
      <h1>
        {
          pathMatchRoute('/') && 'Shop all our products'
        }
        {
          pathMatchRoute('/cart') && 'Cart'
        }
        {
          pathMatchRoute('/checkout') && 'Checkout'
        }
      </h1>
      <img src={header} alt="" className='w-full h-full absolute left-0 top-0 -z-10' />
    </div>
  )
}

export default Header