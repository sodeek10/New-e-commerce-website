import Slider from "./sliderImages";
const Header = () => {
  return (
    <div className="Header flex">
      <div className="Header-1">
        <h1>The New Warm Collection</h1>
        <h2>
          NEW FALL <br />
          SEASON 2025
        </h2>
        <button className="button-header">Shop now </button>
      </div>
      <div className="Header-2">
        {/* <img src="./image.png" alt="girl" /> */}
        <Slider />
      </div>
    </div>
  );
};

export default Header;
