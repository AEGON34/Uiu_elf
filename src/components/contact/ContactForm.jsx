import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with environment variables
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          Swal.fire({
            title: 'Message Sent!',
            text: 'Thank you for your message! We will get back to you soon.',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#ec4622',
          }).then(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
          });
        },
        () => {
          Swal.fire({
            title: 'Error!',
            text: 'Something went wrong. Please check your connection and try again.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#ec4622',
          });
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
        <p className="text-gray-600 mb-8">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name<span className='text-lg text-red-500'>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent transition-all"
                placeholder="Abdur Rahman"
              />
            </div>
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
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent transition-all"
                placeholder="rahman@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject<span className='text-lg text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent transition-all"
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message<span className='text-lg text-red-500'>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent transition-all resize-none"
              placeholder="Tell us more about your inquiry..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-4 bg-[#ec4622] text-white rounded-xl font-semibold hover:bg-[#d13d1c] transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
