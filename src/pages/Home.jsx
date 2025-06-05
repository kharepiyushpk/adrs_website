import Carousel from '../components/Carousel';
import Features from '../components/Features';
import Internship from '../components/Internship';
import Servicesd from '../components/Servicesd';

const Home = () => {
  return (
    <div className="bg-[#243642] text-white">
      <Carousel />
      
      {/* Registration Banner */}
      {/* <div className="bg-black py-4 overflow-hidden">
        <div className="animate-[slide_17s_linear_infinite,color-change_1s_linear_infinite] whitespace-nowrap">
          <span className="text-xl font-bold mr-4">Registration Opens For the Vocational Training</span>
          <a href="/register" className="inline-block px-4 py-2 bg-[#243642] text-white border border-white rounded-sm ml-4">
            Register Now
          </a>
        </div>
      </div> */}
      
       <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Features />
          {/* <Skills /> */}
        </div>
      </div>
      
      {/* <Process /> */}
      <Servicesd />
      <Internship />
      
    </div>
  );
};

export default Home;