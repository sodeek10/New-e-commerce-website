import { useState } from "react";
// import "./App.css";
import { FaSearch, FaShoppingCart, FaLightbulb, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileNavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode
      ? "#f9f9f9"
      : "rgba(24, 29, 37, 1)";
    document.body.style.color = isDarkMode ? "rgba(24, 29, 37, 1)" : "#f9f9f9";
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <button className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </button>
        <div className="cartiz">
          <Link to="/">Cartiz</Link>
        </div>
        <div className="icons">
          <button onClick={toggleMode} className="toggle-button">
            <FaLightbulb className="icon" />
          </button>
          <FaSearch className="icon" />
          <FaShoppingCart className="icon" />
        </div>
      </nav>
      {menuOpen && (
        <div className="menu">
          <a href="#Collections">Collections</a>
          <a href="#Brands">Brands</a>
          <a href="#Stores">Stores</a>
          <a href="#bout">About</a>
          <a href="#Contact">Contact</a>
          <a href="#Sale">Sale</a>
        </div>
      )}
    </div>
  );
};

export default MobileNavBar;
