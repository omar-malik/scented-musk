import { productData } from "../productData";
import { Link } from "react-router-dom";


const Product = () => {
  return (
    <div className="relative pt-20">
      <div>
        {console.log(productData["1"])}
      </div>
    </div>
  );
};

export default Product;
