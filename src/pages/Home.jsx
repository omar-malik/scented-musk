import Carousel from "../components/Carousel";
import image1 from "../assets/images/table.png";
import image2 from "../assets/images/green-background.png";
import ProductCarousel from "../components/ProductCarousel";
import LowerCarousel from "../components/LowerCarousel";

function HomePage() {
  const images = [image1, image2];
  return (
    <div className="bg-gray-100 h-full flex flex-col items-center">
      <Carousel images={images} />
      <ProductCarousel></ProductCarousel>
      <LowerCarousel></LowerCarousel>
    </div>
  );
}

export default HomePage;
