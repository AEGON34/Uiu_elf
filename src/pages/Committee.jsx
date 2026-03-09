import { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import heroImg from '../assets/hero/img-1.jpeg';
import CoreCommittee from '../components/about/CoreCommittee';

const Committee = () => {
  useEffect(() => {
    document.title = 'UIUELF | Committee';
  }, []);

  return (
    <div className="min-h-screen bg-[#080b10]">
      {/* Dark Image Hero */}
      <div
        className="relative flex items-center justify-center text-white text-center overflow-hidden min-h-[50vh]"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900/70"></div>
        <div className="relative z-10 px-4 pt-32 pb-24">
          <p className="text-sm font-bold text-[#ec4622] uppercase tracking-widest mb-3">
            UIU English Language Forum
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
            Core Committee
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Meet the dedicated team leading UIU ELF forward.
          </p>
        </div>
      </div>

      <Fade triggerOnce duration={1500}>
        <CoreCommittee />
      </Fade>
    </div>
  );
};

export default Committee;
