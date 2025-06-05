import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact ADRS Solutions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help your business grow.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
        {/* Company Information */}
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About ADRS</h2>
            <p className="text-gray-600 mb-4">
              ADRS Solutions is a leading technology partner helping businesses transform through digital innovation. With offices in India and the US, we serve clients across multiple industries.
            </p>
            <p className="text-gray-600">
              Our expertise includes enterprise software development, cloud solutions, and digital transformation services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="text-blue-700 mt-1 mr-4">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Corporate Headquarters</h3>
                <p className="text-gray-600">Near katangi bypass karmeta </p>
                <p className="text-gray-600">Jabalpur, Madhya Pradesh 482004</p>
                <p className="text-gray-600">India</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-blue-700 mt-1 mr-4">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">+91 9201347033</p>
                <p className="text-gray-600">(Monday to Friday, 9am to 6pm IST)</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-blue-700 mt-1 mr-4">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">support@adrstechno.com</p>
                <p className="text-gray-600">info@adrstechno.com</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-700 hover:text-blue-900">
                  <FaLinkedin className="text-2xl" />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900">
                  <FaTwitter className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name *</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email *</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message *</label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            title="ADRS Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856372!2d73.91455641522172!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sADRS%20Techno%20City%20Jabalpur!5e0!3m2!1sen!2sin!4v1625553693000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;