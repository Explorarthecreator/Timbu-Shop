import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import { useDispatch } from "react-redux";



function Processingpayment() {
    const navigate = useNavigate()
    // const dispatch = useDispatch()
    useEffect(()=>{
        setTimeout(() => {
            navigate('/thank-you')
        }, 3500);

        // eslint-disable-next-line 
    },[])
  return (
    <div className=" h-[40vh] flex items-center justify-center text-center ">
        <div>
            <motion.span initial={{opacity:0, scaleX:0}} animate={{opacity:1,scaleX:1}} transition={{delay:0.6,duration:0.5}} className="loading loading-bars w-24 text-[#190D40]"></motion.span>
            <motion.h1 initial={{x:'-10vw', opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5}} className="text-2xl lg:text-3xl font-semibold mt-7 mb-3">
                Processing Payment
            </motion.h1>
            <motion.p initial={{x:'100vw', opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5}}>
                Wait a little while we finalize your payment
            </motion.p>
        </div>
    </div>
  )
}

export default Processingpayment