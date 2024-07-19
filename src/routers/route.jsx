import { Navigate, Route, Routes } from "react-router-dom";
import Product from "../components/Product";
import About from "../components/About";
import Home from "../components/Home";
import Details from "../components/Details";
import Wishlist from "../components/Wishlist";
import Order from "../components/Order";
import Cart from "../components/Cart";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const route = () => {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={ <Product/> } />
      <Route path="/product/:id" element={<Details />} />
      <Route path="/about" element={<About />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/order" element={<Order />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/:id" element={<Cart />} />
    
    </Routes>
  );
}

export default route;
