const Registration = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white rounded-lg shadow-lg">
      <form action="#" method="POST">
        <h2 className="text-2xl font-bold text-center mb-6">Registration Form</h2>

        {/* First Name */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border rounded px-3">
            <i className="fa-solid fa-user mr-2"></i>
            <input
              name="first_name"
              type="text"
              placeholder="First Name"
              className="w-full py-2 outline-none"
              required
            />
          </div>
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border rounded px-3">
            <i className="fa-solid fa-user mr-2"></i>
            <input
              name="last_name"
              type="text"
              placeholder="Last Name"
              className="w-full py-2 outline-none"
              required
            />
          </div>
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Gender <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            <label className="inline-flex items-center">
              <input type="radio" name="gender" value="Male" className="mr-2" required />
              Male
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="gender" value="Female" className="mr-2" required />
              Female
            </label>
          </div>
        </div>

        {/* DOB */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border rounded px-3">
            <i className="fa-solid fa-calendar mr-2"></i>
            <input
              name="dob"
              type="date"
              className="w-full py-2 outline-none"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            E-Mail <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border rounded px-3">
            <i className="fa-solid fa-envelope mr-2"></i>
            <input
              name="email"
              type="email"
              placeholder="E-Mail Address"
              className="w-full py-2 outline-none"
              required
            />
          </div>
        </div>

        {/* Parent's Number */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Parent&apos;s Number <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border rounded px-3">
            <i className="fa-solid fa-phone mr-2"></i>
            <input
              name="parents_contact"
              type="tel"
              placeholder="(+91)"
              className="w-full py-2 outline-none"
              required
            />
          </div>
        </div>

        {/* Student Number */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Student Number <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border rounded px-3">
            <i className="fa-solid fa-phone mr-2"></i>
            <input
              name="student_number"
              type="tel"
              placeholder="(+91)"
              className="w-full py-2 outline-none"
              required
            />
          </div>
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Permanent Address <span className="text-red-500">*</span>
          </label>
          <textarea
            name="address"
            rows="3"
            placeholder="Enter Address"
            className="w-full border rounded px-3 py-2 outline-none"
            required
          ></textarea>
        </div>

        {/* College/School/Company */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            College / School / Company <span className="text-red-500">*</span>
          </label>
          <input
            name="college_name"
            type="text"
            placeholder="Enter College"
            className="w-full border rounded px-3 py-2 outline-none"
            required
          />
        </div>

        {/* Qualification */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Qualification <span className="text-red-500">*</span>
          </label>
          <input
            name="qualification"
            type="text"
            placeholder="Enter Qualification"
            className="w-full border rounded px-3 py-2 outline-none"
            required
          />
        </div>

        {/* Course */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Course <span className="text-red-500">*</span>
          </label>
          <select
            name="course"
            className="w-full border rounded px-3 py-2 outline-none"
            required
          >
            <option>Choose Your Course</option>
            <optgroup label="Development">
              <option value="web development">Web Development</option>
              <option value="app development">App Development</option>
              <option value="software development">Software Development</option>
            </optgroup>
            <optgroup label="Internship">
              <option value="web development internship">Web Development</option>
              <option value="app development internship">App Development</option>
              <option value="mech internship">Mech.CAD / CAE</option>
              <option value="civil internship">Civil CAD / CAE</option>
            </optgroup>
            <optgroup label="Programming Languages">
              <option value="core java">Core Java</option>
              <option value="java development">Java Development</option>
              <option value="core php">Core PHP</option>
              <option value="laravel">Laravel</option>
              <option value="codeigniter">CodeIgniter</option>
              <option value="python">Python</option>
              <option value="django">Python with Django</option>
              <option value="ml">Python with Machine Learning</option>
            </optgroup>
          </select>
        </div>

        {/* Terms */}
        <div className="mb-6">
          <label className="inline-flex items-center">
            <input type="checkbox" name="terms" className="mr-2" required />
            I agree to the terms and conditions <span className="text-red-500">*</span>
          </label>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
