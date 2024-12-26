import { useState } from "react";
import { FaLightbulb, FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode
      ? "#f9f9f9"
      : "rgba(24, 29, 37, 1)";
    document.body.style.color = isDarkMode ? "rgba(24, 29, 37, 1)" : "#f9f9f9";
  };
  return (
    <div className={`Navbar ${isDarkMode ? "dark" : "light"}`}>
      <nav>
        <div className="box1 flex">
          <div className="country">
            <select id="country" name="country">
              <option value="option1">Nigeria</option>
              <option value="option1">America</option>
              <option value="option2">Ghana</option>
              <option value="option3">Benin</option>
              <option value="option4">South Africa</option>
            </select>
          </div>
          <div className="cartiz">Cartiz</div>
          <div className="imgs flex">
            <button onClick={toggleMode} className="toggle-button">
              <FaLightbulb className="icon" />
            </button>
            <button>
              <FaUser className="icon" />
            </button>
            <button>
              <FaShoppingCart className="icon" />
            </button>
          </div>
        </div>
        <div className="box2 flex">
          <div className="mini-box2 flex">
            <div>Collections</div>
            <div>Brands</div>
            <div>Stores</div>
            <div>About</div>
            <div>Contact</div>
            <div>Sale</div>
          </div>
          <div className="input-box">
            <form action="">
              <BiSearch style={{ position: "absolute", top: "5px" }} />
              <input
                type="search"
                name="recipes"
                id="search"
                placeholder="search"
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
