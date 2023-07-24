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
      
    </div>
  );
}

export default HomePage;
