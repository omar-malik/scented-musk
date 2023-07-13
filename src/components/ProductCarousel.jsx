import { products } from "../database";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductCarousel = () => {
  return (
    <>
      <div className="p-5 h-full w-full max-w-[1020px]">
        <div className="h-20 w-full flex flex-col items-center justify-center tracking-[2px] font-light text-lg">
          <div className="">EXPLORE EVOCATIVE SCENTS</div>
        </div>

        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 20
            }
 
          }}
        
          spaceBetween={20}
          className="h-full w-full"
        >
          {products.map((product, i) => {
            return (
              <div key={i} className="h-full w-full">
                <SwiperSlide className="">
                  <div className="space-y-1 font-light ">
                    <img className="border-[1px]" src={product.image} alt="" />
                    <div className=" font-medium tracking-[1px]">{product.name}</div>
                    <div className="font-light">Intensity {product.intensity}</div>
                    <div className="text-sm text-gray-500 sm:h-16">
                      £{product.price["10ml"].toFixed(2)} - £{product.price["50ml"].toFixed(2)}
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
