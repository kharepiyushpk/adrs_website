import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      image: "https://www.bluehost.com/blog/wp-content/uploads/2023/05/PPC-Marketing.gif",
      title: "Computer Science/IT Training",
      description: "Explore our comprehensive CS/IT training programs."
    },
    {
      id: 2,
      image: "https://i.pinimg.com/originals/be/06/26/be06266094d4394b5af1c5f00b0ea1dd.gif",
      title: "Social Media",
      description: "Gain hands-on experience in Civil, Mechanical, and Interior Design."
    },
    {
      id: 3,
      image: "https://i.gifer.com/embedded/download/RjSK.gif",
      title: "Graphic Designing",
      description: "Skill up for a brighter future with our practical vocational training programs."
    },
    {
      id: 4,
      image: "https://anishadigital.com/wp-content/uploads/2024/03/anishadigital1.gif",
      title: "Digital Marketing Training",
      description: "Explore our comprehensive CS/IT training programs."
    }
  ];

  return (
    <div className="py-16 bg-[#243642]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">OUR SERVICES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to="/contact" 
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;