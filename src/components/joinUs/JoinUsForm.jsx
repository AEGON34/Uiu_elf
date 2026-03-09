import { Slide } from 'react-awesome-reveal';

const JoinUsForm = ({ 
  formData, 
  handleChange, 
  handleSubmit, 
  departments, 
  skillsOptions 
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Membership Application</h2>
            <p className="text-gray-600">
              Fill out the form below to apply for UIUELF membership.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b">Personal Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name<span className='text-lg text-red-500'>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-2">
                    Student ID<span className='text-lg text-red-500'>*</span>
                  </label>
                  <input
                    type="text"
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent"
                    placeholder="011233XXXX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address<span className='text-lg text-red-500'>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent"
                    placeholder="your.email@uiu.ac.bd"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number<span className='text-lg text-red-500'>*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent"
                    placeholder="8801XXXXXXXXX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                    Gender<span className='text-lg text-red-500'>*</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent bg-white"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700 mb-2">
                    Blood Group<span className='text-lg text-red-500'>*</span>
                  </label>
                  <select
                    id="bloodGroup"
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent bg-white"
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="presentAddress" className="block text-sm font-medium text-gray-700 mb-2">
                    Present Address<span className='text-lg text-red-500'>*</span>
                  </label>
                  <input
                    type="text"
                    id="presentAddress"
                    name="presentAddress"
                    value={formData.presentAddress}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent"
                    placeholder="House, Road, Area, City"
                  />
                </div>
                <div>
                  <label htmlFor="facebookProfile" className="block text-sm font-medium text-gray-700 mb-2">
                    Facebook Profile Link<span className='text-lg text-red-500'>*</span>
                  </label>
                  <input
                    type="url"
                    id="facebookProfile"
                    name="facebookProfile"
                    value={formData.facebookProfile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent"
                    placeholder="https://facebook.com/username"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div>
                  <label htmlFor="tShirtSize" className="block text-sm font-medium text-gray-700 mb-2 h-6">
                    T-Shirt Size<span className='text-lg text-red-500'>*</span>
                  </label>
                  <select
                    id="tShirtSize"
                    name="tShirtSize"
                    value={formData.tShirtSize}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent bg-white h-50px"
                  >
                    <option value="">Select Size</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    <option value="XXXL">XXXL</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-2 h-6">
                    Photo Submission (Optional)
                  </label>
                  <input
                     type="file"
                     id="photo"
                     name="photo"
                     accept="image/*"
                     onChange={handleChange}
                     className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent bg-white file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#ec4622]/10 file:text-[#ec4622] hover:file:bg-[#ec4622]/20 h-50px"
                  />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b">Academic Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                    Department<span className='text-lg text-red-500'>*</span>
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent bg-white"
                  >
                    <option value="">Select your department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Trimester / Semester<span className='text-lg text-red-500'>*</span>
                  </label>
                  <select
                    id="semester"
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent bg-white"
                  >
                    <option value="">Select Trimester / Semester</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((sem) => (
                      <option key={sem} value={sem}>Trimester {sem}</option>
                    ))}
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                      <option key={`semester-${sem}`} value={`Semester ${sem}`}>Semester {sem}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b">Skills & Interests</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select your skills and interests<span className='text-lg text-red-500'>*</span>
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {skillsOptions.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <input
                        type="checkbox"
                        id={skill}
                        name="skills"
                        value={skill}
                        checked={formData.skills.includes(skill)}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#ec4622] border-gray-300 rounded focus:ring-[#ec4622] cursor-pointer"
                      />
                      <label htmlFor={skill} className="ml-2 text-sm text-gray-700 cursor-pointer">
                        {skill}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b">Additional Information</h3>
              
              <div>
                <label htmlFor="whyJoin" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join UIUELF?<span className='text-lg text-red-500'>*</span>
                </label>
                <textarea
                  id="whyJoin"
                  name="whyJoin"
                  value={formData.whyJoin}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent resize-none"
                  placeholder="Tell us about your motivation to join..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Relevant Experience (Optional)
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent resize-none"
                  placeholder="Any previous experience in debates, public speaking, or similar activities..."
                ></textarea>
              </div>
            </div>

            {/* Payment Information */}
            <div className="space-y-6">
              <div className="pb-2 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Payment Information</h3>
                <p className="text-sm mt-1 font-medium text-[#ec4622]">Please pay 500 taka only (one time).</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Method<span className='text-lg text-red-500'>*</span>
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent bg-white"
                  >
                    <option value="">Select Payment Method</option>
                    <option value="Cash">Cash</option>
                    <option value="bKash">bKash - 01778809855</option>
                    <option value="Nagad">Nagad - 01778809855</option>
                    <option value="Rocket">Rocket - 01778809855</option>
                  </select>
                </div>

                {formData.paymentMethod && formData.paymentMethod !== 'Cash' && (
                  <div>
                    <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700 mb-2">
                      Transaction ID<span className='text-lg text-red-500'>*</span>
                    </label>
                    <input
                      type="text"
                      id="transactionId"
                      name="transactionId"
                      value={formData.transactionId}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent"
                      placeholder="Enter your transaction ID"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Connect with Us */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b">Connect with Us</h3>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-4">
                <p className="text-gray-700 mb-4 text-sm">
                  Please join our official channels to stay updated:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <a href="https://www.facebook.com/UIUELF" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium underline">
                        UIUELF Facebook Page
                      </a>
                  </li>
                  <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <a href="https://www.facebook.com/groups/775710351288925" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium underline">
                        UIUELF Facebook Group
                      </a>
                  </li>
                  <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <a href={import.meta.env.VITE_MESSENGER_GROUP_LINK} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium underline">
                        Messenger Group
                      </a>
                  </li>
                </ul>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Have you followed our Facebook page and joined the Messenger group for further updates?<span className='text-lg text-red-500'>*</span>
                  </label>
                  <div className="flex space-x-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="socialsYes"
                        name="socialsJoined"
                        value="Yes"
                        onChange={handleChange}
                        required
                        checked={formData.socialsJoined === "Yes"}
                        className="w-4 h-4 text-[#ec4622] border-gray-300 focus:ring-[#ec4622] cursor-pointer"
                      />
                      <label htmlFor="socialsYes" className="ml-2 text-sm text-gray-700 cursor-pointer">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="socialsNo"
                        name="socialsJoined"
                        value="No"
                        onChange={handleChange}
                        required
                        checked={formData.socialsJoined === "No"}
                        className="w-4 h-4 text-[#ec4622] border-gray-300 focus:ring-[#ec4622] cursor-pointer"
                      />
                      <label htmlFor="socialsNo" className="ml-2 text-sm text-gray-700 cursor-pointer">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 w-4 h-4 text-[#ec4622] border-gray-300 rounded focus:ring-[#ec4622]"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to actively participate in UIUELF activities and uphold the values of the forum.<span className='text-lg text-red-500'>*</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-[#ec4622] text-white rounded-xl font-semibold cursor-pointer hover:bg-[#d13d1c] transition-all duration-200"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinUsForm;
