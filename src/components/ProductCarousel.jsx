import { products } from "../database";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductCarousel = () => {
  console.log(products);
  return (
    <>
      <div className=" pt-[1400px] h-[542px] w-[542px]">
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
                <SwiperSlide>
                  <div>
                    <img className="" src={product.image} alt="" />
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
