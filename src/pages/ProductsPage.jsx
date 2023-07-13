import { products } from "../database";

const ProductsPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center w-full h-full">
        {products.map((product, i) => {
          return (
            <div key={i} className="items-center justify-center p-1 h-full w-full">
              <div className=" space-y-1 font-light ">
                <img className="border-[1px]" src={product.image} alt="" />
                <div className=" font-medium tracking-[1px]">
                  {product.name}
                </div>
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
