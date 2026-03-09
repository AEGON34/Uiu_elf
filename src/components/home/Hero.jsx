import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import img1 from '../../assets/hero/img-1.jpeg';
import img2 from '../../assets/hero/img-2.jpg';
import img3 from '../../assets/hero/img-3.jpg';

const heroImages = [img1, img2, img3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [text] = useTypewriter({
    words: ['Break Fear and Be Confident'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 3000,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4622' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#ec4622]/20 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fadeInUp">
              <span className="inline-block px-4 py-2 bg-[#ec4622]/20 text-[#ec4622] rounded-full text-sm font-medium mb-6">
                Welcome to UIU English Language Forum
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight h-20 md:h-24 lg:h-32">
                {(() => {
                   const prefix = 'Break Fear and Be ';
                   // If text is shorter than prefix, we are typing the prefix (white)
                   // If text is longer than prefix, we have prefix (white) + suffix (orange)
                   
                   if (text.length <= prefix.length) {
                       return <span className="text-white">{text}</span>;
                   } else {
                       return (
                           <>
                               <span className="text-white">{prefix}</span>
                               <span className="text-[#ec4622]">{text.substring(prefix.length)}</span>
                           </>
                       );
                   }
                 })()}
                <span className="text-[#ec4622]">
                  <Cursor cursorStyle='_' />
                </span>
              </h1>
            </div>

            <p className="animate-fadeInUp-delay text-lg text-gray-300 leading-relaxed max-w-lg">
              UIU English Language Forum consists of the students of UIU who are eager to improve their
              English language proficiency. Not only English proficiency but also work with students career development.
            </p>

            <div className="animate-fadeInUp-delay-2 flex flex-col sm:flex-row gap-4">
              <Link
                to="/join"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#ec4622] text-white rounded-lg font-semibold hover:bg-[#d13d1c] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Join Us Today
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Explore Events
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 text-center border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-[#ec4622]">12+</div>
                <div className="text-sm text-gray-400">Years Active</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#ec4622]">300+</div>
                <div className="text-sm text-gray-400">Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#ec4622]">100+</div>
                <div className="text-sm text-gray-400">Events</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="">
            <div className="relative h-125 w-full">
              <div className="absolute -inset-4 bg-[#ec4622]/20 rounded-3xl blur-3xl"></div>
              {heroImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`UIUELF Community ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
