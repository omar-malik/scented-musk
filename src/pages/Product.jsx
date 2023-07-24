import { productData } from "../newProductData";
import { useParams } from "react-router-dom";

const Product = () => {

  const productId = `${useParams().productId}`
  const currentProduct = productData[productId]
  

  console.log(productData[productId])
  return (
    
    <div className="flex flex-col justify-content p-4 relative pt-[100px]">
      <div>
        <img className="h=[300px] w-[300px]" src={currentProduct.image} alt="" />
      </div>
      <div>
        {currentProduct.name}
      </div>
      <div>
        £{currentProduct.price["10ml"]}
      </div>
      <div>
        intensity {currentProduct.intensity}
      </div>
      <div>
        {currentProduct.description}
      </div>
    </div>
  );
};

export default Product;