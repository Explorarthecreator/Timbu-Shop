import { Link } from "react-router-dom"
import Timbu from '../images/Timbu.svg'
import profile from '../images/account.svg'
import heart from '../images/heart.svg'
import cart from '../images/cart.svg'
import close from '../images/close.svg'
import product1 from '../images/product1.jpg'
import product2 from '../images/product2.jpg'


function Navigation() {
  return (
    <>
        <div className="py-5 font-poppins ">
            <div className="flex justify-between items-center py-3 px-3 border-b border-[#C7BEDD]">
                <div className="hidden">
                    <label className="input border border-[#C8C0DE] rounded-3xl w-72 flex flex-row-reverse items-center gap-4">
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
                    <img src={Timbu} alt="Timbu logo" />
                </Link>
                <div className='flex gap-4 items-center'>
                    <Link>
                        <img src={profile} alt="profile" />
                    </Link>

                    <Link>
                        <img src={heart} alt="wishlist" />
                    </Link>

                    <Link className="indicator" onClick={()=>document.getElementById('my_modal_1').showModal()}>
                        <img src={cart} alt="cart" />
                        <span className="badge badge-xs border-none text-white bg-black indicator-item">
                            2
                        </span>
                    </Link>
                </div>
                {/* end */}
            </div>

            
        </div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_1" className="modal  modal-top mt-20 rounded-xl font-poppins">
            <div className="modal-box w-[512px] rounded-xl absolute right-36 top-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">
                        Cart(2) Added!
                    </h3>
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="">
                            <img src={close} alt="close icon" />
                        </button>
                    </form>
                </div>

                <div className="mt-4 px-6">
                    <div className=" border-b border-[#C6BDDE] flex gap-2 py-3 items-center  relative">
                        <div className='absolute top-2 right-2 cursor-pointer hover:scale-125'>
                            <img src={close} alt="" />
                        </div>
                        <div className=' w-24 text-center'>
                            <img src={product1} alt={`Touch Bright & Clear cream`} className='w-full'/>
                        </div>
                            
                        <div className="">
                            <div className="">
                                <p className=" text-xs lg:text-base leading-5">
                                    Touch Bright & Clear cream
                                </p>
                                <div className="flex flex-col gap-3 mt-3">
                                    <h2 className=" text-xs font-bold">
                                        ₦12,000
                                    </h2>

                                    <div className=' text-lg'>
                                        <span className='p-1 cursor-pointer lg:hover:scale-110' >-</span>
                                        <span className='p-1'>
                                            1
                                        </span>
                                        <span className='p-1 cursor-pointer lg:hover:scale-110' >+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" border-b border-[#C6BDDE] flex gap-2 py-3 items-center  relative">
                        <div className='absolute top-2 right-2 cursor-pointer hover:scale-125'>
                            <img src={close} alt="" />
                        </div>
                        <div className=' w-24 text-center'>
                            <img src={product2} alt={`Touch Bright & Clear cream`} className='w-full'/>
                        </div>
                            
                        <div className="">
                            <div className="">
                                <p className=" text-xs lg:text-base leading-5">
                                    Touch Bright & Clear cream
                                </p>
                                <div className="flex flex-col gap-3 mt-3">
                                    <h2 className=" text-xs font-bold">
                                        ₦12,000
                                    </h2>

                                    <div className=' text-lg'>
                                        <span className='p-1 cursor-pointer lg:hover:scale-110' >-</span>
                                        <span className='p-1'>
                                            1
                                        </span>
                                        <span className='p-1 cursor-pointer lg:hover:scale-110' >+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex py-4 justify-between">
                        <p>
                            Subtotal
                        </p>
                        <h3 className="font-semibold">
                            ₦22,000
                        </h3>
                    </div>

                        


                </div>
                
                <div className=" flex justify-between mt-3">
                    <Link to={'/cart'} className=" btn w-44 border border-[#190D40] bg-transparent text-[#190D40] rounded-xl hover:bg-[#190D40] hover:text-white">
                        View Cart 
                    </Link>

                    <Link to={'/checkout'} className=" btn w-60 rounded-xl bg-[#190D40] text-white hover:bg-transparent hover:border-[#190D40] hover:text-[#190D40]">
                        Checkout
                    </Link>
                </div>
                    
            </div>
        </dialog>
    </>
    
  )
}

export default Navigation