import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../../public/assets/frontend_assets/assets";

export default function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore_menu" id="explore_menu">
      <h1>Explore our menu</h1>
      <p className="explore_menu_text">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and clevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="explore_menu_list">
        {menu_list.map((item) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              className="explore_menu_list_item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
