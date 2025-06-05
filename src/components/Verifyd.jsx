const VerifyD = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section with Image and Overlay Text */}
      <div className="relative w-full h-64 sm:h-80 md:h-[400px] overflow-hidden">
        <img
          src="https://img.freepik.com/free-vector/gradient-futuristic-cyber-background_23-2149116407.jpg?t=st=1731678438~exp=1731682038~hmac=235dc38099cbdff2717ef9cb29f46b38672380a296e9d69360b1b2c3b8b5bec5&w=1800"
          alt="Verification Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
            Vocational Training Certificate Verification
          </h2>
        </div>
      </div>

      {/* Verification Form Section */}
      <div className="max-w-xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Verify Certificate</h1>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              name="registration"
              placeholder="Enter your registered number"
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyD;
