import Body from "../components/body";
import MobileNavBar from "../components/mobileNavBar";
import Navbar from "../components/navbar";
import HeaderContents from "../components/SliderContents";
import FashionWearSales from "../components/Cards";

const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MobileNavBar />
      <HeaderContents></HeaderContents>
      <Body></Body>
      <FashionWearSales></FashionWearSales>
    </div>
  );
};

export default Homepage;
