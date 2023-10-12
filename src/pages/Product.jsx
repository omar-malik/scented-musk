import { productData } from "../newProductData";
import { useParams } from "react-router-dom";


const Product = () => {
  const productId = `${useParams().productId}`;
  const currentProduct = productData[productId];

  return (
    <div className="w-full flex flex-row items-center justify-center font-[quicksand]">
      <div className="flex flex-col md:flex-row max-w-[1200px] right-0 justify-center relative pt-[75px] lg:pt-[120px] bg-gray-200">
        <div className="p-3 lg:p-8">
          <img className="h-full w-full" src={currentProduct.image} alt="" />
        </div>

        <div className="flex flex-col gap-3 p-6 ">
          <div className="font-semibold tracking-wide text-[26px]">
            {currentProduct.name}
          </div>
          <div className="text-[23px] tracking-wider">
            From £{currentProduct.price["10ml"].toFixed(2)}
          </div>
          <div className="pt-2 pb-1">Intensity {currentProduct.intensity}</div>
          <div className="tracking-wide text-sm leading-6">
            {currentProduct.description}
          </div>

          <div className="flex flex-col ">
            <div className="font-semibold tracking-wider text-[15px]">BASE</div>
            <div className="text-sm">{currentProduct.base}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold tracking-wider text-[15px]">
              HEART
            </div>
            <div className="text-sm">{currentProduct.heart}</div>
          </div>
          <div className="flex flex-col tracking-wider text-[15px]">
            <div className="font-semibold">TOP</div>
            <div className="text-sm">{currentProduct.top}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
