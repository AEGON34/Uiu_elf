import React, { useMemo, useState } from 'react';
import { Slide, Fade } from 'react-awesome-reveal';
import { Linkedin, Mail, ChevronDown } from 'lucide-react';
import { pastCommittees } from '../../data/committeeData';

// ── Shared image helper ────────────────────────────────────────────────────────
const resolveImage = (filename, images, fallbackSize = '400x500') => {
  if (filename.startsWith('http')) return filename;
  const imagePath = Object.keys(images).find((p) => p.endsWith(`/${filename}`));
  return imagePath
    ? images[imagePath]?.default || images[imagePath]
    : `https://placehold.co/${fallbackSize}/ec4622/ffffff?text=UIUELF`;
};

// ── Dark portrait card (Core Panel) ───────────────────────────────────────────
const CoreCard = ({ member, images }) => {
  const imageUrl = resolveImage(member.image, images, '400x500');

  return (
    <div className="bg-[#0d1117] rounded-2xl overflow-hidden group hover:shadow-[0_0_30px_rgba(236,70,34,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col border border-white/10 h-full">
      {/* Role label at top */}
      <div className="text-center pt-4 pb-2 px-4">
        <span className="text-white/50 text-[11px] tracking-[0.2em] font-medium uppercase">
          — {member.role} —
        </span>
      </div>

      {/* Photo */}
      <div className="mx-4 rounded-xl overflow-hidden">
        <div className="aspect-3/4 overflow-hidden">
          <img
            src={imageUrl}
            alt={member.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1 text-center">
        <h3 className="font-bold text-white text-lg leading-tight mb-1">{member.name}</h3>
        <span className="text-[#ec4622] text-[11px] font-bold uppercase tracking-widest mb-3">
          {member.role}
        </span>
        {member.description && (
          <p className="text-gray-400 text-xs leading-relaxed flex-1">{member.description}</p>
        )}
        {(member.linkedin || member.email) && (
          <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-white/10">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#ec4622] flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// ── Dark portrait card (Executive & Departments) ─────────────────────────────
const MemberCard = ({ member, images }) => {
  const imageUrl = resolveImage(member.image, images, '300x400');

  return (
    <div className="relative rounded-2xl overflow-hidden group hover:shadow-[0_0_24px_rgba(236,70,34,0.3)] hover:-translate-y-1.5 transition-all duration-300 border border-white/10">
      {/* Portrait photo */}
      <div className="aspect-3/4 overflow-hidden">
        <img
          src={imageUrl}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/50 to-transparent pt-10 pb-4 px-3 text-center">
        <h3 className="font-bold text-white text-sm leading-snug mb-1.5">{member.name}</h3>
        <span className="inline-block px-2.5 py-0.5 bg-[#ec4622] text-white text-[9px] font-extrabold uppercase tracking-widest rounded-full">
          {member.role}
        </span>
      </div>

      {/* Subtle orange top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#ec4622]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

// ── Accordion panel for previous committees ──────────────────────────────────
const PreviousPanel = ({ panel }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      {/* Header button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-4 bg-[#131720] hover:bg-[#1a2030] transition-colors duration-200 group"
      >
        <div className="flex items-center gap-4">
          <div className="w-1 h-5 bg-[#ec4622] rounded-full"></div>
          <span className="text-white font-bold text-base tracking-wide">{panel.term} — Executive Body Panel</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white/40 text-xs">{panel.members.length} members</span>
          <div className={`w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/60 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
            <ChevronDown size={14} />
          </div>
        </div>
      </button>

      {/* Collapsible content */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? 'max-h-500 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pt-2 pb-8 bg-[#0d1117]">
          <p className="text-white/30 text-xs mb-6">{panel.members.length} members</p>
          <div className="flex flex-wrap justify-start gap-5">
            {panel.members.map((member, idx) => (
              <div key={idx} className="w-36 sm:w-44">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                  <div className="aspect-3/4 overflow-hidden">
                    <img
                      src={member.image || `https://placehold.co/300x400/0d1117/ffffff?text=${encodeURIComponent(member.name.split(' ')[0])}`}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/95 via-black/60 to-transparent pt-8 pb-3 px-3 text-center">
                    <p className="text-white font-bold text-xs leading-snug mb-1">{member.name}</p>
                    <p className="text-[#ec4622] text-[9px] font-bold uppercase tracking-widest">{panel.term}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-white/10 text-white/70 text-[9px] rounded-full">
                      {member.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CoreCommittee = () => {
  const images = useMemo(() => {
    return import.meta.glob('/src/assets/committee_members/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
  }, []);

  // ── Previous Panels (imported from data/committeeData.js) ────────────────
  const previousPanels = pastCommittees;

  // ── Core Panel (top 3) ──────────────────────────────────────────────────────
  const corePanel = [
    {
      role: 'President',
      name: 'Mohammad Siyam',
      image: 'president.JPG',
      description: 'Inspiring leader championing language learning and student empowerment across the UIU community.',
      linkedin: '#',
      email: 'president@uiuelf.com',
    },
     {
      role: 'VP (External Affairs)',
      name: 'Muhammad Aly',
      image: 'vp_ext.jpg',
      description: "Charismatic connector enhancing external relations and amplifying UIUELF's presence beyond campus.",
      linkedin: '#',
      email: 'vpext@uiuelf.com',
    },
   
    {
      role: 'VP (Internal Affairs)',
      name: 'Md. Arafath Hossain Akash',
      image: 'vp_int.jpg',
      description: 'Bridge-builder with a talent for strategic partnerships and internal team coordination.',
      linkedin: '#',
      email: 'vpint@uiuelf.com',
    },
     {
      role: 'General Secretary',
      name: 'Khondokar Rifatuzzaman Alif',
      image: 'gs.jpg',
      description: 'Efficient organiser fostering multilingual growth and seamless club operations every semester.',
      linkedin: '#',
      email: 'gs@uiuelf.com',
    },
    {
      role: 'Organizing Secretary',
      name: 'Md. Kamran Hassan',
      image: 'os.jpg',
      description: 'Master planner behind every successful UIUELF event — turning visions into seamless experiences.',
      linkedin: '#',
      email: 'os@uiuelf.com',
    },
    {
      role: 'Treasurer',
      name: 'Abu Sayed Rabbi',
      image: 'treasurer.jpg',
      description: "Meticulous financial steward keeping the club's resources transparent and efficiently managed.",
      linkedin: '#',
      email: 'treasurer@uiuelf.com',
    },
  ];

  // ── Department Members ──────────────────────────────────────────────────────
  const departments = [
    {
      label: 'Human Resources',
      members: [
        { role: 'Head of Human Resources', name: 'Moriom Islam Mim', image: 'hr_head.jpg' },
        { role: 'Co-Head of Human Resources', name: 'Md. Jahid Hasan', image: 'hr_cohead_1.png' },
        { role: 'Co-Head of Human Resources', name: 'Tamim Hasan Rafi', image: 'hr_cohead_2.jpg' },
      ],
    },
    {
      label: 'PR & Communications',
      members: [
        { role: 'Head of PR & Communications', name: 'Golam Bari Fardeen', image: 'pr_head.jpg' },
        { role: 'Co-Head of PR & Communications', name: 'Yusuf Ibrahim Khan', image: 'pr_cohead_1.jpg' },
        { role: 'Co-Head of PR & Communications', name: 'Janita Islam Jarin', image: 'pr_cohead_2.jpg' },
      ],
    },
    {
      label: 'Marketing',
      members: [
        { role: 'Head of Marketing', name: 'Khondaker Zarifa Haque', image: 'markerting_head.jpg' },
        { role: 'Co-Head of Marketing', name: 'MD Golam Bin As-Sami', image: 'markerting_cohead_1.jpg' },
        { role: 'Co-Head of Marketing', name: 'Jahidul Islam', image: 'markerting_cohead_2.jpg' },
      ],
    },
    {
      label: 'Research & Development',
      members: [
        { role: 'Head of R&D', name: 'To Be Announced', image: 'https://placehold.co/300x300/8b3622/ffffff?text=TBA' },
        { role: 'Co-Head of R&D', name: 'Md. Marufur Rahman Sumon', image: 'r&d_cohead_1.jpeg' },
        { role: 'Co-Head of R&D', name: 'Tahosin Akter Orthy', image: 'r&d_cohead_2.jpg' },
      ],
    },
    {
      label: 'Organizing',
      members: [
        { role: 'Head of Organizing', name: 'Md Naimur Rahman Riyad', image: 'org_head.JPG' },
        { role: 'Co-Head of Organizing', name: 'Md. Minhajul Islam', image: 'org_cohead_1.jpeg' },
        { role: 'Co-Head of Organizing', name: 'Ismail Hossain', image: 'org_cohead_2.JPG' },
      ],
    },
    {
      label: 'Design',
      members: [
        { role: 'Head of Design', name: 'Sajjadul Islam Nirob', image: 'design_head.jpg' },
        { role: 'Co-Head of Design', name: 'Anika Tasnim', image: 'design_cohead_1.jpg' },
        { role: 'Co-Head of Design', name: 'To Be Announced', image: 'https://placehold.co/300x300/8b362a/ffffff?text=TBA' },
      ],
    },
    {
      label: 'Decoration & Cultural',
      members: [
        { role: 'Head of Decoration & Cultural', name: 'Mst. Sumaiya Akter', image: 'decoration_head.jpg' },
        { role: 'Co-Head of Decoration & Cultural', name: 'To Be Announced', image: 'https://placehold.co/300x300/8b362a/ffffff?text=TBA' },
        { role: 'Co-Head of Decoration & Cultural', name: 'Walid Bin Siddique', image: 'decoration_cohead_2.jpg' },
      ],
    },
  ];

  return (
    <div className="bg-[#080b10]">

      {/* ── CORE PANEL 2024–2025 ─────────────────────────────────────────────── */}
      <section className="py-20 bg-[#080b10]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-[#ec4622]/50"></div>
              <span className="text-[#ec4622] text-sm font-bold uppercase tracking-widest">Core Panel 2024–2025</span>
              <div className="h-px w-16 bg-[#ec4622]/50"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Leading with Excellence</h2>
          </div>

          {/* ── Hierarchy: President top, GS + VP below ── */}
          <div className="flex flex-col items-center gap-10">
            {/* Row 1 — President (centered) */}
            <Slide direction="down" triggerOnce>
              <div className="w-64 sm:w-72">
                <CoreCard member={corePanel[0]} images={images} />
              </div>
            </Slide>

            {/* Connector line */}
            <div className="flex flex-col items-center -my-4 z-10">
              <div className="w-px h-6 bg-[#ec4622]/40"></div>
              <div className="w-3 h-3 rounded-full bg-[#ec4622]"></div>
            </div>

            {/* Row 2 — GS left, VP Internal right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl">
              <Slide direction="left" triggerOnce delay={150}>
                <CoreCard member={corePanel[1]} images={images} />
              </Slide>
              <Slide direction="right" triggerOnce delay={150}>
                <CoreCard member={corePanel[2]} images={images} />
              </Slide>
            </div>

            {/* Connector line */}
            <div className="flex flex-col items-center -my-4 z-10">
              <div className="w-px h-6 bg-[#ec4622]/40"></div>
              <div className="w-3 h-3 rounded-full bg-[#ec4622]"></div>
            </div>

            {/* Row 3 — VP External, Organizing Secretary, Treasurer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
              <Slide direction="left" triggerOnce delay={300}>
                <CoreCard member={corePanel[3]} images={images} />
              </Slide>
              <Fade triggerOnce delay={300}>
                <CoreCard member={corePanel[4]} images={images} />
              </Fade>
              <Slide direction="right" triggerOnce delay={300}>
                <CoreCard member={corePanel[5]} images={images} />
              </Slide>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPARTMENTS ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#080b10]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-[#ec4622]/50"></div>
              <span className="text-[#ec4622] text-sm font-bold uppercase tracking-widest">Departments</span>
              <div className="h-px w-16 bg-[#ec4622]/50"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Committee Members</h2>
          </div>

          <div className="space-y-16">
            {departments.map((dept, deptIndex) => (
              <Fade key={deptIndex} triggerOnce delay={100}>
                <div>
                  {/* Department label */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-1 h-7 bg-[#ec4622] rounded-full"></div>
                    <h3 className="text-lg font-bold text-white">{dept.label}</h3>
                    <div className="h-px flex-1 bg-white/10"></div>
                  </div>
                  {/* Members grid — flex-wrap so odd counts stay centered */}
                  <div className="flex flex-wrap justify-center gap-5">
                    {dept.members.map((member, memberIndex) => (
                      <Slide key={memberIndex} direction="up" triggerOnce delay={memberIndex * 100}>
                        <div className="w-36 sm:w-44">
                          <MemberCard member={member} images={images} />
                        </div>
                      </Slide>
                    ))}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREVIOUS PANELS ────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#080b10]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-[#ec4622]/50"></div>
              <span className="text-[#ec4622] text-sm font-bold uppercase tracking-widest">Hall of Fame</span>
              <div className="h-px w-16 bg-[#ec4622]/50"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Previous Panels</h2>
            <p className="text-white/40 text-sm mt-3">The alumni who shaped UIUELF into what it is today.</p>
          </div>

          <div className="space-y-3">
            {previousPanels.map((panel, idx) => (
              <PreviousPanel key={idx} panel={panel} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default CoreCommittee;
