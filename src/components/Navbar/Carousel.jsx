import { useState, useEffect } from "react";

const Carousel = ( {images} ) => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [currentImage, images.length])

  return (
    <div className="relative">
      <img src={images[currentImage]} alt="carousel" className="w-full max-h-150 h-auto object-cover" />
    </div>
  )
}

export default Carousel;