import { Link } from 'react-router-dom';

const roles = [
  {
    title: "React.js Developer",
    description: "Work on modern UI components, integrate APIs, and deliver high-performance front-end applications.",
  },
  {
    title: "Node.js Backend Developer",
    description: "Build scalable backend services, manage databases, and ensure secure data handling.",
  },
  {
    title: "UI/UX Designer",
    description: "Design beautiful user experiences and prototypes that bring our products to life.",
  },
  {
    title: "Digital Marketing Executive",
    description: "Plan and execute marketing campaigns to promote our brand and attract clients.",
  }
];

const Career = () => {
  return (
    <div className="bg-gradient-to-br from-sky-100 to-blue-900 min-h-screen">
      <div className="bg-cover bg-center text-white py-24 px-6 text-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1603415526960-f7e0328f3654')` }}>
        <h1 className="text-4xl md:text-5xl font-bold animate-fadeInDown">Life at ADRS Technosoft</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto animate-fadeInUp">Where innovation meets collaboration — join a passionate team building next-gen software solutions.</p>
      </div>

      <section className="py-12 px-4 md:px-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Join Us?</h2>
        <ul className="text-gray-600 space-y-3 text-lg">
          <li>🌟 A creative and inclusive work environment</li>
          <li>🧠 Opportunities to grow & lead real projects</li>
          <li>🎯 Flexible work hours & hybrid model</li>
          <li>🏆 Recognition, rewards, and mentorship</li>
        </ul>
      </section>

      <section className="py-12 px-4 md:px-16 bg-white">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Open Roles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {roles.map((role, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm hover:shadow-xl transition-transform transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{role.title}</h3>
              <p className="text-gray-600 mb-4">{role.description}</p>
              <Link
                to="/career-form"
                className="inline-block mt-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Career;
