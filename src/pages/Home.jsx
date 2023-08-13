import Carousel from "../components/Carousel";
import image1 from "../assets/images/table.png"
import image2 from "../assets/images/green-background.png"
import ProductCarousel from "../components/ProductCarousel"


function HomePage() {
const images = [
  image1, image2
]
  return (
    <div className="bg-gray-100 h-full flex flex-col items-center">
      <Carousel images={images} />
<ProductCarousel></ProductCarousel>
     <div className="flex flex-col sm:flex-row lg:gap-[230px] sm:items-center justify-center gap-2 bg-neutral-200 p-5 w-full h-[200px]">
      <p className="text-xl md:font-light md:text-3xl sm:w-[300px] md:w-[450px] font-[quicksand] w-[240px]">
        EXPLORE OUR LUXURY PERFUME COLLECTIONS
      </p>
      <p className="font-thin text-sm sm:w-[350px] md:w-[400px] md:text-lg">
      Experiencing our fragrances just got easier! Try our scents from our new collection.
      </p>
      </div> 
    </div>
  );
}

export default HomePage;
