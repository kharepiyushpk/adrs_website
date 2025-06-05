const Features = () => {
  return (
    <div className="bg-gradient-to-br py-12 px-4 sm:px-6 lg:px-8 breadth">
      <div className="max-w-screen-x1 mx-auto w-full">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What We Provide
          </h3>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Premium solutions tailored to your business and learning needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 w-full">
          {/* Software Development Card */}
          <div className="bg-gradient-to-br from-white to-slate-100 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl breadth">
            <div className="p-5 sm:p-6 md:p-8 ">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 ">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">Software Development</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Custom solutions for your business needs</p>
                  </div>
                </div>
                {/* <div>
                  <button className="border-2 border-black rounded-md px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white transition-all">
                    Development
                  </button>
                </div> */}
              </div>

              <ul className="mt-6 space-y-3 text-gray-700">
                {[
                  "Our Charges are Minimum in the industry",
                  "No Hidden Charges",
                  "Industry Standard Software Development",
                  "Project Completed in Deadline",
                  "Client Friendly Approach",
                  "Customer Satisfaction",
                  "Committed to Long-term Relationships",
                  "No Quality Compromise",
                  "Flexibility in Payment",
                  "24/7 Customer Support"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <button className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Training Program Card */}
          <div className="bg-gradient-to-br from-white to-slate-100 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="p-5 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">ADRS SPARK Training Program</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Accelerate your career in tech</p>
                  </div>
                </div>
                {/* <div>
                  <button className="border-2 border-black rounded-md px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white transition-all">
                    Training
                  </button>
                </div> */}
              </div>

              <ul className="mt-6 space-y-3 text-gray-700">
                {[
                  "Hands-On Experience",
                  "Mentorship & Training",
                  "Skill Development",
                  "Weekly Evaluations & Feedback",
                  "Real Projects, Real Impact",
                  "Flexible Duration & Timings",
                  "Exposure to Industry Tools",
                  "Certificate of Completion",
                  "Customized Learning Paths",
                  "Pre-Placement Offer (PPO) Opportunity"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <button className="w-full py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-all shadow-md hover:shadow-lg">
                  Join Program
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;