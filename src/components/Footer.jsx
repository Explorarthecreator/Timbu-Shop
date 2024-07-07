import logo from '../images/Timbu.svg'

function Footer() {
  return (
    <div className=" bg-[#C6BDDE] font-poppins mt-10 w-full p-5 lg:p-10 text-black">
      <div className='footer'>
        <aside>
          <img src={logo} alt="" />
          <p className=' hidden md:block w-11/12 lg:w-4/5'>
            At Timbu, we bring together the finest skincare products from trusted brands to offer you personalized regimens that celebrate your unique skin. Our commitment is to help you achieve radiant, healthy skin through high-quality products, and a deep understanding of your skincare needs.
          </p>
        </aside>

        <nav className=' hidden xl:block'>
          <h6 className="footer-title">
            Information
          </h6>
          <p className="link link-hover">
            About Us
          </p>
          <p className="link link-hover">
            Shipping & Delivery
          </p>
          <p className="link link-hover">
            Returns and Refunds
          </p>
          <p className="link link-hover">
            FAQs
          </p>
        </nav>

        <nav className=' hidden xl:block'>
          <h6 className="footer-title">
            My Account
          </h6>
          <p className="link link-hover">
            My cart
          </p>
          <p className="link link-hover">
            My wishlist
          </p>
          <p className="link link-hover">
            Track Order
          </p>
        </nav>

        <nav>
          <h6 className="footer-title">
            Contact us
          </h6>
          <p className="link link-hover">
            +234 123456789
          </p>
          <p className="link link-hover">
            +234 123456789
          </p>
          <p className="link link-hover">
            hello@Timbu.com
          </p>
          <p className="link link-hover">
            No 18a, Berry-way, Ikeja, Lagos.
          </p>
        </nav>

        <form className=' hidden lg:block text-sm'>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">
                Sign up to our newsletter to enjoy discount deals, product updates and more.
              </span>
            </label>
            <div className=" flex">
              <input
                type="text"
                placeholder="Your email address"
                className="input input-sm text-black input-bordered placeholder-black border-[#190D40] bg-transparent" />
              <button className="btn btn-sm bg-[#190D40] text-white">Subscribe</button>
            </div>
          </fieldset>
        </form>

      </div>
      

      <p className=' mt-5'>Copyright © {new Date().getFullYear()} - All right reserved</p>
    </div>

  )
}

export default Footer