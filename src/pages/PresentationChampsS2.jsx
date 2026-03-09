import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Mic,
  Layers,
  Target,
  Coins,
  ImageIcon,
  Clock,
} from "lucide-react";
import { Fade, Slide } from "react-awesome-reveal";
import heroImg from "../assets/ELF_Gallery/Presentation_Champs_Season_II_16_Jan_2026/Presentation_Champs_Season_II_16_Jan_2026_.jpg";

// Import Finalist Team Images
import team1 from "../assets/ELF_Gallery/Presentation_Champs_Season_II_16_Jan_2026/Winners/champion.jpg";
import team2 from "../assets/ELF_Gallery/Presentation_Champs_Season_II_16_Jan_2026/Winners/1st_runner-up.jpg";
import team3 from "../assets/ELF_Gallery/Presentation_Champs_Season_II_16_Jan_2026/Winners/2nd_runner-up.jpg";

const PresentationChampsS2 = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <Fade triggerOnce className="mb-12 text-center" duration={1500}>
          <span className="inline-block px-4 py-2 bg-[#ec4622]/10 text-[#ec4622] rounded-full text-sm font-medium mb-4">
            Flagship Event
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Presentation Champs{" "}
            <span className="text-[#ec4622]">Season II</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
            Presentation Champs Season II is an elite inter-university
            competition designed to test the creativity, logic, and delivery of
            aspiring public speakers. Powered by TCL Global, this season
            featured intense rounds of competition where students showcased
            their ability to think on their feet, present structured arguments,
            and captivate audiences with visual storytelling. It’s more than
            just a competition; it’s a platform for future leaders to sharpen
            their innovative thinking and professional communication skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-600 dark:text-gray-300">
            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-xl shadow-sm flex items-center">
              <Calendar className="w-5 h-5 mr-3 text-[#ec4622]" />
              <span className="font-medium">Jan 16 - Jan 25, 2026</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-xl shadow-sm flex items-center">
              <MapPin className="w-5 h-5 mr-3 text-[#ec4622]" />
              <span className="font-medium">UIU Multipurpose Hall</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-xl shadow-sm flex items-center">
              <Users className="w-5 h-5 mr-3 text-[#ec4622]" />
              84 Teams
            </div>
          </div>
        </Fade>

        {/* Hero Image */}
        <Fade triggerOnce delay={200} duration={1500} className="mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-21/9 ring-1 ring-gray-900/5">
            <img
              src={heroImg}
              alt="Presentation Champs Season 2"
              className="w-full h-full object-cover"
            />
          </div>
        </Fade>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            {
              icon: Trophy,
              title: "Prize Pool",
              desc: "BDT 50,000",
              sub: "Champion: 25k",
            },
            {
              icon: Layers,
              title: "Round 1",
              desc: "Elevator Pitch",
              sub: "Rapid-fire ideas",
            },
            {
              icon: Mic,
              title: "Round 2",
              desc: "Extempore",
              sub: "Impromptu speaking",
            },
            {
              icon: Target,
              title: "Round 3",
              desc: "Pecha-Kucha",
              sub: "Visual storytelling",
            },
          ].map((item, index) => (
            <Slide
              key={index}
              direction="up"
              triggerOnce
              delay={index * 150}
              duration={1200}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-2 border-[#ec4622] h-full hover:-translate-y-1 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-[#ec4622] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {item.desc}
                </p>
                <p className="text-sm text-gray-500 mt-2">{item.sub}</p>
              </div>
            </Slide>
          ))}
        </div>

        {/* Event Timeline */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Event Timeline
          </h2>
          <div className="space-y-8">
            {/* Registration - Centered Top */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-blue-500 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Registration
                </h3>
                <div className="flex items-center justify-center text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Jan 3 - Jan 14, 2026</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Online + Offline Booth
                </p>
              </div>
            </div>

            {/* Rounds - 3 in a row */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* Preliminary Round */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-[#ec4622]">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Preliminary Round
                </h3>
                <div className="flex items-center text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>16th January 2026</span>
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4 mr-2 inline" />
                  <span>09:00 AM - 01:00 PM</span>
                </p>
                <div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    Judges:
                  </span>
                  <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside text-sm mt-1">
                    <li>Labib Rashid Inan</li>
                    <li>Mr. Jakowan</li>
                    <li>Ms. Umme Habiba</li>
                    <li>Dr. Mohammad Shamsul Alam Wasimi</li>
                    <li>Ms. Nafisa Rahman</li>
                    <li>Md. Tarek Hasan</li>
                    <li>Ms. Refaya Rezwan</li>
                  </ul>
                </div>
              </div>

              {/* Semi Final Round */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-[#ec4622]">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Semi Final Round
                </h3>
                <div className="flex items-center text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>16th January 2026</span>
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4 mr-2 inline" />
                  <span>02:30 PM - 04:30 PM</span>
                </p>
                <div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    Judges:
                  </span>
                  <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside text-sm mt-1">
                    <li>Labib Rashid Inan</li>
                    <li>Tanzila Amir</li>
                    <li>Muntasir Ahmed</li>
                    <li>Chowdhury Omar Sharif</li>
                    <li>Dr. Mohd. H. R. Joarder</li>
                  </ul>
                </div>
              </div>

              {/* Grand Finale */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-[#ec4622]">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Grand Finale
                </h3>
                <div className="flex items-center text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>25th January 2026</span>
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4 mr-1 inline" /> 02:30 PM - 04:30 PM
                </p>
                <div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    Judges:
                  </span>
                  <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside text-sm mt-1">
                    <li>Ms. Kirsten Gudgeon</li>
                    <li>Ummay Sumaiya Mutiatur Rasul</li>
                    <li>Mohammad Aman Ullah</li>
                    <li>Dr. Shantanu Kumar Saha</li>
                    <li>Dr. Suman Ahmed</li>
                    <li>Dr. Salma Karim</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Winners Section */}
        <section className="mb-20">
          <div className="bg-linear-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-[#ec4622]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 p-32 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <h2 className="text-3xl font-bold mb-12 relative z-10">
              🎉 Hall of Fame
            </h2>

            <div className="grid lg:grid-cols-3 gap-8 relative z-10 items-end">
              {/* 1st Runner Up */}
              <div className="order-2 lg:order-1">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 h-full flex flex-col">
                  <div className="relative mb-4 rounded-xl overflow-hidden aspect-video">
                    <img
                      src={team2}
                      alt="1st Runner Up"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2 bg-gray-900/80 p-2 rounded-lg backdrop-blur-sm">
                      <Trophy className="w-6 h-6 text-gray-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1">Team Red Marked</h3>
                  <p className="text-gray-400 text-sm mb-2">
                    East West University
                  </p>
                  <p className="text-gray-300 font-semibold mt-auto">
                    1st Runner-Up
                  </p>
                </div>
              </div>

              {/* Champion */}
              <div className="order-1 lg:order-2 transform lg:-translate-y-8">
                <div className="bg-linear-to-b from-[#ec4622]/20 to-[#ec4622]/5 backdrop-blur-md p-8 rounded-2xl border border-[#ec4622]/30 ring-4 ring-[#ec4622]/10 h-full flex flex-col">
                  <div className="relative mb-6 rounded-xl overflow-hidden aspect-video shadow-2xl">
                    <img
                      src={team1}
                      alt="Champion"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2 bg-[#ec4622] p-2 rounded-lg shadow-lg">
                      <Trophy className="w-8 h-8 text-yellow-100" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-yellow-400">
                    The Team Without A Name
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">
                    United International University
                  </p>
                  <p className="text-white font-bold text-lg mt-auto">
                    Champion
                  </p>
                </div>
              </div>

              {/* 2nd Runner Up */}
              <div className="order-3 lg:order-3">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 h-full flex flex-col">
                  <div className="relative mb-4 rounded-xl overflow-hidden aspect-video">
                    <img
                      src={team3}
                      alt="2nd Runner Up"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2 bg-gray-900/80 p-2 rounded-lg backdrop-blur-sm">
                      <Trophy className="w-6 h-6 text-orange-700" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1">Ki Deya Jieee</h3>
                  <p className="text-gray-400 text-sm mb-2">
                    North South University
                  </p>
                  <p className="text-gray-300 font-semibold mt-auto">
                    2nd Runner-Up
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PresentationChampsS2;
