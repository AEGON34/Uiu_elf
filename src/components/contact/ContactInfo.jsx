import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['United International University', 'Madani Avenue, Badda', 'Dhaka-1212, Bangladesh'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+880 1707-546678'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['elf@dccsa.uiu.ac.bd'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Saturday - Sunday, Tuesday - Wednesday', '8:30 AM - 4:30 PM'],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/uiuelf', color: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/uiuelf', color: 'hover:bg-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/uiu-english-language-forum', color: 'hover:bg-blue-400' },
  ];

  return (
    <div className="lg:col-span-1 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
        <p className="text-gray-600 mb-8">
          Feel free to reach out to us through any of the following channels.
          We typically respond within 24-48 hours.
        </p>
      </div>

      {contactInfo.map((item, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-[#ec4622]/10 rounded-xl flex items-center justify-center shrink-0">
            <item.icon className="text-[#ec4622]" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
            {item.details.map((detail, i) => (
              <p key={i} className="text-gray-600 text-sm">{detail}</p>
            ))}
          </div>
        </div>
      ))}

      {/* Social Links */}
      <div className="pt-8 border-t border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 transition-all duration-200 ${social.color} hover:text-white`}
              aria-label={social.name}
            >
              <social.icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
