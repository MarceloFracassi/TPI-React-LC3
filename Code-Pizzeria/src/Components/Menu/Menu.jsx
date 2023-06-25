import React from "react";
import "./Menu.css";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import CardPizza from "../PizzaCard/CardPizza";

const Menu = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div>
        <div className="menu-container">
          <h2>Explora nuestras deliciosas pizzas</h2>
          <p className="line1"></p>
          <br></br>
        </div>
        <CardPizza />
      </div>
      <br></br>
    </div>
  );
};

export default Menu;
