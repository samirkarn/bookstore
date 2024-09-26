import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SellWithUs from "./pages/SellWithUs";
import SellerSignup from "./pages/SellerSignup";
import SellerLogin from "./pages/SellerLogin";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-an-account' element={<SignUp />} />
        <Route path='/sell-with-us' element={<SellWithUs />} />
        <Route path='/seller-signup' element={<SellerSignup />} />
        <Route path='/seller-login' element={<SellerLogin />} />
        <Route path='/book-details' element={<BookDetails />} />
      </Routes>
    </>
  )
}

export default App;