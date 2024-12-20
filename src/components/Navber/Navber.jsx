import React, { useState } from "react";
import "./Navber.css";

export default function Navber() {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navber">
      <div className="logo">
        <img src="../assets/frontend_assets/logo.png" alt="" />
      </div>
      <ul>
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-App
        </li>
        <li
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navber_right">
        <img src="../assets/frontend_assets/search_icon.png" alt="" />
        <div className="add_to_cart_icon">
          <img src="../assets/frontend_assets/basket_icon.png" alt="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
}
