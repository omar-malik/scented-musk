import { products } from "../database";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductCarousel = () => {
  console.log(products);
  return (
    <>
      <Swiper className="relative flex flex-col h-[542px] w-[542px]">
        {products.map((product, i) => {
          return (
            <div key={i} className="h-full w-full">
              <SwiperSlide>
                <img src={product.images[0]} alt="" />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductCarousel;
