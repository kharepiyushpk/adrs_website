const teamData = {
  founders: [
    {
      name: "Abhishek Dubey",
      role: "Founder",
      image: "../src/assets/images/abhishek.jpg"
    },
    {
      name: "Ritesh Saket",
      role: "Co-Founder",
      image: "../src/assets/images/ritesh.jpg"
    },
    {
      name: "Piyush Khare",
      role: "Co-Founder",
      image: "../src/assets/images/piyush2.jpg"
    }
  ],
  technical: [
    {
      name: "Siddhant Dubey",
      image: "../src/assets/images/Siddhant_jfif.webp"
    },
    {
      name: "Aman Vishwakarma",
      image: "../src/assets/images/amann viskarma_jfif.webp"
    },
    {
      name: "Aman Singh",
      image: "../src/assets/images/aman singh_jfif.webp"
    },
    {
      name: "Ishant Patel",
      image: "../src/assets/images/ishantpic.jpg"
    },
    {
      name: "Sapeksh Vishwakarma",
      image: "../src/assets/images/sapekshpic.jpg"
    }
  ]
};

const OurTeam = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header */}
      <div className="w-full h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('../src/assets/images/team_bg.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
          <h1 className="text-white text-4xl font-bold mb-4 underline">Our Team</h1>
          <p className="text-white text-md leading-relaxed">
            Revolutionize Your Operations with Our Technology,<br />
            and Experience a Fastest Solution Providing Team
          </p>
        </div>
      </div>

      {/* Founders Section */}
      <div className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold underline mb-10 text-blue-800">Meet the Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {teamData.founders.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden p-4">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Team Section */}
      <div className="py-16 px-4 text-center bg-gray-100">
        <h2 className="text-3xl font-bold underline mb-10 text-blue-800">Our Technical Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {teamData.technical.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden p-4">
              <img src={member.image} alt={member.name} className="w-full h-64 object-contain rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
