import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Github, Linkedin, Globe } from "lucide-react";
import heroImg from "../assets/hero/img-1.jpeg";
import Rejwan from "../assets/Dev/Rejwan.webp"
import Minhaj from "../assets/Dev/Minhaj.jpeg"
const developers = [
  {
    name: "Md. Minhajul Islam",
    role: "MERN Stack Developer",
    clubDesignation: "Co-Head, Organizing Department",
    clubDesignationDept: "Organizing",
    description:
      "Passionate about building beautiful and responsive user interfaces. Responsible for the design and frontend architecture of the UIU ELF website.",
    image: Minhaj, // replace with: import devImg from '../assets/...'
    socials: {
      github: "https://github.com/Minhajh2o",
      linkedin: "https://www.linkedin.com/in/minhajul-islam-h2o/",
      portfolio: "https://portfolio-minhajul-islam.netlify.app/#portfolio",
    },
  },
  {
    name: "MD Rejwan",
    role: "MERN Stack Developer",
    clubDesignation: "Senior Executive, Human Resource Department",
    clubDesignationDept: "HR",
    description:
      "Specialized in end-to-end web development, handling both client and server-side logic to ensure a seamless and performant experience.",
    image: Rejwan,
    socials: {
      github: "https://github.com/AEGON34",
      linkedin: "https://www.linkedin.com/in/md-rejwan-/",
      portfolio: "#",
    },
  },
];

const Developers = () => {
  useEffect(() => {
    document.title = "UIUELF | Developers";
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(160deg, #0a1628 0%, #0d2145 50%, #0a1628 100%)" }}>
      {/* Hero */}
      <div
        className="relative flex items-center justify-center text-white text-center overflow-hidden min-h-[50vh]"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/75" />
        <div className="relative z-10 px-4 pt-32 pb-24">
          <p className="text-sm font-bold text-[#ec4622] uppercase tracking-widest mb-3">
            UIU English Language Forum
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
            Our Developers
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            The minds behind the design and development of the UIU ELF platform.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <Fade triggerOnce duration={1200}>
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section label */}
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.35em] text-[#ec4622] font-semibold mb-2">
                Crafted with passion
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Meet the{" "}
                <span className="text-[#ec4622]">Team</span>
              </h2>
              <div className="mt-3 mx-auto w-20 h-0.5 bg-gradient-to-r from-transparent via-[#ec4622] to-transparent" />
            </div>

            {/* Dev Cards */}
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-10">
              {developers.map((dev, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col items-center text-center w-full sm:w-[340px] rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3"
                  style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 4px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
                    transition: "box-shadow 0.4s ease, transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 40px 12px rgba(236,70,34,0.45), 0 0 90px 30px rgba(236,70,34,0.20), inset 0 1px 0 rgba(255,255,255,0.12)";
                    e.currentTarget.style.border = "1px solid rgba(236,70,34,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)";
                    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.12)";
                  }}
                >
                  {/* Top shimmer line */}
                  <div className="absolute top-0 left-12 right-12 h-px rounded-full"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(236,70,34,0.7), transparent)" }} />

                  {/* Avatar ring + image */}
                  <div
                    className="relative mb-6 w-44 h-44 rounded-full p-[3px] transition-all duration-500"
                    style={{
                      background: "linear-gradient(135deg, rgba(236,70,34,0.6), rgba(255,255,255,0.15), rgba(236,70,34,0.6))",
                      boxShadow: "0 0 0 0 rgba(236,70,34,0)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 0 22px 6px rgba(236,70,34,0.55)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 0 0 0 rgba(236,70,34,0)";
                    }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#0d2145]">
                      {dev.image ? (
                        <img
                          src={dev.image}
                          alt={dev.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white/30 text-xs">
                          Photo
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-white font-extrabold text-2xl tracking-wide mb-1 drop-shadow">
                    {dev.name}
                  </h3>

                  {/* Role badge */}
                  <span
                    className="inline-block text-[#ec4622] text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full"
                    style={{
                      background: "rgba(236,70,34,0.12)",
                      border: "1px solid rgba(236,70,34,0.30)",
                    }}
                  >
                    {dev.role}
                  </span>

                  {/* Club Designation */}
                  {dev.clubDesignation && (
                    <div className="mt-3 mb-5 flex items-center gap-2 px-3 py-2 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.10)",
                      }}
                    >
                      <span
                        className="shrink-0 text-[9px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded"
                        style={{
                          background: "rgba(236,70,34,0.20)",
                          color: "#ec4622",
                          border: "1px solid rgba(236,70,34,0.35)",
                        }}
                      >
                        UIU ELF
                      </span>
                      <span className="text-blue-100/80 text-[11px] font-medium leading-tight">
                        {dev.clubDesignation}
                      </span>
                    </div>
                  )}

                  {/* Divider */}
                  <div className="w-16 h-px mb-5 rounded-full" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }} />

                  {/* Description */}
                  <p className="text-blue-100/70 text-sm leading-relaxed mb-8">
                    {dev.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3 mt-auto">
                    {dev.socials.github && (
                      <div className="relative group/github">
                        <a
                          href={dev.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full flex items-center justify-center text-blue-200/60 hover:text-white transition-all duration-300"
                          style={{
                            background: "rgba(255,255,255,0.07)",
                            border: "1px solid rgba(255,255,255,0.15)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(236,70,34,0.25)";
                            e.currentTarget.style.border = "1px solid rgba(236,70,34,0.60)";
                            e.currentTarget.style.boxShadow = "0 0 10px 3px rgba(236,70,34,0.35)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                            e.currentTarget.style.border = "1px solid rgba(255,255,255,0.15)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                          aria-label="GitHub"
                        >
                          <Github size={16} />
                        </a>
                        <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 bg-[#0a1628] text-white text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover/github:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                          GitHub
                        </span>
                      </div>
                    )}
                    {dev.socials.linkedin && (
                      <div className="relative group/linkedin">
                        <a
                          href={dev.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full flex items-center justify-center text-blue-200/60 hover:text-white transition-all duration-300"
                          style={{
                            background: "rgba(255,255,255,0.07)",
                            border: "1px solid rgba(255,255,255,0.15)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(236,70,34,0.25)";
                            e.currentTarget.style.border = "1px solid rgba(236,70,34,0.60)";
                            e.currentTarget.style.boxShadow = "0 0 10px 3px rgba(236,70,34,0.35)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                            e.currentTarget.style.border = "1px solid rgba(255,255,255,0.15)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={16} />
                        </a>
                        <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 bg-[#0a1628] text-white text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover/linkedin:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                          LinkedIn
                        </span>
                      </div>
                    )}
                    {dev.socials.portfolio && (
                      <div className="relative group/portfolio">
                        <a
                          href={dev.socials.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full flex items-center justify-center text-blue-200/60 hover:text-white transition-all duration-300"
                          style={{
                            background: "rgba(255,255,255,0.07)",
                            border: "1px solid rgba(255,255,255,0.15)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(236,70,34,0.25)";
                            e.currentTarget.style.border = "1px solid rgba(236,70,34,0.60)";
                            e.currentTarget.style.boxShadow = "0 0 10px 3px rgba(236,70,34,0.35)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                            e.currentTarget.style.border = "1px solid rgba(255,255,255,0.15)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                          aria-label="Portfolio"
                        >
                          <Globe size={16} />
                        </a>
                        <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 bg-[#0a1628] text-white text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover/portfolio:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                          Portfolio
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Acknowledgement & Launch Note */}
            <div className="mt-20 text-center px-4">
              <div
                className="inline-block mx-auto max-w-2xl w-full rounded-2xl px-8 py-7"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="w-10 h-px mx-auto mb-5 rounded-full" style={{ background: "linear-gradient(90deg, transparent, rgba(236,70,34,0.8), transparent)" }} />
                <p className="text-blue-100/80 text-sm leading-relaxed mb-4">
                  This platform was conceptualised and built as an official initiative of the{" "}
                  <span className="text-white font-semibold">UIU English Language Forum</span>,
                  undertaken under the direct supervision and guidance of the{" "}
                  <span className="text-[#ec4622] font-semibold">current Executive Panel</span>.
                  Their vision and continued support made this project a reality.
                </p>
                <div className="w-10 h-px mx-auto mb-5 rounded-full" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }} />
                <p className="text-blue-100/60 text-xs tracking-wide">
                  Officially live since{" "}
                  <span className="text-white font-semibold tracking-wider">28th January 2026</span>
                </p>
                <div className="w-10 h-px mx-auto mt-5 rounded-full" style={{ background: "linear-gradient(90deg, transparent, rgba(236,70,34,0.8), transparent)" }} />
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default Developers;
