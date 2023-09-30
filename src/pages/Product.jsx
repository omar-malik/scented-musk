import { productData } from "../newProductData";
import { useParams } from "react-router-dom";

const Product = () => {
  const productId = `${useParams().productId}`;
  const currentProduct = productData[productId];

  return (
    <div className="w-full flex flex-row items-center justify-center ">
      <div className="flex flex-col md:flex-row max-w-[1020px] right-0 justify-center relative pt-[75px] bg-gray-200">
        <div className="p-3">
          <img className="h-full w-full" src={currentProduct.image} alt="" />
        </div>

        <div className="flex flex-col gap-3 p-6 ">
          <div className="font-[quicksand] tracking-wide text-[26px]">
            {currentProduct.name}
          </div>
          <div className="font-light text-[23px] tracking-wider">From £{currentProduct.price["10ml"].toFixed(2)}</div>
          <div className="font-light pt-2 pb-1">Intensity {currentProduct.intensity}</div>
          <div className="font-light tracking-wide text-sm leading-6">{currentProduct.description}</div>
          <div className="flex flex-col font-[quicksand]">BASE:<br></br><div className="font-[quicksand] font-">{currentProduct.base}</div></div>
          <div className="flex flex-col">HEART<br></br>{currentProduct.heart}</div>
          <div className="flex flex-col">TOP<br></br>{currentProduct.top}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
