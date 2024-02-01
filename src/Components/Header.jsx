import "../Styles/Header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mainContainer">
      <Link to="/Home">
        <img className="logo" src="src\assets\logo.png" alt="logo-icon" />
      </Link>

      <div className="burger-menu">
        <div
          className={`burger-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {isOpen && (
          <div className="menu">
            <ul>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/Menu">Menu</Link>
              </li>
              <li>
                <Link to="/Favorit">Favorite</Link>
              </li>
              <li>
                <Link to="/Bourse">Cash</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
