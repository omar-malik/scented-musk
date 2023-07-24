import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import Navbar from "./components/Navbar/Navbar";
import Product from "./pages/Product";
import Footer from "./components/footer";


const App = () => {
  return (
    <>
      <Router>
        <div className="flex flex-col h-[100%] ">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:productId" element={<Product />} />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
};

export default App;
