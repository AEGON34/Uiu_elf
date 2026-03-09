import { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { eventsData } from '../data/eventsData';
import Swal from 'sweetalert2';

const Register = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventsData.find(e => e.id === parseInt(id));

  useEffect(() => {
    if (event) {
      document.title = `UIUELF | Register - ${event.title}`;
    } else {
      document.title = 'UIUELF | Event Not Found';
    }
  }, [event]);
  
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    email: '',
    phone: '',
    department: '',
    isMember: 'no',
    paymentMethod: '',
    transactionId: '',
    expectations: ''
  });
  const [loading, setLoading] = useState(false);

  const departments = [
    'Bachelor of Business Administration (BBA)',
    'BBA in Accounting and Information Systems (BBA in AIS)',
    'Bachelor of Science in Economics',
    'B.Sc. in Civil Engineering (CE)',
    'B.Sc. in Computer Science and Engineering (CSE)',
    'B.Sc. in Data Science (BSDS)',
    'B.Sc. in Electrical and Electronic Engineering (EEE)',
    'BSS in Environment and Development Studies program (BSSEDS)',
    'BSS in Media Studies and Journalism (MSJ)',
    'BA in English',
    'Bachelor of Pharmacy (B. Pharm.)',
    'Bachelor of Science in Biotechnology and Genetic Engineering (BSBGE)',
  ];

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800">Event not found</h2>
        <Link to="/events" className="mt-4 text-[#ec4622] hover:underline">
          Back to Events
        </Link>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Create form data
    const formDataObj = new FormData();
    formDataObj.append("EventId", event.id);
    formDataObj.append("EventTitle", event.title);
    formDataObj.append("FullName", formData.fullName);
    formDataObj.append("StudentId", formData.studentId);
    formDataObj.append("Email", formData.email);
    formDataObj.append("Phone", formData.phone);
    formDataObj.append("Department", formData.department);
    formDataObj.append("IsMember", formData.isMember);
    formDataObj.append("Expectations", formData.expectations);
    formDataObj.append("PaymentMethod", formData.paymentMethod);
    
    // Fix: Send "N/A" if transaction ID is missing or not applicable (e.g. Cash payment)
    const transactionIdValue = (formData.paymentMethod === 'Cash' || formData.paymentMethod === "New Recruit (Spring '26)") 
      ? "N/A" 
      : (formData.transactionId || "N/A");
      
    formDataObj.append("TransactionId", transactionIdValue);

    const scriptUrl = import.meta.env.VITE_EVENT_REGISTRATION_APP_SCRIPT_URL; 

    fetch(scriptUrl, {
      method: "POST",
      body: formDataObj,
    })
    .then((res) => res.text()) // Get text first
    .then((text) => {
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Invalid server response");
      }

      setLoading(false);
      
      if (data.status === "success") {
        Swal.fire({
          title: 'Registration Successful!',
          text: `Thank you for registering for ${event.title}. We have sent a confirmation email to ${formData.email}.`,
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: 'Browse More Events',
          cancelButtonText: 'Go to Home',
          confirmButtonColor: '#ec4622',
          cancelButtonColor: '#4b5563',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/events');
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            navigate('/');
          }
        });
        setFormData({
          fullName: '',
          studentId: '',
          email: '',
          phone: '',
          department: '',
          isMember: 'no',
          expectations: ''
        });

      } else if (data.status === "duplicate") {
        Swal.fire({
          title: 'Already Registered!',
          text: data.message, // "This email or phone number is already registered for this event."
          icon: 'warning',
          confirmButtonText: 'OK',
          confirmButtonColor: '#ec4622',
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: data.message || 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#ec4622',
        });
      }
    })
    .catch(() => {
      setLoading(false);
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please check your connection and try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#ec4622',
      });
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Fade triggerOnce duration={1500} cascade damping={0.2}>
        <Link to={`/events/${id}`} className="inline-flex items-center text-gray-600 hover:text-[#ec4622] mb-6 transition-colors">
        <ArrowLeft size={20} className="mr-2" />
        Back to Event Details
      </Link>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-[#ec4622] px-6 py-8 md:px-10">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Event Registration</h1>
          <p className="text-orange-100 text-lg">{event.title}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#ec4622] focus:border-[#ec4622] transition-colors"
                placeholder="Your full name"
              />
            </div>
            
            {/* Student ID */}
            <div>
              <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">
                Student ID<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                required
                value={formData.studentId}
                onChange={handleChange}
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#ec4622] focus:border-[#ec4622] transition-colors"
                placeholder="011261XXXX"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#ec4622] focus:border-[#ec4622] transition-colors"
                placeholder="Provide active email"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#ec4622] focus:border-[#ec4622] transition-colors"
                placeholder="8801XXXXXXXXX"
              />
            </div>
            
            {/* Department */}
             <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#ec4622] focus:border-[#ec4622] transition-colors bg-white"
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Member Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Are you a member of UIUELF?<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isMember"
                  value="yes"
                  checked={formData.isMember === 'yes'}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#ec4622] focus:ring-[#ec4622] border-gray-300"
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isMember"
                  value="no"
                  checked={formData.isMember === 'no'}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#ec4622] focus:ring-[#ec4622] border-gray-300"
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Payment Information */}
          {(event.details && (event.details.toLowerCase().includes('hadiya') || event.details.toLowerCase().includes('registration fee'))) && (
          <div className="space-y-6">
            <div className="pb-2 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Payment Information</h3>
                 <p className="text-sm mt-1 font-medium text-[#ec4622]">
                   Registration Fee Required. Please check event details for amount.
                 </p>
                 <p className="text-sm mt-1 font-medium text-green-600">
                   Note: New recruits (Spring '26) do not need to pay the registration fee.
                 </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-2 h-6">
                  Payment Method<span className='text-lg text-red-500'>*</span>
                </label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent bg-white h-50px"
                >
                  <option value="">Select Payment Method</option>
                  <option value="Cash">Cash</option>
                  <option value="bKash">bKash - 01778809855</option>
                  <option value="Nagad">Nagad - 01778809855</option>
                  <option value="Rocket">Rocket - 01778809855</option>
                  <option value="New Recruit (Spring '26)">I'm a new Recruit (Spring '26)</option>
                </select>
              </div>

              {formData.paymentMethod && formData.paymentMethod !== 'Cash' && formData.paymentMethod !== "New Recruit (Spring '26)" && (
                <div>
                  <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700 mb-2 h-6">
                    Transaction ID<span className='text-lg text-red-500'>*</span>
                  </label>
                  <input
                    type="text"
                    id="transactionId"
                    name="transactionId"
                    value={formData.transactionId}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent h-50px"
                    placeholder="Enter your transaction ID"
                  />
                </div>
              )}
            </div>
          </div>
          )}

          {/* Expectations */}
          <div>
            <label htmlFor="expectations" className="block text-sm font-medium text-gray-700 mb-1">
              What do you expect from this event?
            </label>
            <textarea
              id="expectations"
              name="expectations"
              rows={4}
              value={formData.expectations}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#ec4622] focus:border-[#ec4622] transition-colors"
              placeholder="Share your thoughts..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#ec4622] hover:bg-[#d13d1c] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex justify-center items-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin mr-2"></span>
                  Processing...
                </>
              ) : 'Complete Registration'}
            </button>
            <p className="mt-4 text-xs text-gray-500 text-center">
              By registering, you agree to receive email communications from UIUELF regarding this event.
            </p>
          </div>
        </form>
      </div>
      </Fade>
    </div>
  );
};

export default Register;
