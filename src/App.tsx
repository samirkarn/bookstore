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
import SellerDashboard from "./pages/SellerDashboard";
import BooksManagement from "./pages/BooksManagement";
import BuyerManagement from "./pages/BuyerManagement";
import BuyerProfile from "./pages/BuyerProfile";
import SellerProfile from "./pages/SellerProfile";
import AddBook from "./pages/AddBook";
import SellerLayout from "./components/SellerLayout";
import EditSellerProfile from "./pages/EditSellerProfile";

function App() {
  return (
    <>
      <Routes>
        {/* Buyer's Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-an-account' element={<SignUp />} />
        <Route path='/sell-with-us' element={<SellWithUs />} />
        <Route path='/seller-signup' element={<SellerSignup />} />
        <Route path='/seller-login' element={<SellerLogin />} />
        <Route path='/book-details' element={<BookDetails />} />
        <Route path='/profile' element={<BuyerProfile />} />

        {/* Seller Routes */}
        <Route path='/dashboard' element={<SellerLayout><SellerDashboard /></SellerLayout>} />
        <Route path='/books' element={<SellerLayout><BooksManagement /></SellerLayout>} />
        <Route path='/books/add-book' element={<SellerLayout><AddBook /></SellerLayout>} />
        <Route path='/buyers' element={<SellerLayout><BuyerManagement /></SellerLayout>} />
        <Route path='/account' element={<SellerLayout><SellerProfile /></SellerLayout>} />
        <Route path='/account/edit-account' element={<SellerLayout><EditSellerProfile /></SellerLayout>} />
      </Routes>
    </>
  );
}

export default App;
