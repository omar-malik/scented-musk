import { products } from "../newDatabase";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <>
      <div className="mt-[70px] lg:mt-[110px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center w-full h-full">
        {products.map((product, i) => {
          return (
            <div
              key={i}
              className="items-center justify-center p-3 h-full w-full"
            >
              <div className="  font-light ">
                <Link to={`/product/${product.key}`} className="space-y-1">
                  <img
                    className="border-[1px] hover:brightness-[70%] transition duration-700"
                    src={product.image}
                    alt=""
                  />
                  <div className=" font-medium tracking-[1px]">
                    {product.name}
                  </div>
                </Link>
                <div className="font-light">Intensity {product.intensity}</div>
                <div className="text-sm text-gray-500">
                  £{product.price["10ml"].toFixed(2)} - £
                  {product.price["50ml"].toFixed(2)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsPage;
