import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is UIU English Language Forum (UIUELF)?',
      answer: 'UIUELF is a premier student wing under DCCSA (Directorate of Career Counselling & Student Affairs) at United International University dedicated to bridging the gap between academic learning and professional communication. Established in September 2013, we focus on developing English proficiency, public speaking skills, and corporate communication abilities through seminars, workshops, competitions, and study circles.',
    },
    {
      question: 'What is the English Edge program?',
      answer: 'English Edge is our flagship skill development initiative—a comprehensive training module designed to take students from basic proficiency to advanced professional communication. It covers Public Speaking, Corporate Grooming, Vocabulary Building, and Creative Writing through intensive workshops led by industry experts.',
    },
    {
      question: 'Who can join UIUELF?',
      answer: 'All UIU students, regardless of their department or academic year, are welcome to join UIUELF. We are open to anyone passionate about improving their English communication skills and building professional confidence.',
    },
    {
      question: 'How do I register or join the forum?',
      answer: 'You can register through our "Join Us" page on this website. Fill out the registration form with your basic information, and our team will get in touch with you shortly. Alternatively, you can contact us directly via email at elf@dccsa.uiu.ac.bd or reach out to any core committee member.',
    },
    {
      question: 'What types of events does UIUELF organize?',
      answer: 'We organize a diverse range of events including seminars, interactive workshops, competitions (like Presentation Champs), study circles, webinars, networking sessions, career talks, and social gatherings. Our events focus on skill development, career preparation, and community building.',
    },
    {
      question: 'Are there any membership fees?',
      answer: 'UIUELF membership registration fee is 500 TK only—a onetime payment. This covers your membership benefits, access to exclusive events, and participation in our skill development programs. The fee goes toward organizing high-quality workshops, seminars, and activities. Details about specific events are provided at registration.',
    },
    {
      question: 'How often are events organized?',
      answer: 'We organize events throughout the academic year, typically multiple times per month. The frequency may vary based on the semester schedule and specific initiatives. Check our events page regularly for upcoming sessions and workshops.',
    },
    {
      question: 'Can I participate in events even if I\'m new to the club?',
      answer: 'Absolutely! All our events are open to both members and non-members. Whether you\'re a new member or just curious about UIUELF, you\'re welcome to attend any public event. It\'s a great way to experience the club culture and connect with other students.',
    },
    {
      question: 'What is the motto of UIUELF?',
      answer: '"Break fear and be confident" is our guiding motto. We believe that everyone has the potential to become an excellent communicator. Our mission is to help students overcome the fear of public speaking and build unshakeable confidence in professional settings.',
    },
    {
      question: 'How can I get in touch with the club?',
      answer: 'You can contact us through our website\'s contact form, email us at elf@dccsa.uiu.ac.bd, or reach out to any core committee member. We\'re also active on social media platforms including Facebook and Instagram. We typically respond within 24-48 hours.',
    },
    {
      question: 'Do you offer one-on-one coaching or mentoring?',
      answer: 'Yes! We arrange comprehensive skill development workshops in both one-to-one and group formats. Our mentoring programs include personalized coaching sessions and group conversation circles led by experienced members and industry professionals. Whether you prefer individual guidance or interactive group learning, we have options tailored to your needs. Contact us to discuss which format works best for you.',
    },
    {
      question: 'What opportunities are available for career development?',
      answer: 'We organize career talks, networking sessions, CV writing workshops, interview preparation seminars, and connect members with industry partners like Grameenphone, BRAC Bank, Augmedix, and IDP Education. These opportunities help students prepare for internships and full-time positions.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#ec4622] font-medium">Have Questions?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about UIUELF, our programs, and how to get involved.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-start justify-between gap-4 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-left font-semibold text-gray-900 text-lg">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`shrink-0 text-[#ec4622] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 py-5 bg-linear-to-r from-gray-50 to-gray-100 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Didn't find your answer?
          </h3>
          <p className="text-gray-600 mb-6">
            Reach out to us directly and our team will be happy to help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#ec4622] text-white font-semibold rounded-xl hover:bg-[#d13d1c] transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
