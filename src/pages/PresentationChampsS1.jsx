import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Mic,
  Star,
  UserCheck,
  Award,
} from "lucide-react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import heroImg from "../assets/ELF_Gallery/Presentation_Champs_Season_1_27_Sep_2024/498170362_1316941517106484_3555946936542730818_n (1).jpg";

const PresentationChampsS1 = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <Fade triggerOnce className="mb-12 text-center" duration={1500}>
          <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium mb-4">
            Archive - Season 1
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Presentation Champs <span className="text-gray-500">Season I</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-[#ec4622]" />
              Sep 27 - Oct 5, 2024
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-[#ec4622]" />
              UIU Smart Room 126 & Multipurpose Hall
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-[#ec4622]" />
              57 Teams
            </div>
          </div>
        </Fade>

        {/* Hero Image */}
        <Fade triggerOnce delay={200} duration={1500} className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <img
              src={heroImg}
              alt="Presentation Champs Season 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent flex items-end p-8">
              <p className="text-white text-lg font-medium">
                Winners of Presentation Champs Season I
              </p>
            </div>
          </div>
        </Fade>

        {/* Overview & Story */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            <Slide direction="up" triggerOnce duration={1500}>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  A Blissful Journey
                </h2>
                <p className="mb-4">
                  Presentation Champs: Season 1 has successfully concluded with
                  a spectacular Grand Finale, powered by Global Study,
                  co-sponsored by Bongo, and with MyJobs as our esteemed Career
                  Partner! It’s hard to believe that this incredible journey has
                  come to an end, and what an amazing ride it has been!
                </p>
                <p>
                  From the very first session to this grand finale, it’s been
                  nothing but a journey filled with learning, growth, and
                  remarkable presentations. A heartfelt thank you goes out to
                  everyone involved—participants, mentors, organizers, and
                  partners.
                </p>
              </div>
            </Slide>

            <Slide direction="up" triggerOnce delay={200} duration={1500}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-[#ec4622]">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-[#ec4622]" />
                  Surprise Guest: Faatiha Aayat
                </h3>
                <p className="mb-4">
                  We were beyond excited to have the remarkable Faatiha Aayat as
                  a surprise guest at the Grand Finale! A young yet powerful
                  child rights activist and climate campaigner, she has spoken
                  at international platforms like the United Nations and TEDx.
                </p>
                <p>
                  Her surprise presence at our event was truly inspiring,
                  motivating us all to push boundaries and make a positive
                  impact.
                </p>
              </div>
            </Slide>
          </div>

          <div className="space-y-6">
            {/* Key Figures */}
            <Slide
              direction="right"
              triggerOnce
              delay={400}
              cascade
              damping={0.1}
              duration={1500}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <UserCheck className="w-5 h-5 mr-2 text-[#ec4622]" />
                  Esteemed Guests
                </h3>
                <ul className="space-y-4 text-sm">
                  <li>
                    <span className="block font-semibold text-gray-800 dark:text-gray-200">
                      Prof. Dr. Md. Abul Kashem Mia
                    </span>
                    <span className="text-gray-500">
                      Chief Guest (Vice Chancellor, UIU)
                    </span>
                  </li>
                  <li>
                    <span className="block font-semibold text-gray-800 dark:text-gray-200">
                      Shahnawaz Hossain Jay
                    </span>
                    <span className="text-gray-500">
                      Special Guest (Founder, The English Republic)
                    </span>
                  </li>
                  <li>
                    <span className="block font-semibold text-gray-800 dark:text-gray-200">
                      Mohammad Kamruzzaman
                    </span>
                    <span className="text-gray-500">
                      Guest of Honor (CEO, MyJobs.com.bd)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                     <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-[#ec4622]" />
                        Distinguished Judges
                     </h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                           <span className="mr-2">•</span>
                           <span><strong>Mohammad Aman Ullah</strong>, Founder & Chairman of WOC</span>
                        </li>
                        <li className="flex items-start">
                           <span className="mr-2">•</span>
                           <span><strong>Dr. Prof. Mohammad Rokibul Kabir</strong>, Director of HRDI, DIU</span>
                        </li>
                        <li className="flex items-start">
                           <span className="mr-2">•</span>
                           <span><strong>Mohammad Morad Hossain</strong>, CHRO, Elite Group of Companies</span>
                        </li>
                           <li className="flex items-start">
                           <span className="mr-2">•</span>
                           <span><strong>Dr. Farid Sobhani</strong>, Professor, UIU</span>
                        </li>
                     </ul>
                  </div>
            </Slide>
          </div>
        </div>

        {/* Timeline & judges */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Event Timeline & judges
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* First Training Session */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                First Training Session
              </h3>
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>25th September 2024</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Instructor:
                </span>
                <p className="text-gray-600 dark:text-gray-400">
                  Mr. Shahnawaz Hossain Jay
                </p>
              </div>
            </div>

            {/* First Round */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-[#ec4622]">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                First Round [Preliminary]
              </h3>
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>27th September 2024</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Judges:
                </span>
                <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside">
                  <li>Mr. Jakowan</li>
                  <li>Ms. Aysha Akther Shumi</li>
                  <li>Ms. Piana Monsur Mindia</li>
                  <li>Dr. Shantanu Kumar Saha</li>
                  <li>Sadia Ahmmed</li>
                </ul>
              </div>
            </div>

            {/* Second Training Session */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Second Training Session
              </h3>
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>28th September 2024</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Instructor:
                </span>
                <p className="text-gray-600 dark:text-gray-400">
                  Dr. Mario Hirstein
                </p>
              </div>
            </div>

            {/* Second Round */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-[#ec4622]">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Second Round [Semi-Final]
              </h3>
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>30th September 2024</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Judges:
                </span>
                <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside">
                  <li>Ms. Nasrin Akter</li>
                  <li>Ms. Aysha Akther Shumi</li>
                </ul>
              </div>
            </div>

            {/* Final Training Session */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Final Training Session
              </h3>
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>2nd October 2024</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Instructor:
                </span>
                <p className="text-gray-600 dark:text-gray-400">
                  Ms. Kirsten Gudgeon
                </p>
              </div>
            </div>

            {/* Final Round */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-[#ec4622]">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Final Round [Grand Finale]
              </h3>
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>5th October 2024</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Judges:
                </span>
                <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside">
                  <li>Dr. Farid A. Sobhani</li>
                  <li>Dr. Mohammad Rakibul Kabir</li>
                  <li>Mohammad Morad Hossain</li>
                  <li>Mohammad Aman Ullah</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Winners Section */}
         <Zoom triggerOnce duration={1500}>
            <div className="bg-linear-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-32 bg-[#ec4622]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="absolute bottom-0 left-0 p-32 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

               <h2 className="text-3xl font-bold mb-12 relative z-10">
                  🎉 Hall of Fame
               </h2>

               <div className="grid md:grid-cols-3 gap-8 relative z-10">
                  <Slide direction="left" triggerOnce duration={1500}>
                     <div className="order-2 md:order-1 transform md:translate-y-8">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                           <Trophy className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                           <h3 className="text-xl font-bold mb-2">Speechify</h3>
                           <p className="text-gray-300">1st Runners-Up</p>
                           <div className="mt-4 text-4xl font-bold text-gray-400/20">
                              02
                           </div>
                        </div>
                     </div>
                  </Slide>

                  <Slide direction="up" triggerOnce duration={1500}>
                     <div className="order-1 md:order-2">
                        <div className="bg-linear-to-b from-[#ec4622]/20 to-[#ec4622]/5 backdrop-blur-md p-8 rounded-2xl border border-[#ec4622]/30 ring-4 ring-[#ec4622]/10">
                           <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                           <h3 className="text-2xl font-bold mb-2 text-yellow-400">
                              The Caffeine Crew
                           </h3>
                           <p className="text-gray-200 font-medium">Champions</p>
                           <div className="mt-4 text-5xl font-bold text-yellow-400/20">
                              01
                           </div>
                        </div>
                     </div>
                  </Slide>

                  <Slide direction="right" triggerOnce duration={1500}>
                     <div className="order-3 transform md:translate-y-12">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                           <Trophy className="w-10 h-10 text-orange-700 mx-auto mb-4" />
                           <h3 className="text-xl font-bold mb-2">Stat-Valiants</h3>
                           <p className="text-gray-300">2nd Runners-Up</p>
                           <div className="mt-4 text-4xl font-bold text-gray-400/20">
                              03
                           </div>
                        </div>
                     </div>
                  </Slide>
               </div>
            </div>
         </Zoom>
      </div>
    </div>
  );
};

export default PresentationChampsS1;
