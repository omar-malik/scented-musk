import { useState, useEffect } from "react";
import ProductCarousel from "./ProductCarousel";
import { Link } from "react-router-dom"


const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentImage, images]);

  return (
    <>
      <div className="relative bg-white h-[574px] w-full md:h-[50vw] lg:h-[700px]">
        <img
          src={images[currentImage]}
          alt="carousel"
          className="w-full h-full object-cover object-top"
        />
        <div className="flex flex-col items-center justify-center absolute z-30 text-white bottom-10 w-full p-7 ">
          <div className=" flex flex-col items-center">
            <div className="font-light tracking-[1px]">PREMIUM FRAGRANCES</div>
            <div className="font-thin text-sm p-2">DISCOVER YOUR SCENT</div>
            <Link
              to="/products"
              className="hover:bg-gold hover:text-white transition duration-200 bg-white text-sm text-black p-2 pl-10 pr-10 rounded-full"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="flex flex-row text-gray-400 md:m-3 md:space-x-2 align-middle justify-center">
          <div className="p-6">
            <img
              className="h-[56pxpx] w-[126px] md:h-[62px] md:w-[135px]"
              src="./fragrance-foundation.png"
              alt=""
            />
          </div>
          <div className="p-6">
            <img
              className="h-[56pxpx] w-[126px] md:w-[135px]"
              src="./gq.png"
              alt=""
            />
          </div>
          <div className="p-6">
            <img
              className="h-[56pxpx] w-[126px] md:w-[135px]"
              src="./vogue.png"
              alt=""
            />
          </div>
          <div className="p-6">
            <img
              className="h-[56pxpx] w-[126px] md:w-[135px]"
              src="./well.png"
              alt=""
            />
          </div>
        </div>

        <div
          id="oil-image"
          className="overflow-hidden h-[574px]  lg:h-[484px] relative flex flex-col justify-end items-center "
        >
          <img
            className=" ease-in-out object-cover h-full w-full transition duration-500 transform hover:scale-105"
            src={"./images/oil-image.jpeg"}
            alt=""
          />
          <Link
            to="/products"
            className="absolute z-30 mb-8 hover:bg-gold hover:text-white transition duration-300 bg-white text-sm text-black p-2 pl-10 pr-10 rounded-full"
          >
            Shop Now
          </Link>
        </div>

        <div
          id="gift-image"
          className="overflow-hidden h-[574px] relative flex flex-col justify-end items-center border-y-[1px] border-black"
        >
          <img
            className="ease-in-out object-cover h-full w-full transition duration-500 transform hover:scale-105"
            src={"./images/giftsets.png"}
            alt=""
          />
          <Link
            to="/products"
            className="absolute z-30 mb-8 hover:bg-gold hover:text-white transition duration-300 bg-white text-sm text-black p-2 pl-10 pr-10 rounded-full"
          >
            Shop Now
          </Link>
        </div>
        <div className="flex flex-row align-middle justify-center">
        <ProductCarousel></ProductCarousel>
        </div>
      </div>
    </>
  );
};

export default Carousel;
