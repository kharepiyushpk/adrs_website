import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import CountUp from "react-countup";
import {
  FaChalkboardTeacher,
  FaTools,
  FaCalendarAlt,
  FaLaptopCode,
  FaArrowUp,
  FaRobot,
  FaLightbulb,
  FaUserGraduate,
} from "react-icons/fa";

const ScrollTop = () => {
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 z-50"
      >
        <FaArrowUp />
      </button>
    )
  );
};

const Workshop = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 relative">
      {/* Particle Background */}
      <Particles
        className="absolute inset-0 -z-10"
        init={async (main) => {
          await loadFull(main);
        }}
        options={{
          particles: {
            number: { value: 60 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            links: { enable: true, color: "#ffffff", distance: 150 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
          },
          background: { color: "transparent" },
        }}
      />

      {/* Hero Section */}
      <section className="bg-[#203b45] text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Empowering Education with <span className="text-yellow-300">ADRS Spark</span> Workshops
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in delay-100">
            Hands-on workshops for schools and colleges on trending technologies. Offered in 3- or 5-day formats — fully customizable.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[{
          title: "Workshop Formats",
          icon: <FaChalkboardTeacher className="text-indigo-600 text-4xl mb-4" />,
          content: "Choose from 3-day and 5-day models with live sessions, Q&A, and project-based learning.",
          animation: "fade-up"
        }, {
          title: "Tools & Technologies",
          icon: <FaTools className="text-blue-500 text-4xl mb-4" />,
          content: "We teach using AI tools, Web Stacks (MERN, Django), App Development, Cloud, and more.",
          animation: "zoom-in"
        }, {
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
          animation: "flip-left"
        }, {
          title: "Book a Workshop",
          icon: <FaCalendarAlt className="text-yellow-500 text-4xl mb-4" />,
          content: "Customize a workshop for your institution. Practical, interactive, and focused on skill-building.",
          animation: "fade-up"
        }].map((item, idx) => (
          <div
            key={idx}
            data-aos={item.animation}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-2xl transform transition duration-300 text-center hover:scale-105"
          >
            {item.icon}
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-sm leading-relaxed">{item.content}</p>
          </div>
        ))}
      </section>

      {/* Why ADRS Spark */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src="images/work.avif"
            alt="Students Collaborating"
            className="rounded-xl shadow-md" data-aos="fade-right"
          />
          <div data-aos="fade-left">
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

      {/* Success Stories */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-8" data-aos="fade-up">Our Impact So Far</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[{
              icon: <FaUserGraduate className="text-5xl text-indigo-600 mx-auto mb-4" />,
              title: "Future Ready Skills",
              desc: "Participants leave our workshops with career-relevant skills."
            }, {
              icon: <FaRobot className="text-5xl text-green-500 mx-auto mb-4" />,
              title: "Tech Awareness",
              desc: "Our sessions expose students to emerging technologies."
            }, {
              icon: <FaLightbulb className="text-5xl text-yellow-500 mx-auto mb-4" />,
              title: "Innovation Mindset",
              desc: "We spark creativity and problem-solving among students."
            }].map((item, idx) => (
              <div key={idx} data-aos="zoom-in" className="bg-white p-6 rounded-xl shadow-md">
                {item.icon}
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[{ end: 50, label: "Institutions" }, { end: 1000, label: "Students Trained" }, { end: 20, label: "Technologies Covered" }].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md" data-aos="zoom-in">
              <h3 className="text-3xl font-bold text-indigo-700">
                <CountUp end={item.end} duration={3} />+
              </h3>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-[#203B45] text-white">
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

      <ScrollTop />
    </div>
  );
};

export default Workshop;
