import { useState, useEffect } from 'react';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    role: '',
    resume: null
  });

  const [fadeIn, setFadeIn] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Phone number validation
    if (!/^\d{10}$/.test(formData.number)) {
      setStatus({ type: 'error', message: 'Please enter a valid 10-digit mobile number.' });
      return;
    }

    // Dummy submission simulation (e.g., API call)
    try {
      console.log('Form Submitted:', formData);

      // Reset form
      setFormData({
        name: '',
        number: '',
        email: '',
        role: '',
        resume: null
      });

      // Show success
      setStatus({ type: 'success', message: 'Application submitted successfully!' });

      // Remove message after 5 seconds
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    } catch (error) {
      setStatus({ type: 'error', message: 'Submission failed. Please try again later.' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-white to-pink-100 flex items-center justify-center px-4 py-10">
      <div
        className={`w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-8 sm:p-10 transform transition-all duration-700 ${
          fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-8 tracking-tight">
          Join Our Team
        </h2>

        {status.message && (
          <div
            className={`mb-6 px-4 py-3 rounded-lg text-sm font-medium ${
              status.type === 'success'
                ? 'bg-green-100 text-green-800 border border-green-300'
                : 'bg-red-100 text-red-800 border border-red-300'
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number</label>
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength="10"
              inputMode="numeric"
              title="Enter a valid 10-digit mobile number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter 10-digit mobile number"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Role Dropdown */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Role Applied For</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            >
              <option value="">Select a role</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="QA Tester">QA Tester</option>
              <option value="Project Manager">Project Manager</option>
              <option value="Intern">Intern</option>
            </select>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Upload Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              required
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105 shadow-lg"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;
