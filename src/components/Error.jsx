import { Link } from "react-router-dom"

function Error() {
  return (
    <div className=" h-[40vh] flex items-center justify-center text-center ">
        <div>
            <h1 className="text-2xl lg:text-3xl font-semibold mt-7 mb-3">
                Ooops!!! An Error occured
            </h1>
            <Link className='btn w-full lg:w-60 rounded-xl bg-[#190D40] text-white lg:hover:bg-transparent lg:hover:border-[#190D40] lg:hover:text-[#190D40]'>
                Refresh
            </Link>
        </div>
    </div>
  )
}

export default Error