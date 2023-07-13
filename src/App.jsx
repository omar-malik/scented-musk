import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
    
      <Router>
      
        <div className="App">
        <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
