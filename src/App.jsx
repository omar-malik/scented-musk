import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
    <Navbar></Navbar>
      <Router>
        <div className="App">
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
