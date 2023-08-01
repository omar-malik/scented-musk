import { productData } from "../newProductData";
import { useParams } from "react-router-dom";

const Product = () => {
  const productId = `${useParams().productId}`;
  const currentProduct = productData[productId];

  console.log(productData[productId]);
  return (
    <div className="flex flex-col justify-content p-4 relative pt-[100px] bg-gray-300">
      <div>
        <img className="h=[full] w-[full]" src={currentProduct.image} alt="" />
      </div>

      <div className="flex flex-col gap-3 pt-3">
        <div className="font-medium tracking-wide text-2xl">{currentProduct.name}</div>
        <div>From £{currentProduct.price["10ml"]}</div>
        <div>intensity {currentProduct.intensity}</div>
        <div>{currentProduct.description}</div>
        <div className="flex flex-col">BASE {currentProduct.base}</div>
        <div className="flex flex-col">HEART {currentProduct.heart}</div>
        <div className="flex flex-col">TOP {currentProduct.top}</div>
      </div>

    </div>
  );
};

export default Product;
