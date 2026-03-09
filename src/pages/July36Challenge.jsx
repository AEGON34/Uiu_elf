import { useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Calendar, MapPin, Trophy, Users, Clock, DollarSign } from "lucide-react";

// Import images
import heroImg from "../assets/ELF_Gallery/The_July_36_Challenge_A_Linguistic_Uprising_10_Aug_2025/The_July_36_Challenge_A_Linguistic_Uprising_10_Aug_2025(5).jpg";
import championImg from "../assets/ELF_Gallery/The_July_36_Challenge_A_Linguistic_Uprising_10_Aug_2025/winners/Champion.jpg";
import firstRunnerUpImg from "../assets/ELF_Gallery/The_July_36_Challenge_A_Linguistic_Uprising_10_Aug_2025/winners/!st_runner-up.jpg";
import secondRunnerUpImg from "../assets/ELF_Gallery/The_July_36_Challenge_A_Linguistic_Uprising_10_Aug_2025/winners/2nd_runner-up.jpg";

const July36Challenge = () => {
  useEffect(() => {
    document.title = "UIUELF | The July 36 Challenge";
    window.scrollTo(0, 0);
  }, []);

  const guests = [
    {
      name: "Dr. Shantanu Kumar Saha",
      designation: "Associate Professor & Head of Dept. Department of EDS"
    },
    {
      name: "Mr. Nahid Hassan Khan",
      designation: "Director, Directorate of Career Counselling & Student Affairs"
    },
    {
      name: "Dr. Muhammad Fazle Ramzan Khan",
      designation: "Associate Professor, Department of English & Moderator, UIU ELF"
    },
    {
      name: "Aysha Akter Shumi",
      designation: "Lecturer, English Dept."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <Fade triggerOnce className="mb-12 text-center" duration={1500}>
          <span className="inline-block px-4 py-2 bg-[#ec4622]/10 text-[#ec4622] rounded-full text-sm font-medium mb-4">
            A Linguistic Uprising
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            The <span className="text-[#ec4622]">July 36</span> Challenge
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-[#ec4622]" />
              August 10, 2025
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-[#ec4622]" />
              UIU Multipurpose Hall
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-[#ec4622]" />
              400+ Registrations
            </div>
          </div>
        </Fade>

        {/* Hero Image */}
        <Fade triggerOnce delay={200} duration={1500} className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <img
              src={heroImg}
              alt="The July 36 Challenge"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent flex items-end p-8">
              <p className="text-white text-lg font-medium">
                The July 36 Challenge: A Linguistic Uprising
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
                  About the Event
                </h2>
                <p className="mb-4">
                  "July 36"—a symbolic date marking the day the nation reclaimed its freedom from the clutches of oppression. This hard-won victory was achieved through the blood and sacrifice of thousands of brave warriors.
                </p>
                <p className="mb-4">
                  To honor their legacy and celebrate their triumph, the English Language Forum (ELF) organized a quiz competition on August 10, 2025, featuring 36 questions to be answered in 20 minutes, with a registration fee of 36 Taka—a tribute to the historic day.
                </p>
                <p>
                  The event saw over 400 registrations, culminating in four winners receiving cash prizes. The entire ELF team, from panel members to volunteers, contributed tirelessly to its success.
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
                  <Users className="w-5 h-5 mr-2 text-[#ec4622]" />
                  Distinguished Guests
                </h3>
                <ul className="space-y-4 text-sm">
                  {guests.map((guest, index) => (
                    <li key={index}>
                      <span className="block font-semibold text-gray-800 dark:text-gray-200">
                        {guest.name}
                      </span>
                      <span className="text-gray-500">
                        {guest.designation}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Slide>
          </div>
        </div>

        {/* Winners Section */}
        <section className="mb-20">
          <div className="bg-linear-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-[#ec4622]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 p-32 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <h2 className="text-3xl font-bold mb-4 relative z-10">
              🎉 Victors of the July 36 Challenge
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 relative z-10">
              Their eloquence, intellect, and command of language turned this stage into a true celebration of expression.
            </p>

            <div className="grid lg:grid-cols-3 gap-8 relative z-10 items-end">
              {/* 1st Runner Up */}
              <div className="order-2 lg:order-1">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 h-full flex flex-col">
                  <div className="relative mb-4 rounded-xl overflow-hidden aspect-video">
                    <img
                      src={firstRunnerUpImg}
                      alt="1st Runner Up"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2 bg-gray-900/80 p-2 rounded-lg backdrop-blur-sm">
                      <Trophy className="w-6 h-6 text-gray-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1">MD. Samiul Islam Tamim</h3>
                  <h3 className="text-xl font-bold mb-1">& AR Rahaman Choudhury</h3>
                  <p className="text-gray-300 font-semibold mt-auto pt-4">
                    1st Runners-Up
                  </p>
                </div>
              </div>

              {/* Champion */}
              <div className="order-1 lg:order-2 transform lg:-translate-y-8">
                <div className="bg-linear-to-b from-[#ec4622]/20 to-[#ec4622]/5 backdrop-blur-md p-8 rounded-2xl border border-[#ec4622]/30 ring-4 ring-[#ec4622]/10 h-full flex flex-col">
                  <div className="relative mb-6 rounded-xl overflow-hidden aspect-video shadow-2xl">
                    <img
                      src={championImg}
                      alt="Champion"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2 bg-[#ec4622] p-2 rounded-lg shadow-lg">
                      <Trophy className="w-8 h-8 text-yellow-100" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-yellow-400">
                    Nabilah Afrin
                  </h3>
                  <p className="text-white font-bold text-lg mt-auto pt-4">
                    Champion
                  </p>
                </div>
              </div>

              {/* 2nd Runner Up */}
              <div className="order-3 lg:order-3">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 h-full flex flex-col">
                  <div className="relative mb-4 rounded-xl overflow-hidden aspect-video">
                    <img
                      src={secondRunnerUpImg}
                      alt="2nd Runner Up"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2 bg-gray-900/80 p-2 rounded-lg backdrop-blur-sm">
                      <Trophy className="w-6 h-6 text-orange-700" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1">Asifuzzaman</h3>
                  <p className="text-gray-300 font-semibold mt-auto pt-4">
                    2nd Runner-Up
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <Fade triggerOnce direction="up" delay={600}>
              <p className="text-gray-600 dark:text-gray-300 text-lg italic mb-8">
                "Our heartfelt congratulations to the winners, and sincere thanks to every participant whose passion made this event a roaring success. Here's to many more battles of brilliance and triumphs of words ahead. 🌻"
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["#UIUELFForum", "#July36Challenge", "#LinguisticUprising", "#WordsThatWin", "#CelebratingExcellence"].map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </Fade>
          </div>
        </section>
      </div>
    </div>
  );
};

export default July36Challenge;