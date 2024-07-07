
import logo from '../images/Timbu.svg'
import cartLogo from '../images/cart.svg'
import hamburger from '../images/hamburger.svg'
import heart from '../images/heart.svg'
import account from '../images/account.svg'
import { useSelector } from 'react-redux'

function Navbar() {
  const {cart} = useSelector((state)=>state.cart)
  return (
    <div className=' bg-[#C6BDDE] flex items-center justify-between px-3 py-5'>
      <img src={logo} alt="Timbu Logo" />
      <div className='flex gap-4'>
        <div className='flex gap-2 items-center'>
          <div>
            <img src={account} alt="" />
          </div>
          <div>
            <img src={heart} alt="" />
          </div>
          <div className='indicator'>
            <img src={cartLogo} alt="" />
            <span className="badge badge-xs border-none text-white bg-black indicator-item">
              {
                cart.length
              }
            </span>
          </div>
        </div>
        <div>
          <img src={hamburger} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar