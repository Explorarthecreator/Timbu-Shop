import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetError } from "../features/product/productSlice";

function Error() {
  const dispatch = useDispatch();
  return (
    <div className=" h-[40vh] flex items-center justify-center text-center bg-white modal-box">
      <div>
        <h1 className="text-2xl lg:text-3xl font-semibold mt-7 mb-3">
          Ooops!!! An Error occured
        </h1>
        <Link
          to={"/"}
          className="btn w-full lg:w-60 rounded-xl bg-[#190D40] text-white lg:hover:bg-transparent lg:hover:border-[#190D40] lg:hover:text-[#190D40]"
        >
          Refresh
        </Link>
      </div>
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => {
            document.getElementById("productDescriptionModal").close();
            dispatch(resetError());
          }}
        >
          ✕
        </button>
        {/* <button className="btn btn-sm btn-circle btn-ghost">✕</button> */}
      </form>
    </div>
  );
}

export default Error;
