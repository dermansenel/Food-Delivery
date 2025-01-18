import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeorder/PlaceOrder";
import Footer from "./components/Footer/Footer"; // Import the Footer component
import { LoginPopup } from "./components/LoginPopup/LoginPopup";


const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          {/* Eğer başka sayfalar eklemek isterseniz burada tanımlayabilirsiniz */}
        </Routes>
      </div>
      <Footer /> {/* Include the Footer component here */}
    </>
  );
};

export default App;