const About = () => {
  return (
    <div className="bg-[#243642] text-white">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-[url('https://via.placeholder.com/1920x500')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
          <div className="flex justify-center">
            <a href="/" className="text-lg md:text-xl hover:underline">
              BUILD YOUR FUTURE WITH US
            </a>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Transforming the Digital Landscape
          <br />
          with ADRS Techno
        </h2>
        <div className="text-xl mb-4">
          <u>OUR MISSION</u>
        </div>
        <p className="text-xl">EMPOWERING THE FUTURE WITH US</p>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 pr-0 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              ADRS offers 5 areas of software development:
            </h2>
            <ul className="space-y-3 mb-6 text-[#629584]">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Mobile App Development
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Software Development
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Website Development
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                UI/UX Development
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Game development
              </li>
            </ul>
            <p className="text-[#629584]">
              ADRS Techno is your one-stop-shop for all your software
              development needs. We offer mobile app development, software
              development, chatbot development, UI/UX development, and Game
              development solutions. Our team of experienced developers will
              help you create the perfect software that is tailored to your
              specific needs. Contact us today to learn more about how we can
              help your business grow with our innovative software solutions.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src="https://img.freepik.com/free-photo/man-using-digital-tablet-psd-mockup-smart-technology_53876-110815.jpg"
              alt="Technology"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Operational Excellence Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 order-2 md:order-1 pl-0 md:pl-8 mt-8 md:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Operational Excellence
            </h2>
            <p className="text-[#629584]">
              At ADRS Techno, we are committed to delivering the highest level
              of operational excellence in our software technology services. Our
              team is passionate about finding innovative solutions to complex
              problems, and we believe that operational excellence is the key to
              achieving success, both for us and our clients. Contact us today
              to see how we can help your business thrive.
            </p>
          </div>
          <div className="w-full md:w-1/3 order-1 md:order-2">
            <img
              src="https://static.wixstatic.com/media/84770f_2cae65a0da354bc9b310bae52425c6d2~mv2.jpg"
              alt="Engineer"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Take Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-[#3d5c71] p-6 rounded-lg text-center hover:transform hover:-translate-y-2 transition-transform">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>
            <p className="text-[#629584] text-sm">
              We believe in giving our very best to our customers.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-[#3d5c71] p-6 rounded-lg text-center hover:transform hover:-translate-y-2 transition-transform">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <p className="text-[#629584] text-sm">
              We are an ethical organization with transperancy in our dealing
              and a forth right attitude. While you work with us, you can rest
              assured.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-[#3d5c71] p-6 rounded-lg text-center hover:transform hover:-translate-y-2 transition-transform">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
            </div>
            <p className="text-[#629584] text-sm">
              As a creative professional, you&apos;ll know only too well how
              important inspiration is for your work. That&apos;s whether you&apos;ve just
              made a cup.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-[#3d5c71] p-6 rounded-lg text-center hover:transform hover:-translate-y-2 transition-transform">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <p className="text-[#629584] text-sm">
              We believe that we can make a difference to your bussiness and we
              do.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-[#3d5c71] p-6 rounded-lg text-center hover:transform hover:-translate-y-2 transition-transform">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </div>
            <p className="text-[#629584] text-sm">
              Content is king. You&apos;ll hear that phrase over and over again when
              it comes ADRS Techno Private Limited. Get your content right, and
              you&apos;ve created
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-[#3d5c71] p-6 rounded-lg text-center hover:transform hover:-translate-y-2 transition-transform">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
                />
              </svg>
            </div>
            <p className="text-[#629584] text-sm">
              We provide 24 hr technical support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
