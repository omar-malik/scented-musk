import { products } from "../newDatabase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const ProductCarousel = () => {
  return (
    <>
      <div className="p-5 h-full w-full max-w-[1020px]">
        <div className="h-20 w-full flex flex-col items-center justify-center tracking-[2px] font-light text-lg">
          <div className="">EXPLORE EVOCATIVE SCENTS</div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1020: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          spaceBetween={20}
          className="h-full w-full"
        >
          {products.map((product, i) => {
            return (
              <div key={i} className="h-full w-full ">
                <SwiperSlide className="">
                  <div className="space-y-1 font-light ">
                    <Link to={`/product/${product.key}`} className="space-y-2">
                      <img
                        className="border-[1px] hover:brightness-[70%] transition duration-700"
                        src={product.image}
                        alt=""
                      />
                      <div className=" font-medium tracking-[1px]">
                        {product.name}
                      </div>
                    </Link>
                    <div className="space-y-2">
                      <div className="font-light ">
                        Intensity {product.intensity}
                      </div>
                      <div className="text-sm text-gray-500 sm:h-16">
                        £{product.price["10ml"].toFixed(2)} - £
                        {product.price["50ml"].toFixed(2)}
                      </div>
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
