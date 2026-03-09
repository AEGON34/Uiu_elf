import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Mic, Users, Calendar } from 'lucide-react';
import { Slide } from 'react-awesome-reveal';
import season2Img from '../../assets/events/Grand_Finale_PC_II.jpg';
import season1Img from '../../assets/ELF_Gallery/Presentation_Champs_Season_1_27_Sep_2024/Presentation_Champs_Season_1_27_Sep_2024.jpg';

const FlagshipProgram = () => {
  return (
    <section className="py-20 bg-linear-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Season 2 */}
        <Slide direction="left" triggerOnce>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-[#ec4622]/20 text-[#ec4622] rounded-full text-sm font-medium mb-6">
              Flagship Program
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Presentation Champs <span className="text-[#ec4622]">Season II</span>
            </h2>
            <p className="text-xl text-gray-400 mb-6">Inter University Competition</p>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              An elite inter-university competition testing creativity, logic, and delivery. 
              Powered by TCL Global.
            </p>

            <ul className="space-y-4 mb-8">
               <li className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-[#ec4622] mt-1" />
                <div>
                  <span className="block text-white font-medium">Jan 16 - Jan 25, 2026</span>
                  <span className="text-sm text-gray-400">UIU Multipurpose Hall</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Trophy className="w-5 h-5 text-[#ec4622] mt-1" />
                <div>
                  <span className="block text-white font-medium">Prize Pool: BDT 50,000</span>
                  <span className="text-sm text-gray-400">Champion: 25k | Runners-up: 15k & 10k</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mic className="w-5 h-5 text-[#ec4622] mt-1" />
                <div>
                  <span className="block text-white font-medium">3 Intense Rounds</span>
                  <span className="text-sm text-gray-400">Elevator Pitch • Extempore • Pecha-Kucha</span>
                </div>
              </li>
            </ul>

            <Link
              to="/events/presentation-champs-s2"
              className="inline-flex items-center px-6 py-3 bg-[#ec4622] text-white rounded-lg font-medium hover:bg-[#d13d1c] transition-colors"
            >
              View Full Details
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#ec4622]/20 rounded-3xl blur-2xl"></div>
            <img
              src={season2Img}
              alt="Presentation Champs Season 2"
              className="relative rounded-2xl shadow-2xl w-full aspect-3/2 object-cover bg-white/5 backdrop-blur-sm p-2 ring-1 ring-white/10"
            />
          </div>
        </div>
        </Slide>

        {/* Season 1 */}
        <Slide direction="right" triggerOnce>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <span className="inline-block px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium mb-6">
              Archive
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Presentation Champs <span className="text-gray-400">Season I</span>
            </h2>
            <p className="text-xl text-gray-400 mb-6">Intra University Competition</p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              The inaugural season of the presentation battle where ~60 teams competed. 
              Powered by Global Study with Co-Sponsor Bongo.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-[#ec4622] mt-1" />
                <div>
                  <span className="block text-white font-medium">Sep 27 - Oct 5, 2024</span>
                  <span className="text-sm text-gray-400">UIU Smart Room 126 & Multipurpose Hall</span>
                </div>
              </li>
               <li className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-[#ec4622] mt-1" />
                <div>
                  <span className="block text-white font-medium">~60 Teams Participated</span>
                  <span className="text-sm text-gray-400">Winners: Team "Caffeine Crew"</span>
                </div>
              </li>
            </ul>

            <Link
              to="/events/presentation-champs-s1"
              className="inline-flex items-center px-6 py-3 border border-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              See Past Records
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
          <div className="relative lg:order-1">
            <div className="absolute -inset-4 bg-gray-700/30 rounded-3xl blur-2xl"></div>
            <img
              src={season1Img}
              alt="Presentation Champs Season 1"
              className="relative rounded-2xl shadow-2xl w-full aspect-3/2 object-cover bg-white/5 backdrop-blur-sm p-2 ring-1 ring-white/10"
            />
          </div>
        </div>
        </Slide>

      </div>
    </section>
  );
};

export default FlagshipProgram;
