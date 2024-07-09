import logo from '../images/Timbu.svg'

function Footer() {
  return (
    <div className=" bg-[#C6BDDE] font-poppins mt-10 w-full p-5 lg:p-10 text-black">
      <div className='footer lg:footer-center'>
        <aside className='mb-8'>
          <img src={logo} alt="Timbu Logo" />
          <p className=' leading-5 text-left lg:text-center mt-2 md:block w-11/12 lg:w-4/5'>
            At Timbu, we bring together the finest skincare products from trusted brands to offer you personalized regimens that celebrate your unique skin. Our commitment is to help you achieve radiant, healthy skin through high-quality products, and a deep understanding of your skincare needs.
          </p>
        </aside>

        

        

        

      </div>
      

      <p className=' mt-5 text-xs lg:text-center'>Copyright © {new Date().getFullYear()} - All right reserved</p>
    </div>

  )
}

export default Footer