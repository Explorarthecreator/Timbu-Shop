import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Homepage from "./pages/Homepage"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import 'react-toastify/dist/ReactToastify.css';
import Processingpayment from "./pages/Processingpayment";
import Finalpage from "./pages/Finalpage";


function App() {
  
  return (
    <>
      <Router>
        {/* Mobile Nav */}
        <Navbar/>
      
        <Header/>
        <main className=" pt-4 md:pt-8 lg:pt-11 xl:w-4/5 w-11/12 m-auto font-poppins">
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/processing-payment" element={<Processingpayment/>}/>
            <Route path="/thank-you" element={<Finalpage/>}/>
          </Routes>
          
        </main>
        <Footer/>
      </Router>
      <ToastContainer
        className="z-50"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
