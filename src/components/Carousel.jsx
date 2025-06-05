import { useState } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      content: (
        <div
          className="h-full w-full flex items-center justify-center bg-cover bg-center text-center px-4"
          style={{ backgroundImage: "url('./src/assets/images/carausal1.gif')" }}
        >
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
            <span className="block">Welcome To ADRS Technosoft</span>
            <span id="inn" className="block text-yellow-300 mt-2">Innovation Begins Here..</span>
          </h2>
        </div>
      )
    },
    {
      id: 2,
      image: "./src/assets/images/carausal2.png",
      alt: "Carousel Slide 2"
    },
    {
      id: 3,
      image: "./src/assets/images/carausal30.jpg",
      alt: "Carousel Slide 3"
    },
    {
      id: 4,
      content: (
        <div
          className="h-full w-full flex flex-col justify-center items-center text-center bg-cover bg-center px-4"
          style={{ backgroundImage: "url('./src/assets/images/carausal4.webp')" }}
        >
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
            You Want to become a
            <span className="block sm:inline text-green-500 px-4 py-1 bg-white rounded-full font-bold mt-2 sm:ml-2">
              Software Engineer?
            </span>
          </h2>
          <a href="/register">
            <button className="bg-black text-white px-4 sm:px-6 py-2 mt-6 rounded hover:bg-gray-800 transition">
              Click here
            </button>
          </a>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {slide.content ? (
              slide.content
            ) : (
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-75 transition"
        aria-label="Previous Slide"
      >
        &lt;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-75 transition"
        aria-label="Next Slide"
      >
        &gt;
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-gray-500'} transition`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
