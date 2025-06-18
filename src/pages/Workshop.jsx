import {
  FaChalkboardTeacher,
  FaTools,
  FaCalendarAlt,
  FaLaptopCode,
} from "react-icons/fa";

const Workshop = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1603575448363-3e2b2b8f0053?auto=format&fit=crop&w=1920&q=80"
          alt="Workshop"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />clear
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Empowering Education with <span className="text-yellow-300">ADRS Spark</span> Workshops
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in delay-100">
            Hands-on workshops for schools and colleges on trending technologies. Offered in 3- or 5-day formats — fully customizable.
          </p>
        </div>
      </section>

      {/* Workshop Info Cards */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Workshop Formats",
            icon: <FaChalkboardTeacher className="text-indigo-600 text-4xl mb-4" />,
            content:
              "Choose from 3-day and 5-day models with live sessions, Q&A, and project-based learning.",
          },
          {
            title: "Tools & Technologies",
            icon: <FaTools className="text-blue-500 text-4xl mb-4" />,
            content:
              "We teach using AI tools, Web Stacks (MERN, Django), App Development, Cloud, and more.",
          },
          {
            title: "Courses We Offer",
            icon: <FaLaptopCode className="text-green-500 text-4xl mb-4" />,
            content: (
              <ul className="list-disc ml-5 text-left space-y-2">
                <li>Full-Stack Web Development</li>
                <li>Python & AI Basics</li>
                <li>Mobile App Development</li>
                <li>Arduino & IoT Projects</li>
                <li>Cybersecurity & Ethical Hacking</li>
              </ul>
            ),
          },
          {
            title: "Book a Workshop",
            icon: <FaCalendarAlt className="text-yellow-500 text-4xl mb-4" />,
            content:
              "Customize a workshop for your institution. Practical, interactive, and focused on skill-building.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-2xl transition duration-300 text-center"
          >
            {item.icon}
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-sm leading-relaxed">{item.content}</p>
          </div>
        ))}
      </section>

      {/* Why ADRS Spark Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1603570419052-6469d0c7471e?auto=format&fit=crop&w=800&q=80"
            alt="Tech Class"
            className="rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-indigo-700">Why Choose ADRS Spark?</h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li>✅ Experienced Industry Mentors</li>
              <li>✅ Hands-on Projects and Real-World Skills</li>
              <li>✅ Certification for Every Participant</li>
              <li>✅ Interactive, Practical, and Fun!</li>
              <li>✅ Affordable Pricing for Institutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-700 to-blue-700 text-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 animate-bounce">
          Let’s Spark Innovation Together!
        </h3>
        <p className="mb-8 max-w-2xl mx-auto text-lg">
          Reach out to us today and get a customized proposal for your institution.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition text-lg"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Workshop;
