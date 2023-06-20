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
  }, [currentImage, images.length])

  return (
    <div className=" bg-white w-full">
      <img src={images[currentImage]} alt="carousel" className=" w-full h-[700px] object-cover" />
    </div>
  )
}

export default Carousel;