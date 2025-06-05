import { Link } from 'react-router-dom';

const Process = () => {
  const processes = [
    {
      id: 1,
      image: "./src/assets/images/ourwork1.gif",
      title: "Sketch",
      description: "A list of business process terms.",
      color: "bg-orange-500"
    },
    {
      id: 2,
      image: "./src/assets/images/ourwork2.gif",
      title: "Creative Process",
      description: "The definition of business process improvement with examples.",
      color: "bg-blue-500"
    },
    {
      id: 3,
      image: "./src/assets/images/ourwork3.gif",
      title: "Development",
      description: "An overview of the common types of productivity analysis with examples.",
      color: "bg-green-500"
    },
    {
      id: 4,
      image: "./src/assets/images/ourwork4.gif",
      title: "Final Product",
      description: "Work in any of the stages through which it passes in being made into a finished product.",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Working Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process) => (
            <div 
              key={process.id} 
              className="bg-white border-2 border-dashed border-black rounded-lg p-6 flex flex-col items-center hover:transform hover:-translate-y-2 transition-transform duration-300 shadow-md"
            >
              <div className="w-full h-40 mb-6">
                <img 
                  src={process.image} 
                  alt={process.title} 
                  className="w-full h-full object-contain filter grayscale sepia hue-rotate-180"
                />
              </div>
              <Link to="/contact" className="text-center group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;