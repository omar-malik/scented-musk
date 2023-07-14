import { productData } from "../productData";
import { Link } from "react-router-dom";


const Product = () => {
  return (
    <div className="relative pt-20">
      <img src={productData["1"].image} alt="" />
    </div>
  );
};

export default Product;
