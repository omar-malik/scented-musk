import { Link } from "react-router-dom";

const LowerCarousel = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[283px] bg-neutral-200">
        <div className="flex flex-col sm:flex-row lg:gap-[230px] sm:items-center justify-center gap-2 bg-neutral-200 p-5 w-full h-[200px]">
          <p className="text-xl md:font-light md:text-3xl sm:w-[300px] md:w-[450px] font-[quicksand] w-[240px]">
            EXPLORE OUR LUXURY PERFUME COLLECTIONS
          </p>
          <p className="font-thin text-sm sm:w-[350px] md:w-[400px] md:text-lg">
            Experiencing our fragrances just got easier! Try our scents from our
            new collection.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4 w-full relative bottom-[80px] items-center ">
        <div
          id="oil-image"
          className="overflow-hidden h-[574px] md:h-[280px] lg:h-[374px] max-w-[1170px] relative flex flex-col justify-end items-center"
        >
          <img
            className="ease-in-out object-cover object-left h-full w-full transition duration-[450ms] transform hover:scale-110"
            src={"./images/pink.png"}
            alt=""
          />
          <div className="flex flex-col p-5 gap-1 justify-center items-center absolute">
            <p className="text-black tracking-widest font-[quicksand]">
              MAKE IT SMELL LIKE HOME
            </p>
            <p className="text-black text-sm tracking-wide font-light">
              EXPERIENCE FRESHNESS
            </p>
            <Link
              to="/products"
              className="flex justify-center w-40 z-30 hover:bg-gold transition duration-300 bg-black text-sm text-white p-2 rounded-full"
            >
              SHOP NOW
            </Link>
          </div>
        </div>

        <div
          id="gift-image"
          className="overflow-hidden h-[574px] md:h-[280px] lg:-h-[374px] max-w-[1170px] relative flex flex-col justify-end items-center"
        >
          <img
            className="ease-in-out object-cover object-right h-full w-full transition duration-[450ms] transform hover:scale-110"
            src={"./images/oil-image.png"}
            alt=""
          />
          <div className="flex flex-col p-8 gap-1 justify-center items-center absolute">
            <p className="text-white tracking-widest font-[quicksand]">
              MAKE IT SMELL LIKE HOME
            </p>
            <p className="text-white text-sm tracking-wide font-light">
              EXPERIENCE FRESHNESS
            </p>
            <Link
              to="/products"
              className="flex justify-center w-40 z-30 hover:bg-gold hover:text-white transition duration-300 bg-white text-sm text-black p-2 rounded-full"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerCarousel;
