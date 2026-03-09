import React from "react";
import {
  History as HistoryIcon,
  Flag,
  Users,
  Trophy,
  Zap,
  Calendar,
} from "lucide-react";

const History = () => {
  const timelineEvents = [
    {
      year: "2013",
      date: "Sept 20",
      title: "The Beginning",
      desc: "Forum established at UIU with a vision to empower students.",
      icon: Flag,
    },
    {
      year: "2022",
      title: "Strategic Growth",
      desc: "IELTS seminar with 10 Minute School & major partnerships.",
      icon: Users,
    },
    {
      year: "2023",
      title: "A Decade of Excellence",
      desc: "Celebrated our 10th Anniversary milestone.",
      icon: Trophy,
    },
    {
      year: "2024",
      title: "New Leadership",
      desc: "Dr. Khan assumes leadership; Presentation Champs launched.",
      icon: Zap,
    },
    {
      year: "2026",
      title: "The Future",
      desc: "12+ years of continuous impact and growing community.",
      icon: Calendar,
    },
  ];

  return (
    <section className="py-24 bg-linear-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-[#ec4622]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* --- Left Column: Timeline Card --- */}
          <div className="order-2 lg:order-1">
            {/* Added a container card for the timeline so it doesn't float */}
            <div className="relative bg-white rounded-4xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
              {/* Subtle Watermark */}
              <div className="absolute -right-6 -top-6 text-[8rem] font-bold text-gray-50 opacity-50 select-none pointer-events-none">
                13
              </div>

              <div className="relative space-y-8 pl-2 z-10">
                {/* Continuous Vertical Line */}
                <div className="absolute left-5.75 top-3 bottom-6 w-0.5 bg-linear-to-b from-[#ec4622]/20 to-transparent"></div>

                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative flex items-start group">
                    {/* Timeline Dot/Icon */}
                    <div className="relative z-10 shrink-0 w-12 h-12 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center shadow-sm group-hover:border-[#ec4622] group-hover:shadow-md transition-all duration-300">
                      <event.icon
                        size={18}
                        className="text-gray-400 group-hover:text-[#ec4622] transition-colors duration-300"
                      />
                    </div>

                    {/* Event Content */}
                    <div className="ml-6 pt-1">
                      <div className="flex items-baseline space-x-3">
                        <span className="text-lg font-bold text-gray-900 group-hover:text-[#ec4622] transition-colors duration-300">
                          {event.year}
                        </span>
                        {event.date && (
                          <span className="text-[10px] font-bold text-[#ec4622]/80 uppercase tracking-wider bg-[#ec4622]/5 px-2 py-0.5 rounded-full">
                            {event.date}
                          </span>
                        )}
                      </div>
                      <h4 className="text-base font-bold text-gray-800 mt-0.5">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                        {event.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- Right Column: Text Content --- */}
          <div className="order-1 lg:order-2 lg:sticky">
            <div className="flex items-center space-x-3 mb-6">
              <span className="inline-flex items-center gap-1 px-4 py-2 bg-[#ec4622]/20 text-[#ec4622] rounded-full text-sm font-medium ">
                <HistoryIcon size={22} />
                <span>Our Journey</span>
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-[1.1]">
              A Legacy of <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ec4622] to-[#c23418]">
                Excellence
              </span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
                <span className="font-semibold text-gray-900">
                  Established on September 20, 2013
                </span>
                , the UIU English Language Forum (UIUELF) was founded with a
                vision to create a platform where students could enhance their
                English communication skills in a supportive and engaging
                environment.
              </p>
              <p>
                Over the years, we have grown from a small group of passionate
                students to one of the most active and impactful clubs at United
                International University.
              </p>
              <p>
                Today, UIUELF continues to uphold its founding principles while
                adapting to the evolving needs of students in an increasingly
                globalized world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
