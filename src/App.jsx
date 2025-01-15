import { Route, Routes } from "react-router-dom";
import MobileNavBar from "./components/mobileNavBar";
import Navbar from "./components/navbar";
import Homepage from "./pages/home";
import ProductDetails from "./pages/productDetails";
const App = () => {
  return (
    <div>
      <MobileNavBar></MobileNavBar>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
