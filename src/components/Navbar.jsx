import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logos/ELF_W.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [peopleOpen, setPeopleOpen] = useState(false);
  const [mobilePeopleOpen, setMobilePeopleOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
    setPeopleOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setPeopleOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Committee', path: '/committee' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const peopleLinks = [
    { name: 'Committee', path: '/committee' },
    { name: 'Advisory Panel', path: '/advisory-panel' },
  ];

  const isPeopleActive = location.pathname === '/committee' || location.pathname === '/advisory-panel';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img className='w-12 h-12' src={logo} alt="UIU ELF Logo" />
            <span className="hidden lg:block text-3xl font-bold text-[#ec4622] tracking-tight">
              UIU <span className="text-gray-900 tracking-tight">English Language Forum</span>
            </span>
            <span className="lg:hidden text-3xl font-bold text-[#ec4622] tracking-tight">
              UIU<span className="text-gray-900">ELF</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <div className="flex items-center gap-1 cursor-pointer">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-md font-medium transition-colors duration-200 hover:text-[#ec4622] flex items-center gap-1 ${
                        isActive ? 'text-[#ec4622]' : 'text-gray-700'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                  {link.children && <ChevronDown size={16} className="text-gray-500 group-hover:text-[#ec4622]" />}
                </div>

                  {/* Dropdown */}
                {link.children ? (
                  <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top z-50">
                    <div className="bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden py-1">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.name}
                          to={child.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm hover:bg-[#ec4622]/10 hover:text-[#ec4622] transition-colors ${
                              isActive ? 'text-[#ec4622] bg-[#ec4622]/5 font-medium' : 'text-gray-600'
                            }`
                          }
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}

            {/* People Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setPeopleOpen((prev) => !prev)}
                className={`flex items-center gap-1 text-md font-medium transition-colors duration-200 hover:text-[#ec4622] ${
                  isPeopleActive ? 'text-[#ec4622]' : 'text-gray-700'
                }`}
              >
                Executive Body
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    peopleOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {peopleOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 animate-fade-in">
                  {peopleLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-[#ec4622] ${
                          isActive ? 'text-[#ec4622] bg-orange-50' : 'text-gray-700'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/join"
              className="bg-[#ec4622] text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-[#d13d1c] transition-colors duration-200"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-3 space-y-2 bg-gray-50 border-t">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.children ? (
                <>
                  <div className="px-4 py-2 text-sm font-medium text-gray-700 opacity-70">
                    {link.name}
                  </div>
                  <div className="pl-4 space-y-1 border-l-2 border-gray-200 ml-4">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.name}
                        to={child.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            isActive
                              ? 'bg-[#ec4622] text-white'
                              : 'text-gray-700 hover:bg-gray-200'
                          }`
                        }
                      >
                        {child.name}
                      </NavLink>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#ec4622] text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}

          {/* Mobile People Dropdown */}
          <div>
            <button
              onClick={() => setMobilePeopleOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isPeopleActive ? 'bg-[#ec4622] text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              People
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  mobilePeopleOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobilePeopleOpen && (
              <div className="ml-4 mt-1 space-y-1">
                {peopleLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => { setIsOpen(false); setMobilePeopleOpen(false); }}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive ? 'bg-[#ec4622] text-white' : 'text-gray-600 hover:bg-gray-200'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/join"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 bg-[#ec4622] text-white rounded-lg text-sm font-medium text-center hover:bg-[#d13d1c] transition-colors"
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
