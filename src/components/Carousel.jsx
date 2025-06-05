import { useState } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
   {
      id: 1,
      content: (
        <div className="h-full items-center bg-cover bg-center" 
             style={{backgroundImage: "url('./src/assets/images/carausal1.gif')"}}>
          <h2 className="text-white  mb-8 text-2xl md:text-3xl item1">
            <span className="carousal1">
              Welcome To ADRS Technosoft
            </span><br />
            <span id='inn'>Innovation Begins Here..</span>
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
        <div className="h-full flex flex-col justify-center items-center bg-cover bg-center" 
             style={{backgroundImage: "url('./src/assets/images/carausal4.webp')"}}>
          <h2 className="text-white text-center mb-8 text-2xl md:text-3xl">
            You Want to become a 
            <span className="text-green-500 px-4 py-2 bg-white rounded-full font-bold ml-2">
              Software Engineer?
            </span>
          </h2>
          <a href="/register">
            <button className="bg-black text-white px-6 py-2 rounded mt-8 hover:bg-gray-800 transition">
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
    <div className="relative w-full h-[400px] overflow-hidden">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
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
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        &lt;
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        &gt;
      </button>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;