import { products } from "../database";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductCarousel = () => {
  return (
    <>
      <div className="h-[542px] w-[542px]">
        <div className="h-20 w-full flex flex-col items-center justify-center tracking-[2px] font-light text-lg">
          <div className="">EXPLORE EVOCATIVE SCENTS</div>
        </div>

        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={0}
          className=""
        >
          {products.map((product, i) => {
            return (
              <div key={i} className="h-full w-full">
                <SwiperSlide className="">
                  <div className=" font-light ">
                    <img className="border-[1px]" src={product.image} alt="" />
                    <div className="">{product.name}</div>
                    <div className="">Intensity {product.intensity}</div>
                    <div className="text-sm text-gray-500">
                      £{product.price["10ml"]} - £{product.price["50ml"]}
                    </div>
                  </div>
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
