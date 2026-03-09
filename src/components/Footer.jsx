import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Loader2,
} from "lucide-react";
import logo from '../assets/logos/ELF_W.png';

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Committee", path: "/committee" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Join Us", path: "/join" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/uiuelf" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/uiuelf" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/uiu-english-language-forum",
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_SUBSCRIPTION_APP_SCRIPT_URL;
    
    // Validate email
    const email = e.target.email.value;
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage({ type: 'error', text: "Please enter a valid email address." });
      setTimeout(() => setMessage(null), 3000);
      return;
    }

    setLoading(true);
    setMessage(null);

    const form = new FormData();
    form.append("Email", email);

    fetch(url, {
      method: "POST",
      body: form,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.text(); // Read as text first to avoid JSON parse errors
      })
      .then((text) => {
        let data;
        try {
          data = JSON.parse(text); // Try parsing JSON
        } catch {
          // If it's not JSON (old script version), handle gracefully
          if (text.includes("Added")) {
             // Fallback for old script version (though duplicates won't be caught)
             data = { status: "success", message: "Subscribed!" };
          } else {
             throw new Error("Invalid server response");
          }
        }

        setLoading(false);
        if (data.status === "success") {
          setMessage({ type: 'success', text: data.message });
          e.target.reset();
        } else if (data.status === "duplicate") {
          setMessage({ type: 'warning', text: data.message });
        } else {
          setMessage({ type: 'error', text: data.message || "Something went wrong." });
        }
        setTimeout(() => setMessage(null), 3000);
      })
      .catch(() => {
        setLoading(false);
        setMessage({ type: 'error', text: "An error occurred. Please check your connection." });
        setTimeout(() => setMessage(null), 3000);
      });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img className="w-16 h-16" src={logo} alt="UIU ELF Logo" />
              <span className="text-4xl font-bold text-[#ec4622] tracking-tight">
                UIU<span className="text-white">ELF</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              UIU English Language Forum - Empowering students to break fear and
              be confident through English language mastery and professional
              communication skills.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ec4622] transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#ec4622] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#ec4622] mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  United International University, Madani Avenue, Badda,
                  Dhaka-1212, Bangladesh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#ec4622] shrink-0" />
                <span className="text-gray-400 text-sm">+880 1707-546678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#ec4622] shrink-0" />
                <a
                  href="mailto:elf@dccsa.uiu.ac.bd"
                  className="text-gray-400 hover:text-[#ec4622] transition-colors text-sm"
                >
                  elf@dccsa.uiu.ac.bd
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get updates about our latest events and workshops.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                disabled={loading}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ec4622] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#ec4622] text-white py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-[#d13d1c] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
              {message && (
                <p
                  className={`text-xs mt-2 ${
                    message.type === "success"
                      ? "text-green-500"
                      : message.type === "warning"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {message.text}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Developers Section */}
        <div className="mt-12 pt-10 border-t border-gray-800 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#ec4622] font-semibold mb-2">
            Crafted with passion
          </p>
          <h3 className="text-xl font-bold text-white mb-1">
            Meet the <span className="text-[#ec4622]">Developers</span>
          </h3>
          <p className="text-gray-500 text-sm mb-5">
            The minds behind the UIU ELF platform.
          </p>
          <Link
            to="/developers"
            className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full text-sm font-semibold text-white border border-[#ec4622]/60 bg-[#ec4622]/10 hover:bg-[#ec4622] hover:border-[#ec4622] transition-all duration-300"
            style={{
              boxShadow: "0 0 14px 2px rgba(236,70,34,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 22px 6px rgba(236,70,34,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 14px 2px rgba(236,70,34,0.2)";
            }}
          >
            View Developers
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} UIU English Language Forum. All
              rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Established September 20, 2013 • United International University
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
