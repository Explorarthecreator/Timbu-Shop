function Loading() {
  return (
    <div className=" h-[40vh] flex items-center justify-center text-center ">
      <div>
        <span className="loading loading-bars w-24 text-[#190D40]"></span>
        {/* <h1 className="text-2xl lg:text-3xl font-semibold mt-7 mb-3">
                Fectching Data
            </h1> */}
        {/* <motion.p initial={{x:'100vw', opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5}}>
                Wait a little while we finalize your payment
            </motion.p> */}
      </div>
    </div>
  );
}

export default Loading;
