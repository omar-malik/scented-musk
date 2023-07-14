import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import Navbar from "./components/Navbar/Navbar";
import Product from "./pages/Product";

const App = () => {
  return (
    <>
    
      <Router>
      
        <div className="">
        <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product" element={<Product />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
