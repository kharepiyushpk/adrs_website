const Skills = () => {
  const skills = [
    { name: "Web Development", percentage: 97 },
    { name: "Android App Development", percentage: 95 },
    { name: "Training", percentage: 98 },
    { name: "Digital Marketing", percentage: 90 }
  ];

  return (
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
      <h4 className="text-xl font-bold mb-6">Our Skills</h4>
      
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-[#064066] to-white h-2.5 rounded-full border-2 border-blue-800 border-r-white"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;