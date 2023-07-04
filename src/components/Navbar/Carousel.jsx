import { useState, useEffect } from "react";

const Carousel = ( {images} ) => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 10000)

    return () => {
      clearTimeout(timer)
    }
  }, [currentImage, images])

  return (
    <div className=" bg-white h-[574px] w-full">
      <img src={images[currentImage]} alt="carousel" className="w-full h-full object-cover" />
    </div>
  )
}

export default Carousel;