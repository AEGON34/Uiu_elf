import { useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import heroImg from '../assets/hero/img-1.jpeg';
import advisorypanel from '../data/advisordata';
import { Mail, Facebook, Linkedin, Quote, Briefcase } from 'lucide-react';

const AdvisoryCard = ({ advisor, index }) => {
  const isEven = index % 2 === 0;

  const imageBlock = (
    <div className="flex shrink-0 items-center justify-center md:w-56">
      {advisor.image ? (
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-sky-800/60 shadow-[0_0_40px_rgba(56,189,248,0.18)] bg-[#0d1525]">
          <img
            src={advisor.image}
            alt={advisor.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
      ) : (
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#111c2e] ring-4 ring-sky-800/60 shadow-[0_0_40px_rgba(56,189,248,0.18)] flex items-center justify-center">
          <span className="text-5xl font-bold text-white/20">{advisor.name.charAt(0)}</span>
        </div>
      )}
    </div>
  );

  const contentBlock = (
    <div className={`flex-1 flex flex-col ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} items-center text-center`}>
      <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight mb-1">
        {advisor.name}
      </h3>
      <p className="text-sky-400 font-bold text-xs uppercase tracking-[0.18em] mb-2">
        {advisor.position}
      </p>
      <div className={`flex items-center gap-1.5 text-white/35 text-xs mb-5 ${isEven ? '' : 'md:flex-row-reverse'}`}>
        <Briefcase size={11} className="shrink-0" />
        <span>{advisor.worksAt}</span>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 mb-5" />

      {/* Quote */}
      {advisor.quote && (
        <div className={`mb-6 flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'} items-center`}>
          <Quote size={22} className="text-[#2d4270] mb-2" fill="currentColor" />
          <p className="text-gray-300/80 text-sm italic leading-relaxed max-w-sm">
            &ldquo;{advisor.quote}&rdquo;
          </p>
        </div>
      )}

      {/* Social buttons */}
      {(advisor.email || advisor.facebook || advisor.linkedin) && (
        <div className="flex gap-2.5">
          {advisor.email && (
            <a
              href={`mailto:${advisor.email}`}
              className="w-9 h-9 rounded-lg bg-[#16213a] border border-white/10 hover:bg-sky-700 hover:border-sky-600 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={14} />
            </a>
          )}
          {advisor.facebook && (
            <a
              href={advisor.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#16213a] border border-white/10 hover:bg-blue-600 hover:border-blue-500 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              aria-label="Facebook"
            >
              <Facebook size={14} />
            </a>
          )}
          {advisor.linkedin && (
            <a
              href={advisor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#16213a] border border-white/10 hover:bg-blue-700 hover:border-blue-600 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
          )}
        </div>
      )}
    </div>
  );

  return (
    <Slide direction={isEven ? 'left' : 'right'} triggerOnce duration={650} delay={index * 60}>
      <div
        className="relative rounded-2xl border border-sky-900/40 overflow-hidden
                   bg-linear-to-br from-[#0d1525] via-[#0f1b30] to-[#0a1020]
                   shadow-[0_4px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(56,189,248,0.06)]
                   hover:shadow-[0_8px_48px_rgba(0,0,0,0.6),0_0_0_1px_rgba(56,189,248,0.2),0_0_60px_rgba(56,189,248,0.07)]
                   hover:-translate-y-1.5 transition-all duration-300 p-8 md:p-10"
      >
        {/* Ambient glow blob */}
        <div
          className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-64 h-64 rounded-full
                      bg-sky-500/5 blur-3xl pointer-events-none`}
        />
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-sky-500/30 to-transparent" />

        <div
          className={`relative flex flex-col items-center gap-8
                      md:flex-row md:items-center md:gap-12
                      ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
          {imageBlock}
          {contentBlock}
        </div>
      </div>
    </Slide>
  );
};

const AdvisoryPanel = () => {
  useEffect(() => {
    document.title = 'UIUELF | Advisory Panel';
  }, []);

  return (
    <div className="min-h-screen bg-[#080b10]">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-sky-900/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-900/10 rounded-full blur-3xl" />
      </div>
      <div className="relative flex items-center justify-center text-white text-center overflow-hidden min-h-[50vh]" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gray-900/75" />
        <div className="relative z-10 px-4 pt-32 pb-24">
          <p className="text-sm font-bold text-[#ec4622] uppercase tracking-widest mb-3">UIU English Language Forum</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">Advisory Panel</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">Experienced professionals guiding UIU ELF towards excellence.</p>
        </div>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-8 md:px-12 py-20 space-y-16">
        <Fade triggerOnce duration={800}>
          <div className="text-center mb-14">
            <span className="text-[#ec4622] font-bold uppercase tracking-widest text-xs">Meet Our Advisors</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">The Minds Behind Our Mission</h2>
            <p className="text-gray-400 mt-3 max-w-lg mx-auto text-sm">Our advisory panel comprises alumni and industry leaders providing strategic direction and mentorship to the forum.</p>
          </div>
        </Fade>
        {advisorypanel.map((advisor, index) => (
          <AdvisoryCard key={advisor.name} advisor={advisor} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AdvisoryPanel;
