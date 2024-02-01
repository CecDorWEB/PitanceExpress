import "../Styles/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mainContainer">
      <Link to="/">
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Menu">Menu</Link>
              </li>
              <li>
                <Link to="/Favorite">Favorite</Link>
              </li>
              <li>
                <Link to="/Cash">Cash</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
