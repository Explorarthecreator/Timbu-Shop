import { motion } from "framer-motion"
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { clearCart, reset } from "../features/cart/cartSlice";


const svgVariant ={
    hidden: {
        rotate:-100,
        opacity:0,
        scale:0
    },
    visible:{
        rotate:0,
        opacity:1,
        scale:1,
        transition:{duration:0.7, ease:'easeInOut', type:'spring',stiffness:120}
    }

}


function Finalpage() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(clearCart())
        dispatch(reset())
        // eslint-disable-next-line 
    },[])
    
  return (
    <div className=" h-[40vh] flex flex-col gap-5 items-center justify-center text-center ">
        <div>
            <motion.svg variants={svgVariant} initial="hidden" animate="visible" className="m-auto lg:hidden" width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="91" height="91" rx="45.5" fill="#190D40"/>
                <g clipPath="url(#clip0_150_575)">
                <path fillRule="evenodd" clipRule="evenodd" d="M61.9094 33.0945C62.3781 33.601 62.6414 34.288 62.6414 35.0042C62.6414 35.7205 62.3781 36.4074 61.9094 36.9139L43.1711 57.1599C42.9234 57.4276 42.6294 57.6398 42.3059 57.7847C41.9823 57.9295 41.6355 58.0041 41.2852 58.0041C40.935 58.0041 40.5882 57.9295 40.2646 57.7847C39.941 57.6398 39.647 57.4276 39.3994 57.1599L30.0894 47.1027C29.8506 46.8535 29.6602 46.5554 29.5291 46.2259C29.3981 45.8963 29.3292 45.5419 29.3263 45.1832C29.3234 44.8246 29.3866 44.4689 29.5123 44.1369C29.638 43.805 29.8237 43.5034 30.0584 43.2497C30.2931 42.9961 30.5723 42.7956 30.8795 42.6597C31.1867 42.5239 31.5159 42.4556 31.8479 42.4587C32.1798 42.4618 32.5079 42.5363 32.8129 42.6779C33.1179 42.8195 33.3938 43.0252 33.6244 43.2832L41.2844 51.5596L58.3727 33.0945C58.6049 32.8435 58.8806 32.6444 59.184 32.5085C59.4874 32.3727 59.8126 32.3027 60.1411 32.3027C60.4695 32.3027 60.7947 32.3727 61.0981 32.5085C61.4016 32.6444 61.6772 32.8435 61.9094 33.0945Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_150_575">
                <rect width="40" height="43.2184" fill="white" transform="translate(26 23.8909)"/>
                </clipPath>
                </defs>
            </motion.svg>

            <motion.svg variants={svgVariant} initial="hidden" animate="visible" className="m-auto hidden lg:block" width="140" height="140" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="91" height="91" rx="45.5" fill="#190D40"/>
                <g clipPath="url(#clip0_150_575)">
                <path fillRule="evenodd" clipRule="evenodd" d="M61.9094 33.0945C62.3781 33.601 62.6414 34.288 62.6414 35.0042C62.6414 35.7205 62.3781 36.4074 61.9094 36.9139L43.1711 57.1599C42.9234 57.4276 42.6294 57.6398 42.3059 57.7847C41.9823 57.9295 41.6355 58.0041 41.2852 58.0041C40.935 58.0041 40.5882 57.9295 40.2646 57.7847C39.941 57.6398 39.647 57.4276 39.3994 57.1599L30.0894 47.1027C29.8506 46.8535 29.6602 46.5554 29.5291 46.2259C29.3981 45.8963 29.3292 45.5419 29.3263 45.1832C29.3234 44.8246 29.3866 44.4689 29.5123 44.1369C29.638 43.805 29.8237 43.5034 30.0584 43.2497C30.2931 42.9961 30.5723 42.7956 30.8795 42.6597C31.1867 42.5239 31.5159 42.4556 31.8479 42.4587C32.1798 42.4618 32.5079 42.5363 32.8129 42.6779C33.1179 42.8195 33.3938 43.0252 33.6244 43.2832L41.2844 51.5596L58.3727 33.0945C58.6049 32.8435 58.8806 32.6444 59.184 32.5085C59.4874 32.3727 59.8126 32.3027 60.1411 32.3027C60.4695 32.3027 60.7947 32.3727 61.0981 32.5085C61.4016 32.6444 61.6772 32.8435 61.9094 33.0945Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_150_575">
                <rect width="40" height="43.2184" fill="white" transform="translate(26 23.8909)"/>
                </clipPath>
                </defs>
            </motion.svg>

            <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{ease:'easeOut', delay:0.5}}>
                <h1 className="text-2xl lg:text-3xl font-semibold mt-7 mb-3">
                    Thank you for shopping with Timbu!
                </h1>
                <p>
                    We’ll send your receipt to your mail 
                </p>
            </motion.div>

            
        </div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1,ease:'circInOut'}}>
            <Link to={'/'} className={`btn w-full lg:w-60 rounded-xl bg-[#190D40] text-white lg:hover:bg-transparent lg:hover:border-[#190D40] lg:hover:text-[#190D40]`}> 
                Continue Shopping
            </Link>
        </motion.div>
    </div>
  )
}

export default Finalpage