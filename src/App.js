import React, { useContext } from "react";
import { Route, Routes } from 'react-router-dom'
import Footer from "./components/footer";
import Header from './components/Header'
import Registration from './pages/Registration'
import LogIn from "./pages/LogIn";
import Homepage from "./pages/Homepage";
import Micuenta from "./pages/Micuenta";
import RequireAuth from "./components/RequireAuth";
import NotFound from "./pages/NotFound/NotFound";
import SingleProductPage from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Notification from "./components/Notification";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app font-poppins ">
      <Header/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="register" element={<Registration/>} />
          <Route path="login" element={<LogIn />} />
          <Route path="micuenta" element={
            <RequireAuth>
              <Micuenta />
            </RequireAuth>}/>
          <Route path="*" element={<NotFound/>} />
          <Route path="/singleProduct" element={<SingleProductPage/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      <Footer/>
      <Notification/>
      <Contact/>
    </div>
  );
}

export default App;
