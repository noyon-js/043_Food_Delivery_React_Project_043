import React from "react";
import "./style.css";
import Navber from "./components/Navber/Navber";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

export default function App() {
  return (
    <div className="app">
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./cart" element={<Cart />} />
        <Route path="./order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}
