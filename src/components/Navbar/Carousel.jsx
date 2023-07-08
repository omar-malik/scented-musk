import { useState, useEffect } from "react";
import oilimage from "../../assets/oil-image.jpeg"
import giftimage from "../../assets/giftsets.png"

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
            <a
              href=""
              className="hover:bg-gold hover:text-white transition duration-200 bg-white text-sm text-black p-2 pl-10 pr-10 rounded-full"
            >
              Shop Now
            </a>
          </div>
        </div>

        <div className=" text-gray-400 text-[40px]">
          THE SCENT COLUMN CQ ROGUE WELL
        </div>

        <div id="oil-image" className="overflow-hidden  relative flex flex-col justify-end items-center ">
          <img className=" ease-in-out transition duration-500 transform hover:scale-105" src={oilimage} alt="" />
          <a
              href=""
              className="absolute z-30 mb-8 hover:bg-gold hover:text-white transition duration-200 bg-white text-sm text-black p-2 pl-10 pr-10 rounded-full"
            >
              Shop Now
            </a>
        </div>

        <div id="gift-image" className="overflow-hidden  relative flex flex-col justify-end items-center border-y-[1px] border-black">
          <img className="ease-in-out transition duration-500 transform hover:scale-105" src={giftimage} alt="" />
          <a
              href=""
              className="absolute z-30 mb-8 hover:bg-gold hover:text-white transition duration-200 bg-white text-sm text-black p-2 pl-10 pr-10 rounded-full"
            >
              Shop Now
            </a>
        </div>

      </div>
    </>
  );
};

export default Carousel;
