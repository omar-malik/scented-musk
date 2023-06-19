import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Navbar/Carousel";

function HomePage() {
  const images = [
    "https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2MTM1ODIxMjQyNjcyNjQ1/blu-atlas.jpg",
  ];
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center">
      <Navbar></Navbar>

      <Carousel images={images} />
    </div>
  );
}

export default HomePage;
