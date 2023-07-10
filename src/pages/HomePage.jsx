import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel";
import image1 from "../assets/images/image-1.jpeg"
import image2 from "../assets/images/image-2.jpg"
import ProductCarousel from "../components/ProductCarousel";

function HomePage() {
const images = [
  image1, image2
]
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center">
      <Navbar></Navbar>
      <Carousel images={images} />
      <ProductCarousel></ProductCarousel>
    </div>
  );
}

export default HomePage;
