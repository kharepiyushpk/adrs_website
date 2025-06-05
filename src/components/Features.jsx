const Features = () => {

  return (
    <div>
    <h3 className="item3 text-4xl font-bold mb-2" >What We Provide</h3>
    
    <div id="box-1">
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg box1">
      <h4 className="text-xl font-bold mb-4 ">Software Development</h4>
      
      <div className="flex space-x-4 mb-6">
        {/* <button
          // onClick={() => setActiveTab('development')}
          // className={`px-4 py-2 border-2 border-black rounded ${activeTab === 'development' ? 'bg-black text-white' : 'bg-white text-black'}`}
           className={`px-4 py-2 border-2 border-black rounded `}
        >
          Development
        </button> */}
      
      </div>
      
      <div className="space-y-4">
        
          <ul className="list-disc pl-5 space-y-2">
            <li>Client-Centric Approach</li>
            <li>Full-Stack Development
</li>
            <li>Rapid Prototyping & MVP Development</li>
            <li>Agile Development Process
</li>
            <li>Secure & Scalable Architecture
</li>
            <li>DevOps & CI/CD Pipelines
</li>
            <li>Automated Testing & QA
</li>
            <li>Experienced Development Team
</li>
            <li>Dedicated Project Management
</li>
            <li>Post-Launch Support & Maintenance</li>
          </ul>
        
      </div>
    </div>

    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg box2">
      <h4 className="text-xl font-bold mb-4">ADRS SPARK Training Program</h4>
      
      <div className="flex space-x-4 mb-6">
        {/* <button
          // onClick={() => setActiveTab('training')}
          className={`px-4 py-2 border-2 border-black rounded `}
        >
          Training
        </button> */}
      </div>
      
      <div className="space-y-4">
       
          <ul className="list-disc pl-5 space-y-2">
            <li>Real-World Project Experience
</li>
            <li>Structured Learning Environment
</li>
            <li>Mentorship by Industry Experts
</li>
            <li>Live Coding Sessions & Workshops
</li>
            <li>Hackathons & Challenges
</li>
            <li>Internship in Multiple Domains
</li>
            <li>Client Exposure (Where Applicable)</li>
            <li>Leadership Opportunities
</li>
            <li>Certification & Recognition
</li>
            <li>Pre-Placement Offer (PPO) for Top Performers
</li>

          </ul>
      </div>
    </div>
</div>
    </div>
  );
};

export default Features;