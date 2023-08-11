import Carousel from "../components/Carousel";
import Footer from "../components/footer";
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
     <div className="flex flex-col gap-3 bg-gray-200 p-5 w-full h-[180px]">
      <p className="text-xl w-[240px]">
        EXPLORE OUR LUXURY PERFUME COLLECTIONS
      </p>
      <p>
      Experiencing our fragrances just got easier! Try our scents from our new collection.
      </p>
      </div> 
    </div>
  );
}

export default HomePage;
