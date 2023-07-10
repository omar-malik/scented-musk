import { products } from "../database";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductCarousel = () => {
  console.log(products);
  return (
    <>
      <div className="relative flex flex-col h-[542px] w-[542px]">
        <Swiper
          className=""
        >
          {products.map((product, i) => {
            return (
              <div key={i} className="h-full w-full">
                <SwiperSlide>
                  <img className="" src={product.images[0]} alt="" />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default ProductCarousel;
